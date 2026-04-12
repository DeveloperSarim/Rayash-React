export const properties = [
  {
    id: '1',
    code: 'A395',
    title: 'Luxury Villa in Al Shati - North Jeddah',
    location: 'Al Shati, North Jeddah',
    price: 2800000,
    type: 'villa',
    status: 'for-sale',
    bedrooms: 4,
    bathrooms: 8,
    area: 287.5,
    image: '/images/properties/property-1.jpg',
    features: ['Private Pool', 'Garden', 'Smart Home System', 'Security System', 'Central AC', 'Parking'],
    description: 'A magnificent luxury villa featuring modern architecture with premium finishes. This property offers spacious living areas, a private pool, and stunning views.',
    featured: true,
  },
  {
    id: '2',
    code: 'A390',
    title: 'Apartments for Rent - Al Lulu District',
    location: 'Al Lulu District, Jeddah',
    price: 40000,
    type: 'apartment',
    status: 'for-rent',
    bedrooms: 3,
    bathrooms: 3,
    area: 625,
    image: '/images/properties/property-2.jpg',
    features: ['Furnished', 'Gym', 'Swimming Pool', '24/7 Security', 'Parking'],
    description: 'Modern apartments in the prestigious Al Lulu district. Fully furnished with premium amenities and excellent location.',
    featured: true,
  },
  {
    id: '3',
    code: 'A391',
    title: 'Elegant Apartment in Residential Complex',
    location: 'Jeddah, Saudi Arabia',
    price: 827522,
    type: 'apartment',
    status: 'for-sale',
    bedrooms: 3,
    bathrooms: 3,
    area: 141.48,
    image: '/images/properties/property-3.jpg',
    features: ['City View', 'Modern Kitchen', 'Balcony', 'Parking'],
    description: 'Stunning apartment with panoramic city views, featuring modern design and high-end finishes throughout.',
    featured: true,
  },
  {
    id: '4',
    code: 'A335',
    title: 'Premium Land Plot - Prime Location',
    location: 'Jeddah, Saudi Arabia',
    price: 550000,
    type: 'land',
    status: 'for-sale',
    bedrooms: 0,
    bathrooms: 0,
    area: 450,
    image: '/images/properties/property-4.jpg',
    features: ['Prime Location', 'Corner Plot', 'Ready for Construction'],
    description: 'Excellent investment opportunity - prime land plot in developing area with high growth potential.',
    featured: false,
  },
  {
    id: '5',
    code: 'A337',
    title: 'Traditional Style Villa with Modern Touches',
    location: 'Jeddah, Saudi Arabia',
    price: 3200000,
    type: 'villa',
    status: 'for-sale',
    bedrooms: 5,
    bathrooms: 6,
    area: 450,
    image: '/images/properties/property-5.jpg',
    features: ['Courtyard', 'Fountain', 'Traditional Design', 'Modern Amenities', 'Garden'],
    description: 'Beautiful villa combining traditional Saudi architecture with modern amenities. Features a central courtyard and fountain.',
    featured: true,
  },
  {
    id: '6',
    code: 'A340',
    title: 'Modern Duplex Apartment',
    location: 'Jeddah, Saudi Arabia',
    price: 150000,
    type: 'apartment',
    status: 'for-rent',
    bedrooms: 4,
    bathrooms: 4,
    area: 280,
    image: '/images/properties/property-6.jpg',
    features: ['Duplex', 'Balcony', 'Underground Parking', 'Modern Design'],
    description: 'Spacious duplex apartment with contemporary design, featuring large balconies and underground parking.',
    featured: false,
  },
  {
    id: '7',
    code: 'A345',
    title: 'Beachfront Villa with Infinity Pool',
    location: 'Obhur, North Jeddah',
    price: 5500000,
    type: 'villa',
    status: 'for-sale',
    bedrooms: 6,
    bathrooms: 7,
    area: 520,
    image: '/images/properties/property-7.jpg',
    features: ['Beach Access', 'Infinity Pool', 'Sea View', 'Private Garden', 'Smart Home'],
    description: 'Exclusive beachfront property with stunning Red Sea views, infinity pool, and private beach access.',
    featured: true,
  },
  {
    id: '8',
    code: 'C101',
    title: 'Commercial Office Space - Business District',
    location: 'Business District, Jeddah',
    price: 1800000,
    type: 'commercial',
    status: 'for-sale',
    bedrooms: 0,
    bathrooms: 2,
    area: 300,
    image: '/images/properties/property-8.jpg',
    features: ['Prime Location', 'Parking', '24/7 Access', 'Security'],
    description: 'Prime commercial office space in Jeddah business district. Ideal for corporate headquarters.',
    featured: false,
  },
]

const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']

const autoTranslationMap = [
  ['Luxury Villa', 'فيلا فاخرة'],
  ['Apartments for Rent', 'شقق للإيجار'],
  ['Elegant Apartment', 'شقة أنيقة'],
  ['Residential Complex', 'مجمع سكني'],
  ['Premium Land Plot', 'أرض مميزة'],
  ['Prime Location', 'موقع مميز'],
  ['Traditional Style Villa', 'فيلا بطابع تقليدي'],
  ['Modern Touches', 'بلمسات عصرية'],
  ['Modern Duplex Apartment', 'شقة دوبلكس حديثة'],
  ['Beachfront Villa', 'فيلا على الواجهة البحرية'],
  ['Infinity Pool', 'مسبح إنفينيتي'],
  ['Commercial Office Space', 'مكتب تجاري'],
  ['Business District', 'الحي التجاري'],
  ['for Rent', 'للإيجار'],
  ['for Sale', 'للبيع'],
  ['North Jeddah', 'شمال جدة'],
  ['Jeddah', 'جدة'],
  ['Saudi Arabia', 'المملكة العربية السعودية'],
  ['Al Shati', 'الشاطئ'],
  ['Al Lulu District', 'حي اللؤلؤ'],
  ['Obhur', 'أبحر'],
  ['Private Pool', 'مسبح خاص'],
  ['Garden', 'حديقة'],
  ['Smart Home System', 'نظام منزل ذكي'],
  ['Security System', 'نظام أمني'],
  ['Central AC', 'تكييف مركزي'],
  ['Parking', 'مواقف سيارات'],
  ['Furnished', 'مفروشة'],
  ['Gym', 'نادي رياضي'],
  ['Swimming Pool', 'مسبح'],
  ['24/7 Security', 'أمن على مدار الساعة'],
  ['City View', 'إطلالة على المدينة'],
  ['Modern Kitchen', 'مطبخ حديث'],
  ['Balcony', 'شرفة'],
  ['Corner Plot', 'أرض زاوية'],
  ['Ready for Construction', 'جاهزة للبناء'],
  ['Courtyard', 'فناء داخلي'],
  ['Fountain', 'نافورة'],
  ['Traditional Design', 'تصميم تراثي'],
  ['Modern Amenities', 'مرافق حديثة'],
  ['Duplex', 'دوبلكس'],
  ['Underground Parking', 'مواقف تحت الأرض'],
  ['Modern Design', 'تصميم حديث'],
  ['Beach Access', 'وصول مباشر للشاطئ'],
  ['Sea View', 'إطلالة بحرية'],
  ['Private Garden', 'حديقة خاصة'],
  ['Security', 'أمن'],
]

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export const toArabicDigits = (input) => String(input).replace(/\d/g, (d) => ARABIC_DIGITS[Number(d)])

export const autoTranslateToArabic = (text) => {
  if (!text || typeof text !== 'string') return text

  let translated = text
  for (const [english, arabic] of autoTranslationMap) {
    translated = translated.replace(new RegExp(escapeRegExp(english), 'gi'), arabic)
  }

  return toArabicDigits(translated)
}

export const formatLocalizedNumber = (value, lang = 'en', options = {}) => {
  const locale = lang === 'ar' ? 'ar-SA-u-nu-arab' : 'en-US'
  return new Intl.NumberFormat(locale, options).format(value)
}

export const formatPrice = (price, status, lang = 'en') => {
  const isArabic = lang === 'ar'
  const currency = isArabic ? 'ر.س' : 'SAR'

  if (status === 'for-rent') {
    const yearly = isArabic ? ' / سنوياً' : '/year'
    return `${currency} ${formatLocalizedNumber(price, lang)}${yearly}`
  }

  const millions = price / 1e6
  const formattedMillions = formatLocalizedNumber(millions, lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
  return isArabic ? `${currency} ${formattedMillions} مليون` : `${currency} ${formattedMillions}M`
}

const localizeProperty = (property, lang = 'en') => {
  if (lang !== 'ar') return property

  return {
    ...property,
    code: toArabicDigits(property.code),
    title: autoTranslateToArabic(property.title),
    location: autoTranslateToArabic(property.location),
    description: autoTranslateToArabic(property.description),
    features: property.features.map((item) => autoTranslateToArabic(item)),
  }
}

export const getLocalizedProperties = (lang = 'en') => properties.map((p) => localizeProperty(p, lang))

export const getFeaturedProperties = (lang = 'en') => getLocalizedProperties(lang).filter((p) => p.featured)

export const getPropertyById = (id, lang = 'en') => {
  const source = properties.find((p) => p.id === String(id))
  return source ? localizeProperty(source, lang) : undefined
}
