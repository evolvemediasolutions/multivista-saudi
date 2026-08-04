export interface Solution {
  id: string
  slug: string
  category: 'automation' | 'mechanical' | 'cooling' | 'materials'
  title: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  features: {
    en: string[]
    ar: string[]
  }
  image: string
  partners: string[] // Partner IDs associated
}

export const solutionsData: Solution[] = [
  {
    id: 'industrial-automation',
    slug: 'industrial-automation',
    category: 'automation',
    title: {
      en: 'Industrial Automation',
      ar: 'الأتمتة الصناعية'
    },
    description: {
      en: 'Drive production efficiency and reliability with cutting-edge control systems, drives, and smart factory instrumentation engineered for heavy-duty environments.',
      ar: 'عزز كفاءة الإنتاج وموثوقيته من خلال أنظمة التحكم المتقدمة والمحركات وأجهزة المصانع الذكية المصممة للبيئات الشاقة.'
    },
    features: {
      en: [
        'Programmable Logic Controllers (PLCs)',
        'Human Machine Interfaces (HMIs) & SCADA',
        'Variable Speed Drives (VSDs) & Soft Starters',
        'Control Panels & Automation Assemblies'
      ],
      ar: [
        'أجهزة التحكم المنطقية القابلة للبرمجة (PLC)',
        'واجهات المستخدم والآلة (HMI) وأنظمة SCADA',
        'محركات السرعة المتغيرة وأجهزة البدء الناعم',
        'لوحات التحكم وتجميعات الأتمتة'
      ]
    },
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
    partners: ['rockwell-automation', 'prosoft-technology']
  },
  {
    id: 'compressed-air',
    slug: 'compressed-air',
    category: 'mechanical',
    title: {
      en: 'Compressed Air Solutions',
      ar: 'حلول الهواء المضغوط'
    },
    description: {
      en: 'Energy-efficient air compressors, air dryers, and filtration systems designed to deliver clean, dry air for continuous industrial operations.',
      ar: 'ضواغط هواء موفرة للطاقة، ومجففات هواء، وأنظمة ترشيح مصممة لتوفير هواء نظيف وجاف للعمليات الصناعية المستمرة.'
    },
    features: {
      en: [
        'Oil-Injected Rotary Screw Compressors',
        'Oil-Free Air Compressors',
        'Refrigerated & Desiccant Air Dryers',
        'Air Receivers & Line Filters'
      ],
      ar: [
        'ضواغط هواء لولبية دوارة محقونة بالزيت',
        'ضواغط هواء خالية من الزيت',
        'مجففات هواء مبردة وممتصة للرطوبة',
        'خزانات هواء وفلاتر خطوط الأنابيب'
      ]
    },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    partners: ['kirloskar-pneumatic']
  },
  {
    id: 'industrial-refrigeration',
    slug: 'industrial-refrigeration',
    category: 'cooling',
    title: {
      en: 'Industrial Refrigeration',
      ar: 'التبريد الصناعي'
    },
    description: {
      en: 'High-performance cold chain solutions, ammonia/Freon compressors, and evaporative condensers for food processing, petrochemicals, and logistics.',
      ar: 'حلول سلاسل التبريد عالية الأداء، وضواغط الأمونيا/الفريون، والمكثفات التبخيرية لتصنيع الأغذية والبتروكيماويات والخدمات اللوجستية.'
    },
    features: {
      en: [
        'Ammonia Screw Compressor Packages',
        'Evaporative Condensers & Chillers',
        'Cold Room Storage Solutions',
        'Turnkey Refrigeration Engineering'
      ],
      ar: [
        'حزم ضواغط الأمونيا اللولبية',
        'المكثفات التبخيرية والمبردات',
        'حلول تخزين غرف التبريد',
        'هندسة تبريد متكاملة وجاهزة للتشغيل'
      ]
    },
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    partners: ['kirloskar-pneumatic', 'kirloskar-chillers']
  },
  {
    id: 'process-gas-compression',
    slug: 'process-gas-compression',
    category: 'mechanical',
    title: {
      en: 'Process Gas Compression',
      ar: 'ضغط غازات العمليات'
    },
    description: {
      en: 'Custom-built gas compressors engineered to handle hazardous, corrosive, and heavy process gases in refineries and chemical plants.',
      ar: 'ضواغط غاز مصممة خصيصاً للتعامل مع غازات العمليات الخطرة والمسببة للتآكل والثقيلة في المصافي ومصانع الكيماويات.'
    },
    features: {
      en: [
        'Reciprocating Gas Compressors',
        'API 619 Screw Compressor Packages',
        'High-Pressure Gas Boosters',
        'Custom Skid Packaging & Controls'
      ],
      ar: [
        'ضواغط الغاز الترددية',
        'حزم ضواغط لولبية متوافقة مع معيار API 619',
        'معززات غاز عالية الضغط',
        'تصميم وبناء لوحات التحكم وحزم التثبيت المخصصة'
      ]
    },
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    partners: ['kirloskar-pneumatic']
  },
  {
    id: 'hvac-process-cooling',
    slug: 'hvac-process-cooling',
    category: 'cooling',
    title: {
      en: 'HVAC & Process Cooling',
      ar: 'التكييف وتبريد العمليات'
    },
    description: {
      en: 'Large-scale liquid chillers, cooling towers, and air handling equipment designed to maintain precise temperatures for critical processes and commercial structures.',
      ar: 'مبردات سوائل واسعة النطاق، وأبراج تبريد، ومعدات مناولة الهواء المصممة للحفاظ على درجات حرارة دقيقة للعمليات الحرجة والهياكل التجارية.'
    },
    features: {
      en: [
        'Water-Cooled and Air-Cooled Chillers',
        'FRP / Cross-flow Cooling Towers',
        'Air Handling Units (AHUs) & Fan Coil Units',
        'Energy Audit and Retrofits'
      ],
      ar: [
        'مبردات المياه ومبردات الهواء',
        'أبراج تبريد FRP / ذات تدفق متقاطع',
        'وحدات مناولة الهواء (AHUs) ووحدات ملف المروحة',
        'تدقيق الطاقة وتحديث الأنظمة القديمة'
      ]
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    partners: ['kirloskar-chillers']
  },
  {
    id: 'pumping',
    slug: 'pumping',
    category: 'mechanical',
    title: {
      en: 'Pumping Solutions',
      ar: 'حلول الضخ'
    },
    description: {
      en: 'Heavy-duty industrial pumps for water supply, chemical processing, slurry transport, and fire-fighting systems compliant with international standards.',
      ar: 'مضخات صناعية ثقيلة لإمدادات المياه، والمعالجة الكيميائية، ونقل الطين، وأنظمة مكافحة الحرائق المتوافقة مع المعايير الدولية.'
    },
    features: {
      en: [
        'End Suction & Split Case Pumps',
        'Vertical Turbine Pumps',
        'FM Approved / UL Listed Fire Pump Packages',
        'Corrosion Resistant Pumping Equipment'
      ],
      ar: [
        'مضخات السحب الطرفي ومضخات العلبة المنقسمة',
        'مضخات التوربينات الرأسية',
        'مجموعات مضخات الحريق المعتمدة والمدرجة بـ FM / UL',
        'معدات ضخ مقاومة للتآكل'
      ]
    },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    partners: ['spp-pumps']
  },
  {
    id: 'industrial-communication',
    slug: 'industrial-communication',
    category: 'automation',
    title: {
      en: 'Industrial Communication',
      ar: 'الاتصالات الصناعية'
    },
    description: {
      en: 'Establish secure, robust, and reliable networking infrastructures connecting shop floor operations to enterprise management systems.',
      ar: 'أنشئ بنيات تحتية آمنة وقوية وموثوقة لشبكات الاتصال لربط عمليات الإنتاج الأرضية بأنظمة إدارة المؤسسات.'
    },
    features: {
      en: [
        'Industrial Wireless Modems & Routers',
        'Protocol Converters & Gateways',
        'Network Switches & Media Converters',
        'Remote Access Solutions & Cyber Security'
      ],
      ar: [
        'أجهزة المودم والراوتر اللاسلكية الصناعية',
        'محولات البروتوكولات وبوابات الاتصال',
        'مفاتيح الشبكة ومحولات الوسائط',
        'حلول الوصول عن بعد والأمن السيبراني'
      ]
    },
    image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=800&q=80',
    partners: ['hms-networks', 'prosoft-technology']
  },
  {
    id: 'frp-grp',
    slug: 'frp-grp',
    category: 'materials',
    title: {
      en: 'FRP / GRP Solutions',
      ar: 'حلول FRP / GRP'
    },
    description: {
      en: 'Lightweight, high-strength composite structures, gratings, piping, and chemical storage tanks engineered for maximum corrosion resistance.',
      ar: 'هياكل مركبة وخفيفة الوزن وعالية القوة، وحواجز شبكية، وأنابيب، وخزانات تخزين كيميائية مصممة لتوفير أقصى مقاومة للتآكل.'
    },
    features: {
      en: [
        'FRP / GRP Gratings & Cable Trays',
        'Chemical Storage Tanks & Vessels',
        'FRP Pipes & Fittings',
        'Custom Composite Structural Engineering'
      ],
      ar: [
        'حواجز شبكية وحوامل كابلات من FRP / GRP',
        'خزانات وأوعية تخزين المواد الكيميائية',
        'أنابيب وقطع تركيب FRP',
        'الهندسة الإنشائية للمركبات المخصصة'
      ]
    },
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80',
    partners: ['epp-composites']
  }
]
