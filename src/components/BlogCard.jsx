import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function BlogCard({ post }) {
  const { t, i18n } = useTranslation()
  const { id, title, date, author, category, image, excerpt } = post

  const formattedDate = new Date(date).toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#bb9661]/10 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#bb9661] text-white">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {author}
            </span>
          </div>
          <h3 className="font-semibold text-[#242424] text-lg mb-3 leading-tight line-clamp-2 group-hover:text-[#bb9661] transition-colors flex-1">
            <Link to={`/blog/${id}`}>{title}</Link>
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-5">{excerpt}</p>
          <Link
            to={`/blog/${id}`}
            className="inline-flex items-center space-x-2 text-[#bb9661] font-medium group/link mt-auto"
          >
            <span>{t('read_more')}</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
