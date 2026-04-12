import { useParams, Link } from 'react-router-dom'
import { MapPin, Bed, Bath, Maximize2, CheckCircle, ArrowLeft, Phone, Mail, Share2 } from 'lucide-react'
import { getPropertyById, properties, formatPrice } from '../data/properties'
import PropertyCard from '../components/PropertyCard'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = getPropertyById(id)

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl text-dark mb-4">Property Not Found</h2>
          <Link to="/properties" className="btn-primary">Back to Properties</Link>
        </div>
      </div>
    )
  }

  const related = properties.filter((p) => p.id !== property.id && p.type === property.type).slice(0, 3)
  // wrap each related card in a Link

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-[#242424] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-gold transition-colors">Properties</Link>
            <span>/</span>
            <span className="text-gold">{property.code}</span>
          </div>
          <Link to="/properties" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm">
            <ArrowLeft size={16} />
            Back to Properties
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
                  {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                </span>
                <span className="bg-white/90 text-[#242424] text-sm font-semibold px-3 py-1 rounded-full">
                  {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
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
                <div className="text-3xl font-bold text-[#bb9661]">{formatPrice(property.price, property.status)}</div>
                <div className="text-gray-400 text-sm">Code: {property.code}</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 bg-gray-50 p-6 mb-8">
              {property.bedrooms > 0 && (
                <div className="text-center">
                  <Bed size={24} className="text-gold mx-auto mb-2" />
                  <div className="font-bold text-dark text-xl">{property.bedrooms}</div>
                  <div className="text-gray-500 text-sm">Bedrooms</div>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="text-center">
                  <Bath size={24} className="text-gold mx-auto mb-2" />
                  <div className="font-bold text-dark text-xl">{property.bathrooms}</div>
                  <div className="text-gray-500 text-sm">Bathrooms</div>
                </div>
              )}
              {property.area > 0 && (
                <div className="text-center">
                  <Maximize2 size={24} className="text-gold mx-auto mb-2" />
                  <div className="font-bold text-dark text-xl">{property.area}</div>
                  <div className="text-gray-500 text-sm">Area (m²)</div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="font-display text-xl font-semibold text-dark mb-4 pb-2 border-b border-gray-200">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-4 pb-2 border-b border-gray-200">
                Features & Amenities
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
              <div className="bg-dark p-8 mb-6">
                <h3 className="font-display font-semibold text-white text-xl mb-6">Interested in This Property?</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Contact our team for more information or to schedule a viewing.
                </p>

                <div className="space-y-3 mb-6">
                  <a
                    href="tel:+966"
                    className="flex items-center gap-3 w-full bg-gold text-white py-3 px-5 font-semibold hover:bg-gold-dark transition-colors"
                  >
                    <Phone size={18} />
                    Call Us Now
                  </a>
                  <a
                    href="mailto:info@ror.sa"
                    className="flex items-center gap-3 w-full border border-gold text-gold py-3 px-5 font-semibold hover:bg-gold hover:text-white transition-colors"
                  >
                    <Mail size={18} />
                    Email Us
                  </a>
                </div>

                {/* Quick Inquiry Form */}
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/10 border border-gray-700 text-white placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/10 border border-gray-700 text-white placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full bg-white/10 border border-gray-700 text-white placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                  />
                  <textarea
                    rows={3}
                    placeholder="Your Message"
                    defaultValue={`I'm interested in property ${property.code} - ${property.title}`}
                    className="w-full bg-white/10 border border-gray-700 text-white placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:border-gold resize-none"
                  />
                  <button type="submit" className="w-full btn-primary btn-shine">
                    Send Inquiry
                  </button>
                </form>
              </div>

              {/* Share */}
              <button className="w-full flex items-center justify-center gap-2 border border-gray-200 py-3 text-dark text-sm font-medium hover:border-gold hover:text-gold transition-all">
                <Share2 size={16} />
                Share This Property
              </button>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-dark mb-8">Similar Properties</h2>
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
