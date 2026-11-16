export interface InsightItem {
  id: string | number
  slug: string
  tag: {
    en: string
    ar: string
  }
  title: {
    en: string
    ar: string
  }
  desc: {
    en: string
    ar: string
  }
  content?: {
    en: string
    ar: string
  }
  date: {
    en: string
    ar: string
  }
  image: string
  readTime?: {
    en: string
    ar: string
  }
  author?: {
    en: string
    ar: string
  }
}

export const featuredInsight: InsightItem = {
  id: 'resilient-industrial-supply-chains',
  slug: 'resilient-industrial-supply-chains',
  tag: { en: 'SUPPLY CHAIN', ar: 'سلسلة الإمداد' },
  title: {
    en: 'Building Resilient Industrial Supply Chains in Saudi Arabia',
    ar: 'بناء سلاسل إمداد صناعية مرنة في المملكة العربية السعودية'
  },
  desc: {
    en: 'Strategies for securing critical raw materials, precision parts, and local engineering capabilities in a volatile global market.',
    ar: 'استراتيجيات لتأمين المواد الخام الحيوية، والقطع الهندسية الدقيقة، وتعزيز القدرات الهندسية المحلية في ظل تقلبات السوق العالمية.'
  },
  content: {
    en: `
      <h2>The Strategic Imperative for Supply Chain Resilience</h2>
      <p>Modern industrial operations face unprecedented challenges: geopolitical volatility, maritime logistical bottlenecks, and rapid fluctuations in raw material pricing. For critical industrial facilities across Saudi Arabia—spanning petrochemicals, power generation, desalination, and manufacturing—supply chain disruptions directly threaten operational uptime.</p>
      
      <p>Building resilience requires a fundamental shift from reactive buffer stocks to proactive, multi-tiered supplier partnerships, local assembly, and rapid regional engineering support.</p>
      
      <h3>1. Localization and Strategic Stocking</h3>
      <p>In alignment with Saudi Vision 2030 and local content mandates, industrial operators are increasingly partnering with established regional distributors and technical service centers. By warehousing mission-critical rotating equipment, instrumentation spares, and specialized non-metallic piping locally in Dammam and Jubail, downtime risks are slashed from weeks to hours.</p>
      
      <h3>2. Predictive Demand and Digital Visibility</h3>
      <p>Advanced digital tracking and predictive maintenance algorithms now enable plant managers to forecast component wear before catastrophic failure occurs. Integrating smart sensors with ERP supply chain systems allows automated replenishment of wear parts, eliminating emergency airfreight costs.</p>
      
      <h3>3. Diversified Technology Alliances</h3>
      <p>Rather than relying on single-source offshore vendors, leading regional enterprises form strategic partnerships with global engineering leaders who have committed boots on the ground in the Kingdom. MVGL Saudi exemplifies this model, bridging tier-one global manufacturers with hands-on local engineering execution.</p>
      
      <h3>Conclusion</h3>
      <p>Supply chain resilience is no longer merely a cost-management exercise; it is the ultimate competitive advantage for the Kingdom's booming industrial sector.</p>
    `,
    ar: `
      <h2>الضرورة الاستراتيجية لمرونة سلاسل الإمداد</h2>
      <p>تواجه المنشآت الصناعية الحديثة تحديات غير مسبوقة: تقلبات جيوسياسية، واختناقات في الشحن البحري، وتغيرات سريعة في أسعار المواد الخام. وبالنسبة للمصانع الحيوية في المملكة العربية السعودية—بما في ذلك البتروكيماويات، وتوليد الطاقة، وتحلية المياه، والتصنيع—فإن أي اضطراب في سلاسل التوريد يهدد استمرارية العمليات بشكل مباشر.</p>
      
      <p>يتطلب بناء المرونة تحولاً جوهرياً من الاعتماد على التخزين الاحتياطي التقليدي إلى بناء شراكات استراتيجية متكاملة، والتجميع المحلي، وتوفير الدعم الهندسي الإقليمي السريع.</p>
      
      <h3>١. التوطين والتخزين الاستراتيجي</h3>
      <p>تماشياً مع رؤية السعودية 2030 وبرامج تعزيز المحتوى المحلي، تتجه المنشآت الصناعية نحو التعاون مع شركاء وموزعين محليين يمتلكون مراكز خدمة معتمدة في المملكة. ومن خلال توفير قطع الغيار الحيوية والمعدات الدوارة في الدمام والجبيل، تتقلص فترات التوقف غير المخطط لها من أسابيع إلى ساعات معدودة.</p>
      
      <h3>٢. التنبؤ بالطلب والشفافية الرقمية</h3>
      <p>تتيح تقنيات الصيانة التنبؤية المعتمدة على إنترنت الأشياء لمديري المصانع معرفة تآكل المكونات قبل تعطلها، مما يتيح جدولة عمليات التوريد بدقة وتجنب تكاليف الشحن الجوي الطارئ.</p>
      
      <h3>٣. الشراكات التكنولوجية المتنوعة</h3>
      <p>إن بناء شراكات وثيقة مع الشركات العالمية التي تمتلك تمثيلاً هندسياً حقيقياً داخل المملكة هو الركيزة الأساسية لضمان الاستمرارية، وهو النموذج الذي تقوده إم في جي إل السعودية بنجاح.</p>
    `
  },
  date: { en: 'June 25, 2026', ar: '٢٥ يونيو ٢٠٢٦' },
  image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  readTime: { en: '5 min read', ar: '٥ دقائق قراءة' },
  author: { en: 'MVGL Industrial Engineering Team', ar: 'فريق الهندسة الصناعية - إم في جي إل' }
}

export const insightsData: InsightItem[] = [
  featuredInsight,
  {
    id: 1,
    slug: 'smart-technologies-transformation-industry',
    tag: { en: 'DIGITALIZATION', ar: 'التحول الرقمي' },
    title: {
      en: 'Smart Technologies for the Transformation of Industry',
      ar: 'التقنيات الذكية لتحول القطاع الصناعي'
    },
    desc: {
      en: 'How IoT and advanced data analytics are optimizing production lines and minimizing downtime across modern facilities.',
      ar: 'كيف يساهم إنترنت الأشياء وتحليلات البيانات المتقدمة في تحسين خطوط الإنتاج وتقليل وقت التوقف في المنشآت الحديثة.'
    },
    content: {
      en: `
        <h2>Driving Factory Efficiency Through Edge Intelligence</h2>
        <p>The Fourth Industrial Revolution is reshaping industrial landscapes globally. In the GCC and Saudi Arabia specifically, facilities are rapidly modernizing legacy infrastructures with smart connected devices, smart motor control centers, and high-speed industrial Ethernet.</p>
        
        <h3>Real-time Operational Visibility</h3>
        <p>By capturing high-frequency vibration, temperature, and electrical load metrics directly from factory floor machines, plant operators can isolate micro-stoppages and eliminate productivity bottlenecks before they escalate.</p>
        
        <h3>Edge vs Cloud Analytics</h3>
        <p>While enterprise cloud systems provide macro-level business intelligence, modern industrial controllers execute machine-learning inference at the edge, making sub-millisecond safety and quality decisions without reliance on external networks.</p>
      `,
      ar: `
        <h2>رفع كفاءة المصانع من خلال الذكاء عند الحافة</h2>
        <p>تعيد الثورة الصناعية الرابعة تشكيل القطاع الصناعي في المنطقة. وتشهد مصانع المملكة تسارعاً كبيراً في تحديث البنى التحتية عبر أجهزة التحكم الذكية، ومراكز التحكم بالمحركات، والشبكات الصناعية فائقة السرعة.</p>
        
        <h3>الرؤية التشغيلية في الوقت الفعلي</h3>
        <p>من خلال رصد مؤشرات الاهتزاز والحرارة والأحمال الكهربائية في الوقت الحقيقي، يستطيع المشغلون تدارك الأعطال وتحسين معدلات الإنتاجية الإجمالية للمصنع.</p>
      `
    },
    date: { en: 'June 20, 2026', ar: '٢٠ يونيو ٢٠٢٦' },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    readTime: { en: '4 min read', ar: '٤ دقائق قراءة' },
    author: { en: 'Automation Solutions Group', ar: 'مجموعة حلول الأتمتة' }
  },
  {
    id: 2,
    slug: 'collaborative-robots-future-manufacturing',
    tag: { en: 'ROBOTICS', ar: 'الروبوتات' },
    title: {
      en: 'Collaborative Robots: Shaping the Future of Manufacturing',
      ar: 'الروبوتات المتعاونة: صياغة مستقبل التصنيع'
    },
    desc: {
      en: 'The role of cobots in safe human-robot collaboration, precision assembly, and flexible batch production on the factory floor.',
      ar: 'دور الروبوتات المتعاونة في تعزيز العمل المشترك الآمن بين البشر والآلات في المصانع والتجميع عالي الدقة.'
    },
    content: {
      en: `
        <h2>Safe, Flexible Automation for Complex Workcells</h2>
        <p>Unlike traditional heavy industrial robots that operate within caged enclosures, collaborative robots (cobots) feature advanced force-torque sensors and compliant joints that allow them to work safely alongside human technicians.</p>
        <p>In applications such as electronics assembly, packaging, CNC machine tending, and precision quality inspection, cobots dramatically reduce repetitive strain while elevating first-pass yield.</p>
      `,
      ar: `
        <h2>أتمتة آمنة ومرنة لخلايا العمل المعقدة</h2>
        <p>على عكس الروبوتات الصناعية الثقيلة التقليدية التي تتطلب أقفاصاً معزولة، تتميز الروبوتات المتعاونة (Cobots) بمستشعرات متطورة للتحكم بالقوة تسمح لها بالعمل بجانب الفنيين بأمان تام، مما يرفع دقة التجميع ويقلل نسب الهدر.</p>
      `
    },
    date: { en: 'June 15, 2026', ar: '١٥ يونيو ٢٠٢٦' },
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    readTime: { en: '4 min read', ar: '٤ دقائق قراءة' },
    author: { en: 'Advanced Robotics Division', ar: 'قسم الروبوتات المتقدمة' }
  },
  {
    id: 3,
    slug: 'advancing-control-systems-connected-devices',
    tag: { en: 'AUTOMATION', ar: 'الأتمتة' },
    title: {
      en: 'Advancing Control Systems through Connected Devices',
      ar: 'تطوير أنظمة التحكم من خلال الأجهزة المتصلة'
    },
    desc: {
      en: 'Integrating smart field devices to achieve real-time process monitoring, precision valve control, and robust cyber resilience.',
      ar: 'دمج الأجهزة الحقلية الذكية لتحقيق المراقبة الفورية والتحكم الدقيق في العمليات ورفع مستوى الأمن السيبراني.'
    },
    content: {
      en: `
        <h2>Harmonizing Field Networks and SCADA Systems</h2>
        <p>Modern process facilities demand seamless data exchange across disparate protocols—Modbus, EtherNet/IP, PROFINET, and OPC UA. Implementing dedicated industrial protocol gateways and managed switches eliminates islands of automation, enabling end-to-end plant governance and IEC 62443 cybersecurity compliance.</p>
      `,
      ar: `
        <h2>مواءمة الشبكات الحقلية مع أنظمة سكادا</h2>
        <p>تتطلب المنشآت الصناعية الحديثة تبادلاً سلساً للبيانات عبر بروتوكولات متعددة. ويضمن استخدام بوابات الاتصال الصناعية المتخصصة تكامل البيانات بين أجهزة القياس وأنظمة التحكم المركزية بأعلى معايير الأمن السيبراني.</p>
      `
    },
    date: { en: 'June 10, 2026', ar: '١٠ يونيو ٢٠٢٦' },
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    readTime: { en: '5 min read', ar: '٥ دقائق قراءة' },
    author: { en: 'Control Systems Engineering', ar: 'هندسة أنظمة التحكم' }
  },
  {
    id: 4,
    slug: 'rise-advanced-composites-heavy-industry',
    tag: { en: 'MATERIALS', ar: 'المواد المتقدمة' },
    title: {
      en: 'The Rise of Advanced Composites in Heavy Industry',
      ar: 'صعود المواد المركبة المتقدمة في الصناعات الثقيلة'
    },
    desc: {
      en: 'Why FRP/GRP composite structures and dual-laminate tanks are replacing traditional metals for high-corrosion industrial environments.',
      ar: 'لماذا تستبدل الهياكل المركبة وخزانات الألياف الزجاجية المعادن التقليدية في البيئات شديدة التآكل.'
    },
    content: {
      en: `
        <h2>Overcoming Harsh Corrosion in Coastal and Chemical Plants</h2>
        <p>In the Arabian Gulf region, high ambient temperatures, saline coastal atmospheres, and aggressive chemical processing accelerate the corrosion of conventional carbon steel and even stainless alloys. Fiberglass Reinforced Plastic (FRP) and Glass Reinforced Polymer (GRP) materials offer non-corrosive, lightweight, and electrically non-conductive alternatives that yield up to 50-year service lifespans with virtually zero painting or cathodic maintenance costs.</p>
      `,
      ar: `
        <h2>التغلب على التآكل القاسي في المنشآت الساحلية والكيميائية</h2>
        <p>في منطقة الخليج العربي، تؤدي درجات الحرارة المرتفعة والرطوبة المشبعة بالأملاح إلى تسارع تآكل المعادن التقليدية. وتوفر المواد المركبة (FRP/GRP) حلاً هندسياً فائق التحمل يصل عمره الافتراضي إلى 50 عاماً دون الحاجة إلى تكاليف الطلاء أو الحماية المهبطية المستمرة.</p>
      `
    },
    date: { en: 'May 28, 2026', ar: '٢٨ مايو ٢٠٢٦' },
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    readTime: { en: '6 min read', ar: '٦ دقائق قراءة' },
    author: { en: 'Non-Metallic Solutions Technical Unit', ar: 'الوحدة الفنية للمواد غير المعدنية' }
  },
  {
    id: 5,
    slug: 'optimizing-cooling-systems-energy-efficiency',
    tag: { en: 'ENERGY', ar: 'كفاءة الطاقة' },
    title: {
      en: 'Optimizing Cooling Systems for Energy Efficiency',
      ar: 'تحسين أنظمة التبريد لكفاءة استهلاك الطاقة'
    },
    desc: {
      en: 'Innovative water-cooled chillers and variable-speed screw compressors that slash electrical consumption in extreme ambient conditions.',
      ar: 'حلول مبتكرة لمبردات المياه والضواغط متغيرة السرعة لخفض استهلاك الكهرباء في الظروف المناخية القاسية.'
    },
    content: {
      en: `
        <h2>Sustainable Process Cooling in High-Ambient Climates</h2>
        <p>HVAC and process refrigeration can account for over 65% of the total electrical energy consumed by commercial and industrial facilities in Saudi Arabia during peak summer months. Incorporating magnetic bearing centrifugal chillers and economized dual-circuit screw compressors delivers remarkable Seasonal Energy Efficiency Ratios (SEER), directly reducing operating expenditure and carbon footprint.</p>
      `,
      ar: `
        <h2>تبريد صناعي مستدام في درجات الحرارة المرتفعة</h2>
        <p>يمثل التبريد والتكييف أكثر من 65% من إجمالي استهلاك الطاقة الكهربائية في المنشآت خلال أشهر الصيف. وتساهم المبردات المتقدمة ذات المحامل المغناطيسية وضواغط اللولب الموفرة للطاقة في خفض تكاليف التشغيل وانبعاثات الكربون بشكل ملموس.</p>
      `
    },
    date: { en: 'May 15, 2026', ar: '١٥ مايو ٢٠٢٦' },
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    readTime: { en: '5 min read', ar: '٥ دقائق قراءة' },
    author: { en: 'Refrigeration & HVAC Applications', ar: 'تطبيقات التبريد والتكييف الصناعي' }
  },
  {
    id: 6,
    slug: 'navigating-global-trade-port-performance',
    tag: { en: 'LOGISTICS', ar: 'الخدمات اللوجستية' },
    title: {
      en: 'Navigating Global Trade and Port Performance',
      ar: 'توجيه التجارة العالمية وأداء الموانئ'
    },
    desc: {
      en: 'Leveraging Saudi Arabia’s strategic maritime hubs to streamline customs, speed up multimodal transit, and optimize project cargo.',
      ar: 'الاستفادة من الموانئ الاستراتيجية للمملكة لتسريع التخليص الجمركي وتسهيل النقل متعدد الوسائط للمشاريع الكبرى.'
    },
    content: {
      en: `
        <h2>Saudi Arabia as the Global Logistics Crossroads</h2>
        <p>With massive expansions across King Abdulaziz Port in Dammam and Jeddah Islamic Port, Saudi Arabia is solidifying its position connecting Asia, Europe, and Africa. Strategic supply chain partners leverage integrated customs pre-clearance and bonded logistics zones to ensure oversized machinery and critical components arrive on schedule for major infrastructure projects.</p>
      `,
      ar: `
        <h2>المملكة العربية السعودية كمركز لوجستي عالمي</h2>
        <p>مع التوسعات الكبرى في ميناء الملك عبد العزيز بالدمام وميناء جدة الإسلامي، تعزز المملكة مكانتها كحلقة وصل استراتيجية بين القارات. وتستفيد الشركات الصناعية من مناطق الإيداع وإعادة التصدير لضمان وصول المعدات الثقيلة في المواعيد المحددة بدقة.</p>
      `
    },
    date: { en: 'May 02, 2026', ar: '٠٢ مايو ٢٠٢٦' },
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    readTime: { en: '4 min read', ar: '٤ دقائق قراءة' },
    author: { en: 'Logistics & Trade Strategy', ar: 'استراتيجيات التجارة والخدمات اللوجستية' }
  }
]

