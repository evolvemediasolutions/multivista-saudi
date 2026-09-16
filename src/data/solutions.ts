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
    id: 'air-gas-solutions',
    slug: 'air-gas-solutions',
    category: 'mechanical',
    title: {
      en: 'Air & Gas Solutions',
      ar: 'حلول الهواء والغاز'
    },
    description: {
      en: 'Delivering reliable compressed air and gas systems, we provide complete solutions that support critical industrial processes with maximum efficiency and uptime. Our innovative technologies and engineering expertise help industries such as Oil & Gas, Pharmaceuticals, Chemicals, Petrochemicals, and Power Generation achieve sustainable, safe, and dependable operations.',
      ar: 'من خلال تقديم أنظمة موثوقة للهواء والغاز المضغوطين، نوفر حلولاً متكاملة تدعم العمليات الصناعية الحيوية بأعلى كفاءة واستمرارية تشغيل. تساعد تقنياتنا المبتكرة وخبراتنا الهندسية قطاعات مثل النفط والغاز، والأدوية، والكيماويات، والبتروكيماويات، وتوليد الطاقة على تحقيق عمليات مستدامة، آمنة، وموثوقة.'
    },
    features: {
      en: [
        'Oil-Free & Oil-Injected Compressors',
        'Process Gas Compression Packages',
        'Advanced Filtration & Air Treatment Systems',
        'High-Pressure Gas Booster Systems'
      ],
      ar: [
        'ضواغط خالية من الزيت ومحقونة بالزيت',
        'حزم ضغط غاز العمليات المتخصصة',
        'أنظمة تنقية ومعالجة الهواء المتقدمة',
        'أنظمة تعزيز ضغط الغاز العالي'
      ]
    },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    partners: ['kirloskar-pneumatic']
  },
  {
    id: 'refrigeration-hvac-solutions',
    slug: 'refrigeration-hvac-solutions',
    category: 'cooling',
    title: {
      en: 'Refrigeration & HVAC Solutions',
      ar: 'حلول التبريد والتكييف'
    },
    description: {
      en: 'Delivering comprehensive industrial refrigeration, process cooling, and large-scale HVAC systems, we provide robust solutions engineered for high-efficiency temperature control in demanding industrial and commercial environments.',
      ar: 'من خلال تقديم أنظمة التبريد الصناعي وتبريد العمليات وأنظمة التكييف واسعة النطاق، نوفر حلولاً موثوقة مصممة للتحكم في درجات الحرارة بأعلى كفاءة في أصعب البيئات الصناعية والتجارية.'
    },
    features: {
      en: [
        'Water-Cooled & Air-Cooled Industrial Chillers',
        'Ammonia & Eco-Refrigerant Screw Compressor Packages',
        'Cold Chain Storage & Blast Freezing Solutions',
        'Process Gas Cooling & Heat Rejection Systems'
      ],
      ar: [
        'مبردات صناعية مبردة بالماء والهواء',
        'حزم ضواغط لولبية لغاز الأمونيا والمبردات الصديقة للبيئة',
        'حلول سلاسل التخزين البارد والتجميد السريع',
        'تبريد غازات العمليات وأنظمة التبادل الحراري'
      ]
    },
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    partners: ['kirloskar-pneumatic', 'kirloskar-chillers']
  },
  {
    id: 'automation-control',
    slug: 'automation-control',
    category: 'automation',
    title: {
      en: 'Automation & Control Solutions',
      ar: 'حلول الأتمتة والتحكم'
    },
    description: {
      en: 'Delivering intelligent automation, integrated control, and resilient industrial connectivity systems, we provide complete solutions that optimize critical manufacturing and infrastructure operations with maximum uptime, cybersecurity, and productivity.',
      ar: 'من خلال توفير أنظمة تحكم ذكية، وحلول محركات متقدمة، وبنية تحتية موثوقة للاتصالات الصناعية، نقدم حلولاً متكاملة تدعم العمليات التصنيعية والمرافق الحيوية بأعلى كفاءة واستمرارية تشغيل وأمان سيبراني.'
    },
    features: {
      en: [
        'Programmable Logic Controllers (PLCs) & PACs',
        'Variable Frequency Drives (VFDs) & Soft Starters',
        'Stratix Industrial Ethernet Switches & Security',
        'Predictive Condition Monitoring & IoT Telemetry'
      ],
      ar: [
        'أجهزة التحكم المنطقية القابلة للبرمجة (PLC/PAC)',
        'محركات ومغيرات التردد المتغير وأجهزة البدء الناعم',
        'مفاتيح الشبكات الصناعية وأمن أنظمة التحكم',
        'مراقبة حالة المعدات والقياس عن بعد لإنترنت الأشياء'
      ]
    },
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
    partners: ['rockwell-automation', 'hms-networks', 'prosoft-technology']
  },
  {
    id: 'non-metallic-solutions',
    slug: 'non-metallic-solutions',
    category: 'materials',
    title: {
      en: 'Non Metallic Solution',
      ar: 'حلول المواد غير المعدنية'
    },
    description: {
      en: 'Delivering comprehensive non-metallic, FRP, and GRP composite systems, we provide advanced corrosion-resistant piping, chemical storage tanks, gratings, and structural solutions engineered for harsh industrial and offshore environments.',
      ar: 'من خلال تقديم أنظمة متكاملة من المواد غير المعدنية والبلاستيك المقوى بالألياف والزجاج (FRP/GRP)، نوفر حلولاً متطورة للأنابيب المقاومة للتآكل وخزانات المواد الكيميائية والحواجز والحلول الإنشائية المصممة للبيئات الصناعية والبحرية القاسية.'
    },
    features: {
      en: [
        'FRP & GRP Chemical Process Piping Systems',
        'Above-ground & Underground Storage Tanks',
        'Molded & Pultruded FRP Gratings & Cable Trays',
        'Custom Structural Profiles & Industrial Ladders'
      ],
      ar: [
        'أنظمة أنابيب العمليات الكيميائية من FRP و GRP',
        'خزانات التخزين فوق الأرض وتحت الأرض (UGST)',
        'حواجز شبكية وحوامل كابلات من FRP المقولب والمسحوب',
        'مقاطع هيكلية وسلالم صناعية متطورة ومخصصة'
      ]
    },
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80',
    partners: ['epp-composites']
  },
  {
    id: 'fire-pump-solutions',
    slug: 'fire-pump-solutions',
    category: 'mechanical',
    title: {
      en: 'Fire Pump Solutions',
      ar: 'حلول مضخات الحريق'
    },
    description: {
      en: 'Delivering world-class FM-Approved and UL-Listed fire pump packages, we provide complete, certified fire protection and emergency water delivery systems engineered to safeguard lives and mission-critical assets across oil & gas, industrial, and high-rise facilities.',
      ar: 'من خلال توفير مجموعات مضخات حريق عالمية المستوى معتمدة من FM ومدرجة في UL، نقدم أنظمة حماية متكاملة وموثوقة لمكافحة الحرائق وإمداد مياه الطوارئ مصممة لحماية الأرواح والأصول الحيوية في منشآت النفط والغاز والمصانع والأبراج الشاهقة.'
    },
    features: {
      en: [
        'Horizontal & Vertical Split-Case Fire Pumps',
        'Vertical Turbine Fire Water Pumps',
        'Engineered Containerized Fire Pump Houses',
        'NFPA 20 Compliant Electric & Diesel Systems'
      ],
      ar: [
        'مضخات حريق أفقية ورأسية ذات غلاف منقسم',
        'مضخات مياه حريق توربينية رأسية',
        'محطات مضخات حريق مسبقة التجهيز داخل حاويات',
        'أنظمة كهربائية وديزل متوافقة مع معيار NFPA 20'
      ]
    },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    partners: ['spp-pumps']
  }
]
