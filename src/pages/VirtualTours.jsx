import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PlayCircle, Eye, ArrowRight } from 'lucide-react'

const tours = [
  {
    id: 1,
    title: 'Villa A337 - Exterior',
    type: 'Villa',
    location: 'Jeddah, Saudi Arabia',
    image: '/images/properties/property-5.jpg',
    code: 'A337',
  },
  {
    id: 2,
    title: 'Villa A337 - Interior',
    type: 'Villa',
    location: 'Jeddah, Saudi Arabia',
    image: '/images/properties/property-6.jpg',
    code: 'A337',
  },
  {
    id: 3,
    title: 'Apartment A390 - Living Room',
    type: 'Apartment',
    location: 'Al Lulu District, Jeddah',
    image: '/images/properties/property-3.jpg',
    code: 'A390',
  },
  {
    id: 4,
    title: 'Land A335 - Aerial View',
    type: 'Land',
    location: 'Jeddah, Saudi Arabia',
    image: '/images/properties/property-4.jpg',
    code: 'A335',
  },
  {
    id: 5,
    title: 'Villa A345 - Pool Area',
    type: 'Villa',
    location: 'Obhur, North Jeddah',
    image: '/images/properties/property-7.jpg',
    code: 'A345',
  },
  {
    id: 6,
    title: 'Villa A350 - Garden',
    type: 'Villa',
    location: 'Jeddah, Saudi Arabia',
    image: '/images/properties/property-1.jpg',
    code: 'A350',
  },
]

export default function VirtualTours() {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      {/* Dark Header */}
      <div className="bg-[#242424] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Virtual Tours</h1>
            <p className="text-gray-400 max-w-2xl">
              Experience our properties from anywhere in the world with immersive virtual tours.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#bb9661] text-sm font-medium uppercase tracking-wider">Explore Virtually</span>
            <h2 className="text-3xl font-bold text-[#242424] mt-2 mb-4">Property Tours</h2>
            <div className="w-12 h-0.5 bg-[#bb9661] mx-auto mb-6" />
            <p className="text-gray-500 max-w-xl mx-auto">
              Take a virtual walk through our premium properties without leaving your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, i) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 group transition-all duration-300 hover:shadow-xl hover:shadow-[#bb9661]/10"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#242424]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 bg-[#bb9661] rounded-full flex items-center justify-center hover:bg-[#a88450] transition-colors">
                      <PlayCircle size={32} className="text-white" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#bb9661] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                      {tour.type}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#242424] text-lg mb-1">{tour.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{tour.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Code: {tour.code}</span>
                    <Link
                      to={`/property/${tour.id}`}
                      className="inline-flex items-center gap-1.5 text-[#bb9661] text-sm font-medium hover:gap-3 transition-all"
                    >
                      <Eye size={15} />
                      View Property
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#242424]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want a Personal Tour?</h2>
          <p className="text-gray-400 mb-8">
            Schedule an in-person or virtual tour with one of our property experts.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#bb9661] text-white font-medium rounded-full hover:bg-[#a88450] transition-all hover:shadow-lg hover:shadow-[#bb9661]/30"
          >
            Schedule a Tour
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
