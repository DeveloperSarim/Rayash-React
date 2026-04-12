import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Building2, Compass, FileText, Mail, Phone, Menu, X, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const isArabic = i18n.language === 'ar'

  const navLinks = [
    { path: '/', label: t('nav_home'), icon: Home },
    { path: '/properties', label: t('nav_properties'), icon: Building2 },
    { href: 'https://view.ror.sa', label: t('nav_tours'), icon: Compass, external: true },
    { path: '/blog', label: t('nav_blog'), icon: FileText },
    { path: '/contact', label: t('nav_contact'), icon: Mail },
  ]

  const isHome = location.pathname === '/'
  const isWhite = !isHome || scrolled || mobileOpen

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    setLangOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  // Close lang dropdown on outside click
  useEffect(() => {
    const close = () => setLangOpen(false)
    if (langOpen) document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [langOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isWhite ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`text-2xl font-bold font-serif transition-colors ${
                  isWhite ? 'text-[#242424]' : 'text-white'
                }`}
              >
                <span className="text-[#bb9661]">R</span>ayash
              </motion.div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative text-sm font-medium transition-colors hover:text-[#bb9661] ${
                      isWhite ? 'text-[#242424]' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative text-sm font-medium transition-colors hover:text-[#bb9661] ${
                      isWhite ? 'text-[#242424]' : 'text-white'
                    } ${location.pathname === link.path ? 'text-[#bb9661]' : ''}`}
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#bb9661]"
                      />
                    )}
                  </Link>
                )
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:920014891"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isWhite ? 'text-[#242424]' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4 text-[#bb9661]" />
                <span>920014891</span>
              </a>

              {/* Language Switcher */}
              <div className="relative" onClick={e => e.stopPropagation()}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full border transition-all text-sm font-medium ${
                    isWhite
                      ? 'border-gray-200 text-[#242424] hover:border-[#bb9661] hover:text-[#bb9661]'
                      : 'border-white/30 text-white hover:border-white'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span>{isArabic ? 'AR' : 'EN'}</span>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-full mt-2 ${isArabic ? 'left-0' : 'right-0'} bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[120px] z-50`}
                    >
                      <button
                        onClick={() => switchLanguage('en')}
                        className={`w-full flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                          !isArabic ? 'text-[#bb9661] font-semibold' : 'text-[#242424]'
                        }`}
                      >
                        <span>🇬🇧</span><span>English</span>
                      </button>
                      <button
                        onClick={() => switchLanguage('ar')}
                        className={`w-full flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                          isArabic ? 'text-[#bb9661] font-semibold' : 'text-[#242424]'
                        }`}
                      >
                        <span>🇸🇦</span><span>العربية</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/properties"
                className="px-6 py-2.5 bg-[#bb9661] text-white text-sm font-medium rounded-full hover:bg-[#a88450] transition-all hover:shadow-lg hover:shadow-[#bb9661]/30"
              >
                {t('nav_explore')}
              </Link>
            </div>

            {/* Mobile Right Side: language + hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Mobile Language Toggle */}
              <button
                onClick={() => switchLanguage(isArabic ? 'en' : 'ar')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full border text-xs font-medium transition-all ${
                  isWhite
                    ? 'border-gray-200 text-[#242424] hover:border-[#bb9661]'
                    : 'border-white/30 text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{isArabic ? 'AR' : 'EN'}</span>
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isWhite ? 'text-[#242424]' : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: isArabic ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isArabic ? '-100%' : '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute ${isArabic ? 'left-0' : 'right-0'} top-0 bottom-0 w-80 bg-white shadow-2xl`}
            >
              <div className="p-6 pt-24">
                <div className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.external ? link.href : link.path}
                      initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-4 rounded-xl transition-all text-[#242424] hover:bg-gray-100"
                        >
                          <link.icon className="w-5 h-5 flex-shrink-0" />
                          <span className="font-medium">{link.label}</span>
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                            location.pathname === link.path
                              ? 'bg-[#bb9661]/10 text-[#bb9661]'
                              : 'text-[#242424] hover:bg-gray-100'
                          }`}
                        >
                          <link.icon className="w-5 h-5 flex-shrink-0" />
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Language section in drawer */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 px-2">
                    {isArabic ? 'اللغة' : 'Language'}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => switchLanguage('en')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                        !isArabic ? 'bg-[#bb9661] text-white border-[#bb9661]' : 'border-gray-200 text-[#242424]'
                      }`}
                    >
                      <span>🇬🇧</span><span>English</span>
                    </button>
                    <button
                      onClick={() => switchLanguage('ar')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                        isArabic ? 'bg-[#bb9661] text-white border-[#bb9661]' : 'border-gray-200 text-[#242424]'
                      }`}
                    >
                      <span>🇸🇦</span><span>العربية</span>
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href="tel:920014891"
                    className="flex items-center justify-center gap-2 w-full p-4 bg-[#bb9661] text-white rounded-xl font-medium"
                  >
                    <Phone className="w-5 h-5" />
                    <span>920014891</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
