import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Bed, Bath, Maximize2, CheckCircle, ArrowLeft, Phone, Mail, Share2, Facebook, Linkedin, MessageCircle, Copy, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getPropertyById, getLocalizedProperties, formatPrice, formatLocalizedNumber } from '../data/properties'
import PropertyCard from '../components/PropertyCard'

export default function PropertyDetail() {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const property = getPropertyById(id, i18n.language)
  const [showShareOptions, setShowShareOptions] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = `${property?.title ?? t('prop_page_title')} - ${property?.location ?? ''}`.trim()

  const openShareWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=700')
  }

  const handleShare = (platform) => {
    const encodedUrl = encodeURIComponent(shareUrl)
    const encodedText = encodeURIComponent(shareText)

    const platformUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
    }

    if (platformUrls[platform]) {
      openShareWindow(platformUrls[platform])
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = shareUrl
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const getTypeLabel = (type) => {
    if (type === 'villa') return t('type_villa')
    if (type === 'apartment') return t('type_apt')
    if (type === 'land') return t('type_land')
    if (type === 'commercial') return t('type_commercial')
    return type
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl text-dark mb-4">{t('property_not_found')}</h2>
          <Link to="/properties" className="btn-primary">{t('back_properties')}</Link>
        </div>
      </div>
    )
  }

  const related = getLocalizedProperties(i18n.language).filter((p) => p.id !== property.id && p.type === property.type).slice(0, 3)
  // wrap each related card in a Link

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-[#242424] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <Link to="/" className="hover:text-gold transition-colors">{t('nav_home')}</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-gold transition-colors">{t('nav_properties')}</Link>
            <span>/</span>
            <span className="text-gold">{property.code}</span>
          </div>
          <Link to="/properties" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm">
            <ArrowLeft size={16} />
            {t('back_properties')}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="relative overflow-hidden mb-6">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`text-white text-sm font-semibold px-3 py-1 rounded-full ${property.status === 'for-sale' ? 'bg-[#bb9661]' : 'bg-[#242424]'}`}>
                  {property.status === 'for-sale' ? t('for_sale') : t('for_rent')}
                </span>
                <span className="bg-white/90 text-[#242424] text-sm font-semibold px-3 py-1 rounded-full">
                  {getTypeLabel(property.type)}
                </span>
              </div>
            </div>

            {/* Title and Price */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="font-display text-3xl font-bold text-dark mb-2">{property.title}</h1>
                <div className="flex items-center gap-1 text-gray-500">
                  <MapPin size={16} />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#bb9661]">{formatPrice(property.price, property.status, i18n.language)}</div>
                <div className="text-gray-400 text-sm">{t('code_label')}: {property.code}</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 bg-gray-50 p-6 mb-8">
              {property.bedrooms > 0 && (
                <div className="text-center">
                  <Bed size={24} className="text-gold mx-auto mb-2" />
                  <div className="font-bold text-dark text-xl">{formatLocalizedNumber(property.bedrooms, i18n.language)}</div>
                  <div className="text-gray-500 text-sm">{t('bedrooms')}</div>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="text-center">
                  <Bath size={24} className="text-gold mx-auto mb-2" />
                  <div className="font-bold text-dark text-xl">{formatLocalizedNumber(property.bathrooms, i18n.language)}</div>
                  <div className="text-gray-500 text-sm">{t('bathrooms')}</div>
                </div>
              )}
              {property.area > 0 && (
                <div className="text-center">
                  <Maximize2 size={24} className="text-gold mx-auto mb-2" />
                  <div className="font-bold text-dark text-xl">{formatLocalizedNumber(property.area, i18n.language)}</div>
                  <div className="text-gray-500 text-sm">{t('area_label')}</div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="font-display text-xl font-semibold text-dark mb-4 pb-2 border-b border-gray-200">
                {t('description_heading')}
              </h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-4 pb-2 border-b border-gray-200">
                {t('features_heading')}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-dark text-sm">
                    <CheckCircle size={16} className="text-gold shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              {/* Contact Card */}
              <div className="bg-[#242424] p-8 mb-6">
                <h3 className="font-display font-semibold text-white text-xl mb-6">{t('interested_title')}</h3>
                <p className="text-gray-400 text-sm mb-6">
                  {t('interested_desc')}
                </p>

                <div className="space-y-3 mb-6">
                  <a
                    href="tel:+966"
                    className="flex items-center gap-3 w-full bg-[#bb9661] text-white py-3 px-5 font-semibold hover:bg-[#a88450] transition-colors"
                  >
                    <Phone size={18} />
                    {t('call_now')}
                  </a>
                  <a
                    href="mailto:info@ror.sa"
                    className="flex items-center gap-3 w-full border border-[#bb9661] text-[#bb9661] py-3 px-5 font-semibold hover:bg-[#bb9661] hover:text-white transition-colors"
                  >
                    <Mail size={18} />
                    {t('email_us')}
                  </a>
                </div>

                {/* Quick Inquiry Form */}
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder={t('your_name')}
                    className="w-full bg-white/10 border border-gray-700 text-white placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                  />
                  <input
                    type="email"
                    placeholder={t('your_email')}
                    className="w-full bg-white/10 border border-gray-700 text-white placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                  />
                  <input
                    type="tel"
                    placeholder={t('your_phone')}
                    className="w-full bg-white/10 border border-gray-700 text-white placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                  />
                  <textarea
                    rows={3}
                    placeholder={t('your_message')}
                    defaultValue={`I'm interested in property ${property.code} - ${property.title}`}
                    className="w-full bg-white/10 border border-gray-700 text-white placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:border-gold resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#bb9661] text-white hover:text-white py-3 px-5 font-semibold hover:bg-[#a88450] transition-colors"
                  >
                    {t('send_inquiry')}
                  </button>
                </form>
              </div>

              {/* Share */}
              <div className="border border-gray-200 bg-white p-4">
                <button
                  type="button"
                  onClick={() => setShowShareOptions((prev) => !prev)}
                  className="w-full flex items-center justify-center gap-2 py-2 text-[#242424] text-sm font-medium hover:text-[#bb9661] transition-colors"
                >
                  <Share2 size={16} />
                  {t('share_property')}
                </button>

                {showShareOptions && (
                  <div className="mt-4 space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => handleShare('facebook')}
                        className="flex items-center justify-center gap-2 border border-gray-200 py-2 text-xs font-medium text-[#242424] hover:border-[#bb9661] hover:text-[#bb9661] transition-colors"
                        aria-label={t('share_on_facebook')}
                      >
                        <Facebook size={15} />
                        {t('share_facebook')}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleShare('linkedin')}
                        className="flex items-center justify-center gap-2 border border-gray-200 py-2 text-xs font-medium text-[#242424] hover:border-[#bb9661] hover:text-[#bb9661] transition-colors"
                        aria-label={t('share_on_linkedin')}
                      >
                        <Linkedin size={15} />
                        {t('share_linkedin')}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleShare('whatsapp')}
                        className="flex items-center justify-center gap-2 border border-gray-200 py-2 text-xs font-medium text-[#242424] hover:border-[#bb9661] hover:text-[#bb9661] transition-colors"
                        aria-label={t('share_on_whatsapp')}
                      >
                        <MessageCircle size={15} />
                        {t('share_whatsapp')}
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="w-full flex items-center justify-center gap-2 bg-[#bb9661] py-2.5 text-sm font-semibold text-white hover:bg-[#a88450] transition-colors"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      {copied ? t('link_copied') : t('copy_property_link')}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-dark mb-8">{t('similar_properties')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link key={p.id} to={`/property/${p.id}`} className="group">
                  <PropertyCard property={p} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
