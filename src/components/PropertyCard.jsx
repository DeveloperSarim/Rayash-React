import { MapPin, Bed, Bath, Maximize2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { formatPrice, formatLocalizedNumber } from '../data/properties'

export default function PropertyCard({ property: p }) {
  const { t, i18n } = useTranslation()

  const getTypeLabel = (type) => {
    if (type === 'villa') return t('type_villa')
    if (type === 'apartment') return t('type_apt')
    if (type === 'land') return t('type_land')
    if (type === 'commercial') return t('type_commercial')
    return type
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#bb9661]/10">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Status + Type badges */}
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${p.status === 'for-sale' ? 'bg-[#bb9661] text-white' : 'bg-[#242424] text-white'}`}>
            {p.status === 'for-sale' ? t('for_sale') : t('for_rent')}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-[#242424]">
            {getTypeLabel(p.type)}
          </span>
        </div>
        {/* Price badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
            <span className="text-lg font-bold text-[#bb9661]">{formatPrice(p.price, p.status, i18n.language)}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-[#242424] mb-2 line-clamp-2 group-hover:text-[#bb9661] transition-colors">
          {p.title}
        </h3>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="truncate">{p.location}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600 border-t border-gray-100 pt-4">
          {p.bedrooms > 0 && (
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1 text-[#bb9661]" />
              <span>{formatLocalizedNumber(p.bedrooms, i18n.language)}</span>
            </div>
          )}
          {p.bathrooms > 0 && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1 text-[#bb9661]" />
              <span>{formatLocalizedNumber(p.bathrooms, i18n.language)}</span>
            </div>
          )}
          <div className="flex items-center">
            <Maximize2 className="w-4 h-4 mr-1 text-[#bb9661]" />
            <span>{formatLocalizedNumber(p.area, i18n.language)} m²</span>
          </div>
        </div>
      </div>
    </div>
  )
}
