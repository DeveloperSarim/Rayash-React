import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      // Nav
      nav_home: 'Home',
      nav_properties: 'Properties',
      nav_tours: '360 Tours',
      nav_blog: 'Blog',
      nav_contact: 'Contact',
      nav_explore: 'Explore Properties',

      // Hero
      hero_badge: 'Your Trusted Real Estate Partner',
      hero_title1: 'Rayash Real Estate',
      hero_title2: 'Your Trusted Partner',
      hero_title3: 'in the Kingdom of Saudi Arabia',
      hero_desc: 'We build your real estate future with confidence and excellence, offering integrated real estate solutions that combine local expertise with a future vision.',
      hero_btn_sale: 'Properties for Sale',
      hero_btn_rent: 'Properties for Rent',
      hero_stat1_val: '3000+',
      hero_stat1_label: 'Satisfied Clients',
      hero_stat2_val: '1.5B',
      hero_stat2_label: 'SAR in Deals',
      hero_stat3_val: '21+',
      hero_stat3_label: 'Years Experience',

      // Values
      values_sub: 'Our Core',
      values_title: 'What We Stand For',
      val1_title: 'Professionalism',
      val1_desc: 'Providing services with a high level of professionalism and efficiency',
      val2_title: 'Transparency',
      val2_desc: 'Dealing with clarity and honesty with clients and partners',
      val3_title: 'Community Values',
      val3_desc: "Launching community initiatives that align with the Kingdom's Vision 2030",

      // About
      about_sub: 'About Us',
      about_title: 'We specialize in connecting buyers and sellers of luxury properties in Saudi Arabia',
      about_desc1: 'Our experienced team is dedicated to providing the highest level of service and expertise to our clients. With deep market knowledge and a commitment to excellence, we guide you through every step of your real estate journey.',
      about_desc2: 'From property valuation to final closing, we ensure a seamless experience that exceeds expectations. Our track record speaks for itself with over 3,000 satisfied clients and SAR 1.5 billion in successful transactions.',
      about_cta: 'Learn More',
      about_years_label: 'Years of',
      about_years_sub: 'Excellence',
      chk1: 'Deep market knowledge',
      chk2: 'Experienced team',
      chk3: 'Personalized service',
      chk4: 'Transparent dealings',

      // Services
      services_sub: 'What We Offer',
      services_title: 'Products and Services',
      services_desc: 'Comprehensive real estate solutions tailored to meet your every need in the Saudi market.',
      srv1_title: 'Real Estate Marketing',
      srv1_desc: 'Providing customized marketing plans for residential and commercial properties to maximize exposure and attract qualified buyers.',
      srv2_title: 'Real Estate Consulting',
      srv2_desc: 'Providing specialized consultations to help clients make informed decisions about buying, selling, or investing in real estate.',
      srv3_title: 'Property Management',
      srv3_desc: 'Providing comprehensive property management services to ensure sustainability and optimal investment returns for property owners.',
      learn_more: 'Learn More',

      // Featured Properties
      feat_sub: 'Explore Our',
      feat_title: 'Featured Properties',
      feat_all: 'All',
      feat_sale: 'For Sale',
      feat_rent: 'For Rent',
      view_all: 'View All Properties',

      // Vision & Mission
      vision_title: 'Vision',
      vision_desc: 'To be the leading real estate marketing company in the region, recognized by clients and partners as a provider of innovative and reliable real estate services that set the standard for excellence in the industry.',
      mission_title: 'Mission',
      mission_desc: 'To provide comprehensive and distinguished real estate marketing services that meet clients\' needs, using the latest technologies and innovative marketing strategies, with a focus on quality and transparency in all transactions.',

      // Leadership
      leadership_sub: 'Our Team',
      leadership_title: 'Leadership & Management',
      leadership_desc: 'We have a leadership team with extensive experience in real estate and marketing, committed to developing and providing the best services to clients and partners.',
      
      // Team Members
      team_member_1_name: 'Mr. Ayman Al-Ghamdi',
      team_member_1_role: 'Chairman of the Board',
      team_member_1_bio: 'Mr. Ayman has extensive experience in the real estate field that has made him one of the prominent names in this sector. He owns a real estate development company that has implemented many distinguished projects characterized by their modern designs and high quality.',
      team_member_2_name: 'Mr. Abdullah Al-Zahrani',
      team_member_2_role: 'General Manager',
      team_member_2_bio: 'A pioneering name in the real estate field with over 20 years of experience. He has deep knowledge of the intricacies of the real estate market in Jeddah in particular, making him a trusted consultant for many clients.',
      team_member_3_name: 'Mr. Mohammed Al-Muqbel',
      team_member_3_role: 'Marketing and Sales Manager',
      team_member_3_bio: 'Mr. Mohammed Al-Muqbel leads the marketing and sales system with a practical spirit and a data-based approach, connecting strategy and execution to increase qualified requests and improve conversion rates.',

      // Stats
      stat1_val: '3000+',
      stat1_label: 'Satisfied Clients',
      stat2_val: '1.5B',
      stat2_label: 'SAR in Deals',
      stat3_val: '21+',
      stat3_label: 'Years Experience',

      // Why Rayash
      why_sub: 'Why Choose Us',
      why_title: 'Why Rayash Real Estate?',
      why_desc: 'At Rayash Real Estate, we understand that buying or selling a property is one of the most important decisions you will make. That is why we are committed to providing you with the highest level of service and expertise.',
      why1_title: 'Experience and Professionalism',
      why1_desc: 'A specialized team that combines deep market knowledge with innovative vision to deliver exceptional results.',
      why2_title: 'Trust and Credibility',
      why2_desc: 'We care about building long-term relationships with our clients by providing transparent and reliable services.',
      why_stat1: '98%',
      why_stat1_label: 'Client Satisfaction',
      why_stat2: '500+',
      why_stat2_label: 'Properties Sold',

      // Contact Section (homepage)
      contact_sub: 'Contact Us',
      contact_title: 'Get in Touch',
      contact_desc: 'Our real estate company owns a number of luxurious and exclusive listings. Contact us today to discuss your property needs.',
      contact_address_title: 'Address',
      contact_address: 'Jeddah, Al-Sharaa District, Prince Naif Road',
      contact_phone_title: 'Phone',
      contact_email_title: 'Email',
      contact_form_title: 'Send us a Message',
      contact_name: 'Full Name',
      contact_email_label: 'Email Address',
      contact_phone_label: 'Phone Number',
      contact_msg: 'Message',
      contact_name_ph: 'Your full name',
      contact_email_ph: 'your@email.com',
      contact_phone_ph: '920014891',
      contact_msg_ph: 'How can we help you?',
      contact_send: 'Send Message',
      contact_success_title: 'Thank You!',
      contact_success_desc: 'We will get back to you soon.',

      // Contact Page
      contact_page_title: 'Contact Us',
      contact_page_desc: 'Get in touch with our expert team for any real estate inquiries.',
      contact_location_title: 'Our Location',
      contact_location: 'Jeddah, Al-Sharaa District',
      contact_location2: 'Prince Naif Road',
      contact_phone_card: 'Phone Number',
      contact_email_card: 'Email Address',
      contact_hours_title: 'Working Hours',
      contact_hours1: 'Sun – Thu: 9:00 AM – 6:00 PM',
      contact_hours2: 'Sat: 10:00 AM – 4:00 PM',
      contact_form_subtitle: 'Send Us a Message',
      contact_form_heading: 'Get In Touch',
      contact_subject_label: 'Subject',
      contact_subject_ph: 'Select a subject',
      contact_subj1: 'Property Inquiry',
      contact_subj2: 'Investment Advice',
      contact_subj3: 'Property Management',
      contact_subj4: 'General Question',
      contact_sent_title: 'Message Sent!',
      contact_sent_desc: 'Thank you for contacting us. Our team will get back to you within 24 hours.',
      full_name_label: 'Full Name *',
      email_label: 'Email Address *',
      phone_label: 'Phone Number',
      msg_label: 'Message *',

      // Properties Page
      prop_page_title: 'Properties',
      prop_page_desc: 'Discover our exclusive collection of premium properties for sale and rent across Saudi Arabia.',
      search_ph: 'Search by title, location, or code...',
      all_status: 'All Status',
      for_sale: 'For Sale',
      for_rent: 'For Rent',
      all_types: 'All Types',
      type_villa: 'Villa',
      type_apt: 'Apartment',
      type_land: 'Land',
      type_commercial: 'Commercial',
      filters_btn: 'Filters',
      all_cities: 'All Cities',
      min_price: 'Min Price (SAR)',
      max_price: 'Max Price (SAR)',
      clear_filters: 'Clear Filters',
      showing: 'Showing',
      properties_count: 'properties',
      no_properties: 'No properties found',
      no_properties_sub: 'Try adjusting your filters or search criteria',

      // Blog
      blog_title: 'Our Blog',
      blog_desc: 'Real estate insights, market analysis, and guides for buyers and investors.',
      read_more: 'Read More',
      more_articles: 'More Articles',
      back_blog: 'Back to Blog',
      article_not_found: 'Article Not Found',
      need_advice: 'Need Expert Real Estate Advice?',
      advice_desc: 'Our team at Rayash Real Estate is here to help you make the best property decisions.',
      contact_today: 'Contact Us Today',

      // Virtual Tours
      tours_title: 'Virtual Tours',
      tours_desc: 'Experience our properties from anywhere in the world with immersive virtual tours.',
      tours_sub: 'Explore Virtually',
      tours_heading: 'Property Tours',
      tours_sub_desc: 'Take a virtual walk through our premium properties without leaving your home.',
      view_property: 'View Property',
      cta_tour_title: 'Want a Personal Tour?',
      cta_tour_desc: 'Schedule an in-person or virtual tour with one of our property experts.',
      schedule_tour: 'Schedule a Tour',

      // Property Detail
      back_properties: 'Back to Properties',
      interested_title: 'Interested in This Property?',
      interested_desc: 'Contact our team for more information or to schedule a viewing.',
      call_now: 'Call Us Now',
      email_us: 'Email Us',
      your_name: 'Your Name',
      your_email: 'Your Email',
      your_phone: 'Your Phone',
      your_message: 'Your Message',
      send_inquiry: 'Send Inquiry',
      share_property: 'Share This Property',
      copy_property_link: 'Copy Property Link',
      link_copied: 'Link Copied',
      share_facebook: 'Facebook',
      share_linkedin: 'LinkedIn',
      share_whatsapp: 'WhatsApp',
      share_on_facebook: 'Share on Facebook',
      share_on_linkedin: 'Share on LinkedIn',
      share_on_whatsapp: 'Share on WhatsApp',
      property_not_found: 'Property Not Found',
      code_label: 'Code',
      description_heading: 'Description',
      features_heading: 'Features & Amenities',
      similar_properties: 'Similar Properties',
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
      area_label: 'Area (m²)',

      // Footer
      footer_desc: 'Your trusted partner in real estate across the Kingdom of Saudi Arabia.',
      footer_quick: 'Quick Links',
      footer_services: 'Our Services',
      footer_contact: 'Contact',
      footer_service_marketing: 'Real Estate Marketing',
      footer_service_management: 'Property Management',
      footer_service_consulting: 'Real Estate Consulting',
      footer_service_tours: 'Virtual Tours',
      footer_phone: 'Phone',
      footer_email: 'Email',
      footer_address: 'Address',
      footer_address_value: 'Prince Naif Road, Jeddah',
      privacy_policy: 'Privacy Policy',
      terms_service: 'Terms of Service',
      footer_rights: 'All rights reserved.',
    }
  },
  ar: {
    translation: {
      // Nav
      nav_home: 'الرئيسية',
      nav_properties: 'العقارات',
      nav_tours: 'جولات 360',
      nav_blog: 'المدونة',
      nav_contact: 'تواصل معنا',
      nav_explore: 'استكشف العقارات',

      // Hero
      hero_badge: 'شريكك الموثوق في العقارات',
      hero_title1: 'راياش للعقارات',
      hero_title2: 'شريكك الموثوق',
      hero_title3: 'في المملكة العربية السعودية',
      hero_desc: 'نبني مستقبلك العقاري بثقة وتميز، ونقدم حلولاً عقارية متكاملة تجمع بين الخبرة المحلية ورؤية المستقبل.',
      hero_btn_sale: 'عقارات للبيع',
      hero_btn_rent: 'عقارات للإيجار',
      hero_stat1_val: '3000+',
      hero_stat1_label: 'عميل راضٍ',
      hero_stat2_val: '1.5',
      hero_stat2_label: 'ريال في الصفقات',
      hero_stat3_val: '21+',
      hero_stat3_label: 'سنة خبرة',

      // Values
      values_sub: 'جوهرنا',
      values_title: 'ما نؤمن به',
      val1_title: 'الاحترافية',
      val1_desc: 'تقديم الخدمات بمستوى عالٍ من الاحترافية والكفاءة',
      val2_title: 'الشفافية',
      val2_desc: 'التعامل بوضوح وأمانة مع العملاء والشركاء',
      val3_title: 'القيم المجتمعية',
      val3_desc: 'إطلاق مبادرات مجتمعية تتوافق مع رؤية المملكة 2030',

      // About
      about_sub: 'من نحن',
      about_title: 'متخصصون في ربط المشترين والبائعين بالعقارات الفاخرة في المملكة العربية السعودية',
      about_desc1: 'فريقنا المتمرس مكرس لتقديم أعلى مستويات الخدمة والخبرة لعملائنا. بمعرفة عميقة بالسوق والتزام بالتميز، نرشدك في كل خطوة من رحلتك العقارية.',
      about_desc2: 'من تقييم العقار إلى إتمام الصفقة، نضمن تجربة سلسة تتجاوز التوقعات. سجلنا يتحدث عن نفسه بأكثر من 3000 عميل راضٍ وصفقات بقيمة 1.5 مليار ريال.',
      about_cta: 'اعرف المزيد',
      about_years_label: 'سنوات من',
      about_years_sub: 'التميز',
      chk1: 'معرفة عميقة بالسوق',
      chk2: 'فريق متمرس',
      chk3: 'خدمة شخصية',
      chk4: 'تعاملات شفافة',

      // Services
      services_sub: 'ما نقدمه',
      services_title: 'المنتجات والخدمات',
      services_desc: 'حلول عقارية شاملة مصممة لتلبية كل احتياجاتك في السوق السعودية.',
      srv1_title: 'التسويق العقاري',
      srv1_desc: 'تقديم خطط تسويقية مخصصة للعقارات السكنية والتجارية لتحقيق أقصى قدر من الانتشار وجذب المشترين المؤهلين.',
      srv2_title: 'الاستشارات العقارية',
      srv2_desc: 'تقديم استشارات متخصصة لمساعدة العملاء على اتخاذ قرارات مستنيرة بشأن شراء أو بيع أو الاستثمار في العقارات.',
      srv3_title: 'إدارة الممتلكات',
      srv3_desc: 'تقديم خدمات إدارة عقارية شاملة لضمان الاستدامة وتحقيق أفضل العوائد الاستثمارية لأصحاب العقارات.',
      learn_more: 'اعرف المزيد',

      // Featured Properties
      feat_sub: 'اكتشف',
      feat_title: 'العقارات المميزة',
      feat_all: 'الكل',
      feat_sale: 'للبيع',
      feat_rent: 'للإيجار',
      view_all: 'عرض جميع العقارات',

      // Vision & Mission
      vision_title: 'الرؤية',
      vision_desc: 'أن نكون الشركة الرائدة في التسويق العقاري في المنطقة، معترفاً بنا من قِبَل العملاء والشركاء كمزود لخدمات عقارية مبتكرة وموثوقة تضع معياراً للتميز في الصناعة.',
      mission_title: 'الرسالة',
      mission_desc: 'تقديم خدمات تسويق عقاري شاملة ومتميزة تلبي احتياجات العملاء، باستخدام أحدث التقنيات واستراتيجيات التسويق المبتكرة، مع التركيز على الجودة والشفافية في جميع المعاملات.',

      // Leadership
      leadership_sub: 'فريقنا',
      leadership_title: 'القيادة والإدارة',
      leadership_desc: 'لدينا فريق قيادي يمتلك خبرة واسعة في مجال العقارات والتسويق، ملتزم بتطوير وتقديم أفضل الخدمات للعملاء والشركاء.',
      
      // Team Members
      team_member_1_name: 'السيد أيمن الغامدي',
      team_member_1_role: 'رئيس مجلس الإدارة',
      team_member_1_bio: 'يتمتع السيد أيمن بخبرة واسعة في مجال العقارات جعلته من الأسماء البارزة في هذا القطاع. يمتلك شركة تطوير عقاري نفذت العديد من المشاريع المتميزة التي تتسم بتصاميمها الحديثة والجودة العالية.',
      team_member_2_name: 'السيد عبدالله الزحراني',
      team_member_2_role: 'المدير العام',
      team_member_2_bio: 'اسم رائد في مجال العقارات بخبرة تزيد عن 20 سنة. لديه معرفة عميقة بتفاصيل سوق العقارات بجدة بشكل خاص، مما يجعله مستشاراً موثوقاً للعديد من العملاء.',
      team_member_3_name: 'السيد محمد المقبل',
      team_member_3_role: 'مدير التسويق والمبيعات',
      team_member_3_bio: 'يقود السيد محمد المقبل قسم التسويق والمبيعات برؤية عملية وأسلوب قائم على البيانات، ويوازن بين الاستراتيجية والتنفيذ لزيادة الطلبات المؤهلة وتحسين معدلات التحويل.',

      // Stats
      stat1_val: '3000+',
      stat1_label: 'عميل راضٍ',
      stat2_val: '1.5',
      stat2_label: 'ريال في الصفقات',
      stat3_val: '21+',
      stat3_label: 'سنة خبرة',

      // Why Rayash
      why_sub: 'لماذا نحن',
      why_title: 'لماذا راياش للعقارات؟',
      why_desc: 'في راياش للعقارات، ندرك أن شراء أو بيع عقار هو من أهم القرارات التي ستتخذها. لهذا نلتزم بتقديم أعلى مستويات الخدمة والخبرة.',
      why1_title: 'الخبرة والاحترافية',
      why1_desc: 'فريق متخصص يجمع بين المعرفة العميقة بالسوق والرؤية المبتكرة لتقديم نتائج استثنائية.',
      why2_title: 'الثقة والمصداقية',
      why2_desc: 'نحرص على بناء علاقات طويلة الأمد مع عملائنا من خلال تقديم خدمات شفافة وموثوقة.',
      why_stat1: '98%',
      why_stat1_label: 'رضا العملاء',
      why_stat2: '500+',
      why_stat2_label: 'عقار تم بيعه',

      // Contact Section (homepage)
      contact_sub: 'تواصل معنا',
      contact_title: 'ابقَ على تواصل',
      contact_desc: 'تمتلك شركتنا العقارية عدداً من القوائم الفاخرة والحصرية. تواصل معنا اليوم لمناقشة احتياجاتك العقارية.',
      contact_address_title: 'العنوان',
      contact_address: 'جدة، حي الشراع، طريق الأمير نايف',
      contact_phone_title: 'الهاتف',
      contact_email_title: 'البريد الإلكتروني',
      contact_form_title: 'أرسل لنا رسالة',
      contact_name: 'الاسم الكامل',
      contact_email_label: 'البريد الإلكتروني',
      contact_phone_label: 'رقم الهاتف',
      contact_msg: 'الرسالة',
      contact_name_ph: 'اسمك الكامل',
      contact_email_ph: 'بريدك@الإلكتروني.com',
      contact_phone_ph: '920014891',
      contact_msg_ph: 'كيف يمكننا مساعدتك؟',
      contact_send: 'إرسال الرسالة',
      contact_success_title: 'شكراً لك!',
      contact_success_desc: 'سنتواصل معك قريباً.',

      // Contact Page
      contact_page_title: 'تواصل معنا',
      contact_page_desc: 'تواصل مع فريقنا المتخصص لأي استفسارات عقارية.',
      contact_location_title: 'موقعنا',
      contact_location: 'جدة، حي الشراع',
      contact_location2: 'طريق الأمير نايف',
      contact_phone_card: 'رقم الهاتف',
      contact_email_card: 'البريد الإلكتروني',
      contact_hours_title: 'ساعات العمل',
      contact_hours1: 'الأحد – الخميس: 9:00 ص – 6:00 م',
      contact_hours2: 'السبت: 10:00 ص – 4:00 م',
      contact_form_subtitle: 'أرسل لنا رسالة',
      contact_form_heading: 'تواصل معنا',
      contact_subject_label: 'الموضوع',
      contact_subject_ph: 'اختر موضوعاً',
      contact_subj1: 'استفسار عن عقار',
      contact_subj2: 'نصيحة استثمارية',
      contact_subj3: 'إدارة العقارات',
      contact_subj4: 'سؤال عام',
      contact_sent_title: 'تم إرسال الرسالة!',
      contact_sent_desc: 'شكراً لتواصلك معنا. سيتواصل معك فريقنا خلال 24 ساعة.',
      full_name_label: 'الاسم الكامل *',
      email_label: 'البريد الإلكتروني *',
      phone_label: 'رقم الهاتف',
      msg_label: 'الرسالة *',

      // Properties Page
      prop_page_title: 'العقارات',
      prop_page_desc: 'اكتشف مجموعتنا الحصرية من العقارات المميزة للبيع والإيجار في جميع أنحاء المملكة العربية السعودية.',
      search_ph: 'ابحث بالعنوان أو الموقع أو الرمز...',
      all_status: 'كل الحالات',
      for_sale: 'للبيع',
      for_rent: 'للإيجار',
      all_types: 'كل الأنواع',
      type_villa: 'فيلا',
      type_apt: 'شقة',
      type_land: 'أرض',
      type_commercial: 'تجاري',
      filters_btn: 'الفلاتر',
      all_cities: 'كل المدن',
      min_price: 'أدنى سعر (ريال)',
      max_price: 'أعلى سعر (ريال)',
      clear_filters: 'مسح الفلاتر',
      showing: 'عرض',
      properties_count: 'عقار',
      no_properties: 'لا توجد عقارات',
      no_properties_sub: 'حاول تعديل الفلاتر أو معايير البحث',

      // Blog
      blog_title: 'مدونتنا',
      blog_desc: 'رؤى عقارية وتحليلات السوق وأدلة للمشترين والمستثمرين.',
      read_more: 'اقرأ المزيد',
      more_articles: 'مزيد من المقالات',
      back_blog: 'العودة إلى المدونة',
      article_not_found: 'المقال غير موجود',
      need_advice: 'هل تحتاج إلى نصيحة عقارية متخصصة؟',
      advice_desc: 'فريقنا في راياش للعقارات هنا لمساعدتك في اتخاذ أفضل قرارات عقارية.',
      contact_today: 'تواصل معنا اليوم',

      // Virtual Tours
      tours_title: 'الجولات الافتراضية',
      tours_desc: 'استمتع بتجربة عقاراتنا من أي مكان في العالم من خلال الجولات الافتراضية.',
      tours_sub: 'استكشف افتراضياً',
      tours_heading: 'جولات العقارات',
      tours_sub_desc: 'خذ جولة افتراضية عبر عقاراتنا المميزة دون مغادرة منزلك.',
      view_property: 'عرض العقار',
      cta_tour_title: 'هل تريد جولة شخصية؟',
      cta_tour_desc: 'جدول موعداً لجولة حضورية أو افتراضية مع أحد خبراء العقارات لدينا.',
      schedule_tour: 'جدول جولة',

      // Property Detail
      back_properties: 'العودة إلى العقارات',
      interested_title: 'مهتم بهذا العقار؟',
      interested_desc: 'تواصل مع فريقنا للحصول على مزيد من المعلومات أو لجدولة زيارة.',
      call_now: 'اتصل بنا الآن',
      email_us: 'راسلنا بالبريد',
      your_name: 'اسمك',
      your_email: 'بريدك الإلكتروني',
      your_phone: 'رقم هاتفك',
      your_message: 'رسالتك',
      send_inquiry: 'إرسال الاستفسار',
      share_property: 'مشاركة هذا العقار',
      copy_property_link: 'نسخ رابط العقار',
      link_copied: 'تم نسخ الرابط',
      share_facebook: 'فيسبوك',
      share_linkedin: 'لينكدإن',
      share_whatsapp: 'واتساب',
      share_on_facebook: 'مشاركة عبر فيسبوك',
      share_on_linkedin: 'مشاركة عبر لينكدإن',
      share_on_whatsapp: 'مشاركة عبر واتساب',
      property_not_found: 'العقار غير موجود',
      code_label: 'الرمز',
      description_heading: 'الوصف',
      features_heading: 'المزايا والمرافق',
      similar_properties: 'عقارات مشابهة',
      bedrooms: 'غرف النوم',
      bathrooms: 'دورات المياه',
      area_label: 'المساحة (م²)',

      // Footer
      footer_desc: 'شريكك الموثوق في العقارات في جميع أنحاء المملكة العربية السعودية.',
      footer_quick: 'روابط سريعة',
      footer_services: 'خدماتنا',
      footer_contact: 'تواصل معنا',
      footer_service_marketing: 'التسويق العقاري',
      footer_service_management: 'إدارة الممتلكات',
      footer_service_consulting: 'الاستشارات العقارية',
      footer_service_tours: 'الجولات الافتراضية',
      footer_phone: 'الهاتف',
      footer_email: 'البريد الإلكتروني',
      footer_address: 'العنوان',
      footer_address_value: 'طريق الأمير نايف، جدة',
      privacy_policy: 'سياسة الخصوصية',
      terms_service: 'شروط الاستخدام',
      footer_rights: 'جميع الحقوق محفوظة.',
    }
  }
}

const persistedLang = typeof window !== 'undefined' ? localStorage.getItem('rayash_lang') : null
const browserLang = typeof navigator !== 'undefined' ? navigator.language?.toLowerCase() : 'en'
const initialLang = persistedLang || (browserLang?.startsWith('ar') ? 'ar' : 'en')

i18n.use(initReactI18next).init({
  resources,
  lng: initialLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

if (typeof document !== 'undefined') {
  const lang = i18n.language?.startsWith('ar') ? 'ar' : 'en'
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
}

i18n.on('languageChanged', (lang) => {
  const normalized = lang?.startsWith('ar') ? 'ar' : 'en'
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('rayash_lang', normalized)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = normalized
    document.documentElement.dir = normalized === 'ar' ? 'rtl' : 'ltr'
  }
})

export default i18n
