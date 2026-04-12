import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Building2, Home as HomeIcon, Shield, Award, Users, Handshake,
  ArrowRight, CheckCircle, ChevronRight, Target, Eye,
  TrendingUp, Star, Phone, MapPin, Mail, PlayCircle
} from 'lucide-react'
import PropertyCard from '../components/PropertyCard'
import { getFeaturedProperties, toArabicDigits } from '../data/properties'
import { teamMembers } from '../data/team'

// ─── DATA ───────────────────────────────────────────────
const values = [
  { icon: Award,    title: 'Professionalism', description: 'Providing services with a high level of professionalism and efficiency' },
  { icon: Shield,   title: 'Transparency',    description: 'Dealing with clarity and honesty with clients and partners' },
  { icon: Users,    title: 'Community Values', description: "Launching community initiatives that align with the Kingdom's Vision 2030" },
]

const aboutCheckpoints = [
  'Deep market knowledge', 'Experienced team', 'Personalized service', 'Transparent dealings',
]

const services = [
  { icon: Building2,   title: 'Real Estate Marketing',  description: 'Providing customized marketing plans for residential and commercial properties to maximize exposure and attract qualified buyers.', link: '/properties' },
  { icon: Shield,      title: 'Real Estate Consulting',  description: 'Providing specialized consultations to help clients make informed decisions about buying, selling, or investing in real estate.', link: '/contact' },
  { icon: Handshake,   title: 'Property Management',     description: 'Providing comprehensive property management services to ensure sustainability and optimal investment returns for property owners.', link: '/contact' },
]

const stats = [
  { value: '3000+', label: 'Satisfied Clients' },
  { value: '1.5B',  label: 'SAR in Deals' },
  { value: '21+',   label: 'Years Experience' },
]

const whyUsItems = [
  { icon: TrendingUp, title: 'Experience and Professionalism', description: 'A specialized team that combines deep market knowledge with innovative vision to deliver exceptional results.' },
  { icon: Shield,     title: 'Trust and Credibility',          description: 'We care about building long-term relationships with our clients by providing transparent and reliable services.' },
]

const whyUsCheckpoints = [
  'Deep market knowledge', 'Experienced team', 'Personalized service', 'Transparent dealings',
]

// ─── HERO ────────────────────────────────────────────────
function HeroSection() {
  const ref = useRef(null)
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language?.startsWith('ar')
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY      = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity  = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const localizeDigits = (value) => (isArabic ? toArabicDigits(value) : value)

  const heroStats = [
    { value: localizeDigits(t('hero_stat1_val')), label: t('hero_stat1_label') },
    { value: localizeDigits(t('hero_stat2_val')), label: t('hero_stat2_label') },
    { value: localizeDigits(t('hero_stat3_val')), label: t('hero_stat3_label') },
  ]

  return (
    <div ref={ref} className="relative min-h-screen lg:h-screen overflow-hidden pt-20 lg:pt-0">
      {/* Parallax bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#242424]/90 via-[#242424]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/50 via-transparent to-[#242424]/30" />
      </motion.div>

      {/* Dot pattern */}
      <div className="absolute inset-0 z-[1] opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #bb9661 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#bb9661]/20 backdrop-blur-sm rounded-full mb-6">
              <span className="w-2 h-2 bg-[#bb9661] rounded-full animate-pulse" />
              <span className="text-[#e0c595] text-sm font-medium">{t('hero_badge')}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t('hero_title1')}
              <span className="block text-[#e0c595] mt-2">{t('hero_title2')}</span>
              <span className="block text-white/90 text-3xl sm:text-4xl lg:text-5xl mt-2 font-normal">{t('hero_title3')}</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed">
              {t('hero_desc')}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4">
              <Link to="/properties?status=for-sale"
                className={`group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#bb9661] text-white font-medium rounded-full hover:bg-[#a88450] transition-all hover:shadow-xl hover:shadow-[#bb9661]/30 ${isArabic ? 'sm:flex-row-reverse' : ''}`}>
                <Building2 className="w-5 h-5" />
                <span>{t('hero_btn_sale')}</span>
                <ArrowRight className={`w-5 h-5 transition-transform ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </Link>
              <Link to="/properties?status=for-rent"
                className={`group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all ${isArabic ? 'sm:flex-row-reverse' : ''}`}>
                <HomeIcon className="w-5 h-5" />
                <span>{t('hero_btn_rent')}</span>
                <ArrowRight className={`w-5 h-5 transition-transform ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </Link>
            </motion.div>

            {/* Inline stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-3 gap-8">
                {heroStats.map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-bold text-[#bb9661]">{s.value}</div>
                    <div className="text-sm text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </div>
    </div>
  )
}

// ─── VALUES (dark) ───────────────────────────────────────
function ValuesSection() {
  const { t } = useTranslation()
  const vals = [
    { icon: Award,  title: t('val1_title'), description: t('val1_desc') },
    { icon: Shield, title: t('val2_title'), description: t('val2_desc') },
    { icon: Users,  title: t('val3_title'), description: t('val3_desc') },
  ]
  return (
    <section className="py-20 bg-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#bb9661] text-sm font-medium uppercase tracking-wider">{t('values_sub')}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">{t('values_title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vals.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#bb9661]/0 to-[#bb9661]/0 group-hover:from-[#bb9661]/10 group-hover:to-[#bb9661]/5 transition-all duration-500" />
                <div className="relative w-16 h-16 mb-6 rounded-xl bg-[#bb9661]/20 flex items-center justify-center">
                  <v.icon className="w-8 h-8 text-[#bb9661]" />
                </div>
                <h3 className="relative text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="relative text-gray-400 leading-relaxed">{v.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#bb9661] to-[#e0c595] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── ABOUT ───────────────────────────────────────────────
function AboutSection() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language?.startsWith('ar')
  return (
    <section className="py-24 bg-white overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/about-us.jpg" alt="Rayash Real Estate Team" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/30 to-transparent" />
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-[#bb9661]/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#bb9661]">{isArabic ? toArabicDigits('21+') : '21+'}</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{t('about_years_label')}</div>
                    <div className="font-semibold text-[#242424]">{t('about_years_sub')}</div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#bb9661]/30 rounded-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#bb9661]/10 rounded-xl -z-10" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-[#bb9661] text-sm font-medium uppercase tracking-wider">{t('about_sub')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#242424] mt-3 mb-6 leading-tight">
              {t('about_title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{t('about_desc1')}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{t('about_desc2')}</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[t('chk1'), t('chk2'), t('chk3'), t('chk4')].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }} className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full bg-[#bb9661]/10 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-[#bb9661]" />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
            <Link to="/contact"
              className={`group inline-flex items-center gap-2 px-8 py-4 bg-[#242424] text-white font-medium rounded-full hover:bg-[#bb9661] transition-all ${isArabic ? 'flex-row-reverse' : ''}`}>
              <span>{t('about_cta')}</span>
              <ArrowRight className={`w-5 h-5 transition-transform ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── SERVICES ────────────────────────────────────────────
function ServicesSection() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language?.startsWith('ar')
  const srvItems = [
    { icon: Building2, title: t('srv1_title'), description: t('srv1_desc'), link: '/properties' },
    { icon: Shield,    title: t('srv2_title'), description: t('srv2_desc'), link: '/contact' },
    { icon: Handshake, title: t('srv3_title'), description: t('srv3_desc'), link: '/contact' },
  ]
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#bb9661] text-sm font-medium uppercase tracking-wider">{t('services_sub')}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#242424] mt-2 mb-4">{t('services_title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('services_desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {srvItems.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }} className="group">
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#bb9661]/10 group-hover:border-[#bb9661]/20">
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#bb9661]/20 to-[#bb9661]/5 flex items-center justify-center">
                  <s.icon className="w-8 h-8 text-[#bb9661]" />
                </div>
                <h3 className="text-xl font-bold text-[#242424] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <Link to={s.link} className={`inline-flex items-center gap-2 text-[#bb9661] font-medium group/link ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <span>{t('learn_more')}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isArabic ? 'rotate-180 group-hover/link:-translate-x-1' : 'group-hover/link:translate-x-1'}`} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FEATURED PROPERTIES ─────────────────────────────────
function FeaturedPropertiesSection() {
  const [filter, setFilter] = useState('all')
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language?.startsWith('ar')
  const all = getFeaturedProperties(i18n.language)
  const filtered = filter === 'all' ? all : all.filter(p => p.status === filter)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-[#bb9661] text-sm font-medium uppercase tracking-wider">{t('feat_sub')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#242424] mt-2">{t('feat_title')}</h2>
          </div>
          <div className="flex space-x-2 mt-6 md:mt-0 bg-gray-100 p-1 rounded-full">
            {[['all', t('feat_all')],['for-sale', t('feat_sale')],['for-rent', t('feat_rent')]].map(([val, label]) => (
              <button key={val} onClick={() => setFilter(val)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === val ? 'bg-[#bb9661] text-white shadow-md' : 'text-gray-600 hover:text-[#242424]'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.slice(0, 4).map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Link to={`/property/${p.id}`}>
                <PropertyCard property={p} />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/properties"
            className={`group inline-flex items-center gap-2 px-8 py-4 bg-[#242424] text-white font-medium rounded-full hover:bg-[#bb9661] transition-all ${isArabic ? 'flex-row-reverse' : ''}`}>
            <span>{t('view_all')}</span>
            <ArrowRight className={`w-5 h-5 transition-transform ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── VISION & MISSION (dark) ─────────────────────────────
function VisionMissionSection() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language?.startsWith('ar')

  return (
    <section className="py-24 bg-[#242424] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #bb9661 1px, transparent 0)', backgroundSize: '50px 50px' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {isArabic ? (
          <div dir="rtl" className="font-[Noto_Kufi_Arabic] grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }} className="text-center lg:text-right">
              <motion.div whileHover={{ rotate: -10, scale: 1.1 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#bb9661]/20 mb-6">
                <Eye className="w-10 h-10 text-[#bb9661]" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">{t('vision_title')}</h3>
              <div className="h-0.5 mb-6 bg-gradient-to-r from-transparent via-[#bb9661]/35 to-transparent" />
              <p className="text-gray-400 leading-relaxed text-lg">{t('vision_desc')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }} className="text-center lg:text-right">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#bb9661]/20 mb-6">
                <Target className="w-10 h-10 text-[#bb9661]" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">{t('mission_title')}</h3>
              <div className="h-0.5 mb-6 bg-gradient-to-r from-transparent via-[#bb9661]/35 to-transparent" />
              <p className="text-gray-400 leading-relaxed text-lg">{t('mission_desc')}</p>
            </motion.div>
          </div>
        ) : (
          <div dir="ltr" className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }} className="text-center lg:text-left">
              <motion.div whileHover={{ rotate: -10, scale: 1.1 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#bb9661]/20 mb-6">
                <Eye className="w-10 h-10 text-[#bb9661]" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">Vision</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                To be the leading real estate marketing company in the region, recognized
                by clients and partners as a provider of innovative and reliable real estate
                services that set the standard for excellence in the industry.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }} className="text-center lg:text-left">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#bb9661]/20 mb-6">
                <Target className="w-10 h-10 text-[#bb9661]" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">Mission</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                To provide comprehensive and distinguished real estate marketing
                services that meet clients' needs, using the latest technologies and
                innovative marketing strategies, with a focus on quality and transparency
                in all transactions.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

// ─── LEADERSHIP / TEAM ───────────────────────────────────
function LeadershipSection() {
  const { t } = useTranslation()
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-[#bb9661] text-sm font-medium uppercase tracking-wider">{t('leadership_sub')}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#242424] mt-2 mb-4">{t('leadership_title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('leadership_desc')}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((m, i) => (
            <motion.div key={m.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 transition-all duration-300 group-hover:shadow-xl">
                <div className="relative h-72 overflow-hidden">
                  <img src={m.image} alt={t(`team_member_${m.id}_name`)} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/60 via-transparent to-transparent" />
                  <div className="absolute inset-4 border-2 border-[#bb9661] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center">
                  <div className="w-8 h-0.5 bg-[#bb9661] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#242424] mb-1">{t(`team_member_${m.id}_name`)}</h3>
                  <p className="text-[#bb9661] font-medium text-sm mb-4">{t(`team_member_${m.id}_role`)}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{t(`team_member_${m.id}_bio`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── STATS (dark) ────────────────────────────────────────
function StatsSection() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language?.startsWith('ar')
  const localizeDigits = (value) => (isArabic ? toArabicDigits(value) : value)
  return (
    <section className="py-24 bg-[#242424] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#bb9661]/5 via-transparent to-[#bb9661]/5" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#bb9661]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#bb9661]/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            { value: localizeDigits(t('stat1_val')), label: t('stat1_label') },
            { value: localizeDigits(t('stat2_val')), label: t('stat2_label') },
            { value: localizeDigits(t('stat3_val')), label: t('stat3_label') },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.2 }} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#bb9661] mb-2">{s.value}</div>
              <div className="text-gray-400 text-sm sm:text-base uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── WHY RAYASH ──────────────────────────────────────────
function WhyRayashSection() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language?.startsWith('ar')
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-[#bb9661] text-sm font-medium uppercase tracking-wider">{t('why_sub')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#242424] mt-2 mb-6">{t('why_title')}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{t('why_desc')}</p>
            <div className="space-y-6">
              {[
                { icon: TrendingUp, title: t('why1_title'), description: t('why1_desc') },
                { icon: Shield,     title: t('why2_title'), description: t('why2_desc') },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="flex items-start space-x-4">
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 rounded-xl bg-[#bb9661]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-[#bb9661]" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#242424] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[t('chk1'), t('chk2'), t('chk3'), t('chk4')].map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full bg-[#bb9661]/10 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-[#bb9661]" />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/contact-bg.jpg" alt="Luxury Property" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/40 to-transparent" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#bb9661]">{isArabic ? toArabicDigits(t('why_stat1')) : t('why_stat1')}</div>
                    <div className="text-xs text-gray-500">{t('why_stat1_label')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#bb9661]">{isArabic ? toArabicDigits(t('why_stat2')) : t('why_stat2')}</div>
                    <div className="text-xs text-gray-500">{t('why_stat2_label')}</div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#bb9661]/30 rounded-xl -z-10" />
              <div className="absolute -bottom-4 right-8 w-32 h-32 bg-[#bb9661]/10 rounded-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT SECTION ─────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const { t } = useTranslation()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }) }, 3000)
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-[#bb9661] text-sm font-medium uppercase tracking-wider">{t('contact_sub')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#242424] mt-2 mb-4">{t('contact_title')}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{t('contact_desc')}</p>
            <div className="space-y-6 mb-8">
              {[
                { icon: MapPin, title: t('contact_address_title'), text: t('contact_address') },
                { icon: Phone, title: t('contact_phone_title'), text: '920014891', href: 'tel:920014891' },
                { icon: Mail, title: t('contact_email_title'), text: 'info@ror.sa', href: 'mailto:info@ror.sa' },
              ].map(({ icon: Icon, title, text, href }) => (
                <div key={title} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#bb9661]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#bb9661]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#242424] mb-1">{title}</h4>
                    {href ? (
                      <a href={href} className="text-gray-600 hover:text-[#bb9661] transition-colors">{text}</a>
                    ) : (
                      <p className="text-gray-600">{text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.8937!2d39.098727!3d21.772005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ2JzE5LjIiTiAzOcKwMDUnNTUuNCJF!5e0!3m2!1sen!2ssa!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Rayash Real Estate Location"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50">
              <h3 className="text-2xl font-bold text-[#242424] mb-6">{t('contact_form_title')}</h3>
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-[#242424] mb-2">{t('contact_success_title')}</h4>
                  <p className="text-gray-600">{t('contact_success_desc')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#242424] mb-2">{t('contact_name')}</label>
                      <input type="text" name="name" required value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder={t('contact_name_ph')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#bb9661] transition-colors text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#242424] mb-2">{t('contact_email_label')}</label>
                      <input type="email" name="email" required value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        placeholder={t('contact_email_ph')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#bb9661] transition-colors text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#242424] mb-2">{t('contact_phone_label')}</label>
                    <input type="tel" name="phone" value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      placeholder={t('contact_phone_ph')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#bb9661] transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#242424] mb-2">{t('contact_msg')}</label>
                    <textarea name="message" required rows={5} value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder={t('contact_msg_ph')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#bb9661] transition-colors text-sm resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full py-4 bg-[#bb9661] text-white font-medium rounded-full hover:bg-[#a88450] transition-all hover:shadow-lg hover:shadow-[#bb9661]/30">
                    {t('contact_send')}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── HOME PAGE ───────────────────────────────────────────
export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <HeroSection />
      <ValuesSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedPropertiesSection />
      <VisionMissionSection />
      <LeadershipSection />
      <StatsSection />
      <WhyRayashSection />
      <ContactSection />
    </motion.div>
  )
}
