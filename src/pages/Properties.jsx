import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, Grid, List, X, MapPin, Bed, Bath, Maximize2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getLocalizedProperties, formatPrice, formatLocalizedNumber } from '../data/properties'
import PropertyCard from '../components/PropertyCard'

export default function Properties() {
  const { t, i18n } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    status: searchParams.get('status') || 'all',
    type: 'all',
    city: 'all',
    minPrice: '',
    maxPrice: '',
    search: '',
  })

  const properties = useMemo(() => getLocalizedProperties(i18n.language), [i18n.language])

  const cities = useMemo(() => {
    const set = new Set(properties.map(p => p.location.split(',')[0].trim()))
    return Array.from(set)
  }, [])

  const filtered = useMemo(() => properties.filter(p => {
    if (filters.status !== 'all' && p.status !== filters.status) return false
    if (filters.type   !== 'all' && p.type   !== filters.type)   return false
    if (filters.city   !== 'all' && !p.location.includes(filters.city)) return false
    if (filters.minPrice && p.price < parseInt(filters.minPrice)) return false
    if (filters.maxPrice && p.price > parseInt(filters.maxPrice)) return false
    if (filters.search) {
      const q = filters.search.toLowerCase()
      return p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.code.toLowerCase().includes(q)
    }
    return true
  }), [filters])

  const update = (key, val) => {
    setFilters(prev => ({ ...prev, [key]: val }))
    if (key === 'status') setSearchParams(val === 'all' ? {} : { status: val })
  }

  const clearFilters = () => {
    setFilters({ status: 'all', type: 'all', city: 'all', minPrice: '', maxPrice: '', search: '' })
    setSearchParams({})
  }

  const getTypeLabel = (type) => {
    if (type === 'villa') return t('type_villa')
    if (type === 'apartment') return t('type_apt')
    if (type === 'land') return t('type_land')
    if (type === 'commercial') return t('type_commercial')
    return type
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('prop_page_title')}</h1>
            <p className="text-gray-400 max-w-2xl">
              {t('prop_page_desc')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-20 z-30 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('search_ph')}
                value={filters.search}
                onChange={e => update('search', e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#bb9661] focus:ring-2 focus:ring-[#bb9661]/20 outline-none transition-all"
              />
            </div>

            <div className="flex items-center justify-between gap-2 w-full">
              {/* Left: filters */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Status */}
                <select
                  value={filters.status}
                  onChange={e => update('status', e.target.value)}
                  className="px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#bb9661] focus:ring-2 focus:ring-[#bb9661]/20 outline-none transition-all bg-white text-sm"
                >
                  <option value="all">{t('all_status')}</option>
                  <option value="for-sale">{t('for_sale')}</option>
                  <option value="for-rent">{t('for_rent')}</option>
                </select>

                {/* Type */}
                <select
                  value={filters.type}
                  onChange={e => update('type', e.target.value)}
                  className="px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#bb9661] focus:ring-2 focus:ring-[#bb9661]/20 outline-none transition-all bg-white text-sm"
                >
                  <option value="all">{t('all_types')}</option>
                  <option value="villa">{t('type_villa')}</option>
                  <option value="apartment">{t('type_apt')}</option>
                  <option value="land">{t('type_land')}</option>
                  <option value="commercial">{t('type_commercial')}</option>
                </select>

                {/* Advanced filters toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center space-x-1.5 px-3 py-2.5 rounded-xl border transition-all text-sm ${
                    showFilters ? 'bg-[#bb9661] text-white border-[#bb9661]' : 'border-gray-200 hover:border-[#bb9661] text-gray-700'
                  }`}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>{t('filters_btn')}</span>
                </button>
              </div>

              {/* Right: View toggle — always stays on same row */}
              <div className="flex-shrink-0 flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 ${viewMode === 'grid' ? 'bg-[#bb9661] text-white' : 'hover:bg-gray-100 text-gray-600'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 ${viewMode === 'list' ? 'bg-[#bb9661] text-white' : 'hover:bg-gray-100 text-gray-600'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-gray-200"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <select
                    value={filters.city}
                    onChange={e => update('city', e.target.value)}
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#bb9661] focus:ring-2 focus:ring-[#bb9661]/20 outline-none transition-all bg-white text-sm"
                  >
                    <option value="all">{t('all_cities')}</option>
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <input
                    type="number" placeholder={t('min_price')}
                    value={filters.minPrice}
                    onChange={e => update('minPrice', e.target.value)}
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#bb9661] focus:ring-2 focus:ring-[#bb9661]/20 outline-none transition-all text-sm"
                  />
                  <input
                    type="number" placeholder={t('max_price')}
                    value={filters.maxPrice}
                    onChange={e => update('maxPrice', e.target.value)}
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#bb9661] focus:ring-2 focus:ring-[#bb9661]/20 outline-none transition-all text-sm"
                  />
                  <button
                    onClick={clearFilters}
                    className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl border border-gray-200 hover:border-[#bb9661] hover:text-[#bb9661] transition-all text-sm"
                  >
                    <X className="w-5 h-5" />
                    <span>{t('clear_filters')}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-gray-600">
          {t('showing')} <span className="font-semibold text-[#242424]">{formatLocalizedNumber(filtered.length, i18n.language)}</span> {t('properties_count')}
        </p>
      </div>

      {/* Grid / List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-[#242424] mb-2">{t('no_properties')}</h3>
            <p className="text-gray-600">{t('no_properties_sub')}</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={`/property/${p.id}`}>
                  <PropertyCard property={p} />
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          /* List view */
          <div className="space-y-4">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <Link to={`/property/${p.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#bb9661]/10 flex">
                    <div className="relative w-64 flex-shrink-0 overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute top-4 left-4 flex space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${p.status === 'for-sale' ? 'bg-[#bb9661] text-white' : 'bg-[#242424] text-white'}`}>
                          {p.status === 'for-sale' ? t('for_sale') : t('for_rent')}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-medium text-[#bb9661] uppercase tracking-wider">{getTypeLabel(p.type)}</span>
                        <h3 className="text-xl font-semibold text-[#242424] mt-1 mb-2 group-hover:text-[#bb9661] transition-colors">{p.title}</h3>
                        <div className="flex items-center text-gray-500 text-sm mb-4">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{p.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          {p.bedrooms > 0 && <span className="flex items-center gap-1"><Bed className="w-4 h-4 text-[#bb9661]" />{formatLocalizedNumber(p.bedrooms, i18n.language)}</span>}
                          {p.bathrooms > 0 && <span className="flex items-center gap-1"><Bath className="w-4 h-4 text-[#bb9661]" />{formatLocalizedNumber(p.bathrooms, i18n.language)}</span>}
                          <span className="flex items-center gap-1"><Maximize2 className="w-4 h-4 text-[#bb9661]" />{formatLocalizedNumber(p.area, i18n.language)} m²</span>
                        </div>
                        <span className="text-xl font-bold text-[#bb9661]">{formatPrice(p.price, p.status, i18n.language)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
