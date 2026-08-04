export interface Partner {
  id: string
  slug: string
  name: string
  logo: string
  description: {
    en: string
    ar: string
  }
  longDescription: {
    en: string
    ar: string
  }
  solutions: string[] // Solution IDs associated
}

export const partnersData: Partner[] = [
  {
    id: 'rockwell-automation',
    slug: 'rockwell-automation',
    name: 'Rockwell Automation',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?auto=format&fit=crop&w=300&q=80',
    description: {
      en: 'Integrated Automation for the Connected Enterprise',
      ar: 'الأتمتة المتكاملة للمؤسسات المتصلة بالشبكة'
    },
    longDescription: {
      en: 'Rockwell Automation combines industrial automation, control, software and services to help organizations build more connected and productive operations.',
      ar: 'تجمع روكويل أوتوميشن (Rockwell Automation) بين الأتمتة الصناعية والتحكم والبرمجيات والخدمات لمساعدة المؤسسات على بناء عمليات أكثر اتصالاً وإنتاجية.'
    },
    solutions: ['industrial-automation']
  },
  {
    id: 'epp-composites',
    slug: 'epp-composites',
    name: 'EPP Composites',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?auto=format&fit=crop&w=300&q=80',
    description: {
      en: 'Pioneering FRP/GRP Innovation',
      ar: 'ريادة الابتكار في المواد البلاستيكية المقواة (FRP/GRP)'
    },
    longDescription: {
      en: 'Established in 1986, EPP Composites specializes in the design, engineering and manufacturing of Fiber Reinforced Plastic and Glass Reinforced Plastic solutions. The supplied content states that EPP serves more than 5,500 customers across 45+ countries.',
      ar: 'تأسست شركة إي بي بي كومبوزيتس (EPP Composites) عام 1986، وتتخصص في تصميم وهندسة وتصنيع حلول البلاستيك المقوى بالألياف (FRP) والبلاستيك المقوى بالزجاج (GRP). وتخدم الشركة أكثر من 5,500 عميل في أكثر من 45 دولة.'
    },
    solutions: ['frp-grp']
  },
  {
    id: 'spp-pumps',
    slug: 'spp-pumps',
    name: 'SPP Pumps',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?auto=format&fit=crop&w=300&q=80',
    description: {
      en: 'Precision Pumping for Critical Applications',
      ar: 'مضخات دقيقة للتطبيقات الحرجة'
    },
    longDescription: {
      en: 'For nearly 150 years, SPP Pumps has specialized in centrifugal pumps and related systems.',
      ar: 'لأكثر من 150 عاماً، تخصصت شركة إس بي بي بمبس (SPP Pumps) في مضخات الطرد المركزي والأنظمة ذات الصلة.'
    },
    solutions: ['pumping']
  },
  {
    id: 'kirloskar-pneumatic',
    slug: 'kirloskar-pneumatic',
    name: 'Kirloskar Pneumatic',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?auto=format&fit=crop&w=300&q=80',
    description: {
      en: 'Innovation That Powers Industry',
      ar: 'ابتكار يدعم التطبيقات الصناعية'
    },
    longDescription: {
      en: 'Founded in 1958, Kirloskar Pneumatic develops engineering technologies supporting diverse industrial applications.',
      ar: 'تأسست شركة كيرلوسكار نيوماتيك (Kirloskar Pneumatic) في عام 1958، وتطور تكنولوجيات هندسية تدعم مختلف التطبيقات الصناعية.'
    },
    solutions: ['compressed-air', 'industrial-refrigeration', 'process-gas-compression']
  },
  {
    id: 'kirloskar-chillers',
    slug: 'kirloskar-chillers',
    name: 'Kirloskar Chillers',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?auto=format&fit=crop&w=300&q=80',
    description: {
      en: 'Solutions for Today. Engineered for Tomorrow.',
      ar: 'حلول لليوم، مصممة للمستقبل.'
    },
    longDescription: {
      en: 'Kirloskar Chillers brings decades of experience in HVAC&R, with a focus on reliability, operating efficiency and responsive after-sales support.',
      ar: 'تقدم كيرلوسكار تشيلرز (Kirloskar Chillers) عقوداً من الخبرة في مجال التدفئة والتهوية وتكييف الهواء والتبريد (HVAC&R)، مع التركيز على الموثوقية والكفاءة التشغيلية والدعم المستجيب لما بعد البيع.'
    },
    solutions: ['hvac-process-cooling', 'industrial-refrigeration']
  },
  {
    id: 'hms-networks',
    slug: 'hms-networks',
    name: 'HMS Networks',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?auto=format&fit=crop&w=300&q=80',
    description: {
      en: 'We Make Industrial Equipment Communicate',
      ar: 'نحن نجعل المعدات الصناعية تتواصل'
    },
    longDescription: {
      en: 'HMS stands for Hardware Meets Software™. Its technologies enable industrial hardware to communicate and exchange information with software and other systems.',
      ar: 'يرمز HMS إلى التقاء الأجهزة والبرمجيات (Hardware Meets Software™). وتمكن تقنياتها الأجهزة الصناعية من الاتصال وتبادل المعلومات مع البرامج والأنظمة الأخرى.'
    },
    solutions: ['industrial-communication']
  },
  {
    id: 'prosoft-technology',
    slug: 'prosoft-technology',
    name: 'ProSoft Technology',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?auto=format&fit=crop&w=300&q=80',
    description: {
      en: 'Reliable Connections for the Industrial World',
      ar: 'اتصالات موثوقة للعالم الصناعي'
    },
    longDescription: {
      en: "ProSoft Technology, one of Belden's connected brands, provides industrial communication technologies designed to address connectivity, optimization, modernization and migration challenges.",
      ar: "تقدم بروسوفت تكنولوجي (ProSoft Technology)، إحدى العلامات التجارية المتصلة بشركة بيلدن (Belden)، تقنيات اتصالات صناعية مصممة لمعالجة تحديات الاتصال والتحسين والتحديث والترحيل الرقمي."
    },
    solutions: ['industrial-automation', 'industrial-communication']
  }
]
