import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react'
import { getBlogPostById, blogPosts } from '../data/blog'
import BlogCard from '../components/BlogCard'

export default function BlogPost() {
  const { id } = useParams()
  const post = getBlogPostById(id)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#242424] mb-4">Article Not Found</h2>
          <Link to="/blog" className="px-6 py-3 bg-[#bb9661] text-white font-medium rounded-full hover:bg-[#a88450] transition-all">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      {/* Hero Header with post image */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#242424]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="bg-[#bb9661] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide mb-6 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-300 text-sm">
              <span className="flex items-center gap-2">
                <Calendar size={15} />
                {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                <User size={15} />
                {post.author}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#bb9661] transition-colors text-sm mb-10"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <div
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-[#242424]
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
            prose-ul:text-gray-600 prose-li:mb-1
            prose-strong:text-[#242424]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-[#bb9661]/5 border border-[#bb9661]/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-[#242424] mb-3">
              Need Expert Real Estate Advice?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Our team at Rayash Real Estate is here to help you make the best property decisions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#bb9661] text-white font-medium rounded-full hover:bg-[#a88450] transition-all hover:shadow-lg hover:shadow-[#bb9661]/30"
            >
              Contact Us Today
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#242424] mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
