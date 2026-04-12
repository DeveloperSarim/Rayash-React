import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    details: ['Jeddah, Al-Sharaa District', 'Prince Naif Road'],
  },
  {
    icon: Phone,
    title: 'Phone Number',
    details: ['920014891'],
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: ['info@ror.sa', 'support@ror.sa'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Sun – Thu: 9:00 AM – 6:00 PM', 'Sat: 10:00 AM – 4:00 PM'],
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      {/* Dark Header */}
      <div className="bg-[#242424] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-400 max-w-2xl">
              Get in touch with our expert team for any real estate inquiries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map(({ icon: Icon, title, details }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 text-center group transition-all duration-300 hover:shadow-xl hover:shadow-[#bb9661]/10"
              >
                <div className="w-14 h-14 bg-[#bb9661]/10 group-hover:bg-[#bb9661] flex items-center justify-center mx-auto mb-4 rounded-xl transition-all duration-300">
                  <Icon size={24} className="text-[#bb9661] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-[#242424] text-lg mb-3">{title}</h3>
                {details.map((d, idx) => (
                  <p key={idx} className="text-gray-500 text-sm">{d}</p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-10 shadow-xl shadow-gray-200/50">
                <span className="text-[#bb9661] text-sm font-medium uppercase tracking-wider">Send Us a Message</span>
                <h2 className="text-2xl font-bold text-[#242424] mt-2 mb-6">Get In Touch</h2>
                <div className="w-12 h-0.5 bg-[#bb9661] mb-8" />

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-[#242424] mb-3">Message Sent!</h3>
                    <p className="text-gray-500">Thank you for contacting us. Our team will get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#242424] text-sm font-medium mb-2">Full Name *</label>
                        <input type="text" required value={form.name}
                          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                          placeholder="Your full name"
                          className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#bb9661] focus:ring-2 focus:ring-[#bb9661]/20 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[#242424] text-sm font-medium mb-2">Email Address *</label>
                        <input type="email" required value={form.email}
                          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                          placeholder="your@email.com"
                          className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#bb9661] focus:ring-2 focus:ring-[#bb9661]/20 transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#242424] text-sm font-medium mb-2">Phone Number</label>
                        <input type="tel" value={form.phone}
                          onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                          placeholder="920014891"
                          className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#bb9661] focus:ring-2 focus:ring-[#bb9661]/20 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[#242424] text-sm font-medium mb-2">Subject</label>
                        <select value={form.subject}
                          onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                          className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#bb9661] focus:ring-2 focus:ring-[#bb9661]/20 transition-colors bg-white text-gray-600">
                          <option value="">Select a subject</option>
                          <option>Property Inquiry</option>
                          <option>Investment Advice</option>
                          <option>Property Management</option>
                          <option>General Question</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#242424] text-sm font-medium mb-2">Message *</label>
                      <textarea required rows={5} value={form.message}
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        placeholder="How can we help you?"
                        className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#bb9661] focus:ring-2 focus:ring-[#bb9661]/20 transition-colors resize-none" />
                    </div>
                    <button type="submit"
                      className="w-full py-4 bg-[#bb9661] text-white font-medium rounded-full hover:bg-[#a88450] transition-all hover:shadow-lg hover:shadow-[#bb9661]/30">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 h-full min-h-[500px]">
                <iframe
                  title="Rayash Real Estate Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.8937!2d39.098727!3d21.772005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ2JzE5LjIiTiAzOcKwMDUnNTUuNCJF!5e0!3m2!1sen!2ssa!4v1"
                  width="100%" height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
