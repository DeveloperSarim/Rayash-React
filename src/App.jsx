import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import VirtualTours from './pages/VirtualTours'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function LanguagePathSync() {
  const location = useLocation()
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  useEffect(() => {
    const isArabicPath = location.pathname === '/ar' || location.pathname.startsWith('/ar/')

    if (isArabicPath && i18n.language !== 'ar') {
      i18n.changeLanguage('ar')
      return
    }

    if (!isArabicPath && i18n.language === 'ar') {
      const targetPath = location.pathname === '/' ? '/ar' : `/ar${location.pathname}`
      navigate(`${targetPath}${location.search}${location.hash}`, { replace: true })
      return
    }

    if (isArabicPath && i18n.language !== 'ar') {
      i18n.changeLanguage('ar')
    }
  }, [location.pathname, location.search, location.hash, navigate, i18n])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LanguagePathSync />
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ar" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/ar/properties" element={<Properties />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/ar/property/:id" element={<PropertyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ar/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/ar/blog/:id" element={<BlogPost />} />
            <Route path="/virtual-tours" element={<VirtualTours />} />
            <Route path="/ar/virtual-tours" element={<VirtualTours />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ar/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
