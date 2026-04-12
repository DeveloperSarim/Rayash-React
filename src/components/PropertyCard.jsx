import { MapPin, Bed, Bath, Maximize2 } from 'lucide-react'
import { formatPrice } from '../data/properties'

export default function PropertyCard({ property: p }) {
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
            {p.status === 'for-sale' ? 'For Sale' : 'For Rent'}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-[#242424]">
            {p.type.charAt(0).toUpperCase() + p.type.slice(1)}
          </span>
        </div>
        {/* Price badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
            <span className="text-lg font-bold text-[#bb9661]">{formatPrice(p.price, p.status)}</span>
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
              <span>{p.bedrooms}</span>
            </div>
          )}
          {p.bathrooms > 0 && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1 text-[#bb9661]" />
              <span>{p.bathrooms}</span>
            </div>
          )}
          <div className="flex items-center">
            <Maximize2 className="w-4 h-4 mr-1 text-[#bb9661]" />
            <span>{p.area} m²</span>
          </div>
        </div>
      </div>
    </div>
  )
}
