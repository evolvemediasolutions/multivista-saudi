export interface Industry {
  id: string
  name: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  image: string
}

export const industriesData: Industry[] = [
  {
    id: 'oil-gas',
    name: { en: 'Oil & Gas', ar: 'النفط والغاز' },
    description: {
      en: 'Reliable engineering products, gas compression packages, and safe communication components for petrochemical complexes.',
      ar: 'منتجات هندسية موثوقة، وحزم ضغط غاز، ومكونات اتصالات آمنة للمجمعات البتروكيماوية.'
    },
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'petrochemical',
    name: { en: 'Petrochemical', ar: 'البتروكيماويات' },
    description: {
      en: 'Process instrumentation, corrosion-resistant structures, and heavy duty process gas and cooling systems.',
      ar: 'أجهزة قياس العمليات، والهياكل المقاومة للتآكل، وأنظمة غاز وتبريد العمليات الشاقة.'
    },
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'steel',
    name: { en: 'Steel', ar: 'الحديد والصلب' },
    description: {
      en: 'Automation systems and cooling systems engineered to withstand intense temperatures and continuous operations.',
      ar: 'أنظمة الأتمتة وأنظمة التبريد المصممة لتحمل درجات الحرارة الشديدة والعمليات المستمرة.'
    },
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'power',
    name: { en: 'Power', ar: 'الطاقة' },
    description: {
      en: 'Heavy mechanical systems, communication modules, and auxiliary utilities keeping the power generation networks stable.',
      ar: 'أنظمة ميكانيكية ثقيلة، ووحدات اتصالات، ومرافق مساعدة تحافظ على استقرار شبكات توليد الطاقة.'
    },
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mining',
    name: { en: 'Mining', ar: 'التعدين' },
    description: {
      en: 'Ruggedized communications, safety automation, and heavy material transport systems.',
      ar: 'اتصالات متينة، وأتمتة السلامة، وأنظمة نقل المواد الثقيلة.'
    },
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'construction',
    name: { en: 'Construction', ar: 'الإنشاءات' },
    description: {
      en: 'Advanced composites and pump modules assisting core infrastructure and civil works across Saudi Arabia.',
      ar: 'المواد المركبة المتقدمة ووحدات المضخات التي تدعم البنية التحتية الأساسية والأعمال المدنية في المملكة.'
    },
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cement',
    name: { en: 'Cement', ar: 'الأسمنت' },
    description: {
      en: 'Robust automation controls and compressed air infrastructure built for high particulate environments.',
      ar: 'عناصر تحكم قوية في الأتمتة وبنية تحتية للهواء المضغوط مصممة للبيئات المليئة بالغبار والجزيئات.'
    },
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chemical',
    name: { en: 'Chemical', ar: 'الصناعات الكيميائية' },
    description: {
      en: 'GRP tanks, GRP piping systems, and customized process systems resisting aggressive chemicals.',
      ar: 'خزانات GRP، وأنظمة أنابيب GRP، وأنظمة العمليات المخصصة المقاومة للمواد الكيميائية الشديدة.'
    },
    image: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'food-processing',
    name: { en: 'Food Processing', ar: 'تصنيع الأغذية' },
    description: {
      en: 'Clean air compression and food-grade refrigeration lines maintaining safety and temperature standards.',
      ar: 'ضغط هواء نظيف وخطوط تبريد مخصصة لقطاع الأغذية للحفاظ على معايير السلامة ودرجات الحرارة.'
    },
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dairy-beverage',
    name: { en: 'Dairy & Beverage', ar: 'الألبان والمشروبات' },
    description: {
      en: 'Industrial cooling and liquid transport pumps ensuring continuous production loops.',
      ar: 'تبريد صناعي ومضخات نقل السوائل لضمان استمرار حلقات الإنتاج.'
    },
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cold-rooms',
    name: { en: 'Cold Rooms', ar: 'غرف التبريد' },
    description: {
      en: 'State-of-the-art thermal isolation and commercial grade refrigeration packages.',
      ar: 'عزل حراري متطور وحزم تبريد ذات معايير تجارية عالية الجودة.'
    },
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hospitals-hotels',
    name: { en: 'Hospitals & Hotels', ar: 'المستشفيات والفنادق' },
    description: {
      en: 'Highly reliable and silent HVAC chillers and process cooling configurations.',
      ar: 'مبردات HVAC هادئة وموثوقة للغاية وتكوينات تبريد العمليات.'
    },
    image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=600&q=80'
  }
]
