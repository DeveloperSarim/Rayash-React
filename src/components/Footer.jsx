import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/properties', label: 'Properties' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

const services = [
  'Real Estate Marketing',
  'Property Management',
  'Real Estate Consulting',
  'Virtual Tours',
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#242424] text-white">
      {/* Gold top bar */}
      <div className="h-1 bg-gradient-to-r from-[#bb9661] via-[#e0c595] to-[#bb9661]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-bold font-serif">
                <span className="text-[#bb9661]">R</span>ayash
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Rayash Real Estate is your trusted partner in the Kingdom of Saudi Arabia. We build your real estate future with confidence and excellence, offering integrated real estate solutions that combine local expertise with a future vision.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.2, color: '#bb9661' }}
                  className="text-gray-400 hover:text-[#bb9661] transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[#bb9661]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#bb9661] transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#bb9661] mr-0 group-hover:mr-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[#bb9661]">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm flex items-center group">
                    <span className="w-1 h-1 bg-[#bb9661] rounded-full mr-2 flex-shrink-0" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[#bb9661]">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</span>
                <a href="tel:920014891" className="hover:text-[#bb9661] transition-colors">920014891</a>
              </li>
              <li>
                <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:info@ror.sa" className="hover:text-[#bb9661] transition-colors">info@ror.sa</a>
              </li>
              <li>
                <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Address</span>
                <span>Prince Naif Road, Jeddah</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {year} Rayash Real Estate. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-[#bb9661] transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#bb9661] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
