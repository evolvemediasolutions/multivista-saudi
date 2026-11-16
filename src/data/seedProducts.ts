export interface PartnerProduct {
  id: string
  slug: string
  partner: string
  solution: string
  category: string
  tag: string
  title: {
    en: string
    ar: string
  }
  desc: {
    en: string
    ar: string
  }
  specs: {
    en: string
    ar: string
  }
  image: string
  brochureUrl?: string
  exploreUrl?: string
}

export const seedProducts: PartnerProduct[] = [
  {
    "id": "controllogix-5590-controllers",
    "slug": "controllogix-5590-controllers",
    "partner": "rockwell-automation",
    "solution": "automation-control",
    "category": "controllers",
    "tag": "ROCKWELL AUTOMATION",
    "title": {
      "en": "ControlLogix® 5590 Controllers",
      "ar": "أجهزة التحكم ControlLogix® 5590"
    },
    "desc": {
      "en": "Next-generation high-speed industrial automation controllers engineered for high-availability process and safety applications.",
      "ar": "أجهزة تحكم متطورة من الجيل التالي للعمليات الصناعية وتطبيقات السلامة عالية التوافر."
    },
    "specs": {
      "en": "Ultra-Fast Processing | High-Availability Redundancy | Scalable Motion Control | Gigabit Industrial Ethernet | Studio 5000 Integration",
      "ar": "معالجة فائقة السرعة | معمارية مزدوجة عالية التوافر | تحكم متدرج بالحركة | إيثرنت صناعي جيجابت | تكامل مع Studio 5000"
    },
    "image": "/AUTOMATION CONTROL/ROCKWELL AUTOMATION/Programmable Controllers.jpg"
  },
  {
    "id": "controllogix-5580-controllers",
    "slug": "controllogix-5580-controllers",
    "partner": "rockwell-automation",
    "solution": "automation-control",
    "category": "controllers",
    "tag": "ROCKWELL AUTOMATION",
    "title": {
      "en": "ControlLogix® 5580 Controllers",
      "ar": "أجهزة التحكم ControlLogix® 5580"
    },
    "desc": {
      "en": "High-performance programmable automation controllers engineered for mission-critical industrial logic, motion, safety, and process automation.",
      "ar": "أجهزة تحكم برمجية متطورة مصممة للعمليات الصناعية الحيوية والتحكم في الحركة والسلامة."
    },
    "specs": {
      "en": "High-Speed Processing | Integrated Motion Control | EtherNet/IP Communication | Scalable Architecture | Studio 5000 Integration",
      "ar": "معالجة فائقة السرعة | تحكم مدمج في الحركة | اتصالات EtherNet/IP | معمارية قابلة للتوسع | تكامل مع Studio 5000"
    },
    "image": "/AUTOMATION CONTROL/ROCKWELL AUTOMATION/Programmable Controllers.jpg"
  },
  {
    "id": "compactlogix-5380-controllers",
    "slug": "compactlogix-5380-controllers",
    "partner": "rockwell-automation",
    "solution": "automation-control",
    "category": "controllers",
    "tag": "ROCKWELL AUTOMATION",
    "title": {
      "en": "CompactLogix™ 5380 Controllers",
      "ar": "أجهزة التحكم CompactLogix™ 5380"
    },
    "desc": {
      "en": "Compact, scalable automation controllers delivering precision motion, high-speed discrete control, and integrated safety.",
      "ar": "أجهزة تحكم مدمجة ومتدرجة توفر دقة التحكم في الحركة والتحكم الرقمي السريع والسلامة المتكاملة."
    },
    "specs": {
      "en": "Compact Form Factor | High-Speed Discrete Control | Dual Gigabit Ethernet | Integrated Safety SIL 3 | Motion Over EtherNet/IP",
      "ar": "حجم مدمج | تحكم رقمي فائق السرعة | منفذا إيثرنت جيجابت | أمان متكامل SIL 3 | تحكم بالحركة عبر EtherNet/IP"
    },
    "image": "/AUTOMATION CONTROL/ROCKWELL AUTOMATION/Programmable Controllers.jpg"
  },
  {
    "id": "rtu-controllers",
    "slug": "rtu-controllers",
    "partner": "rockwell-automation",
    "solution": "automation-control",
    "category": "controllers",
    "tag": "ROCKWELL AUTOMATION",
    "title": {
      "en": "RTU Controllers",
      "ar": "وحدات التحكم الطرفية عن بعد (RTU)"
    },
    "desc": {
      "en": "Modular Remote Terminal Units engineered for harsh, remote pipeline and wellhead installations with ultra-low power consumption and wide temperature tolerance.",
      "ar": "وحدات تحكم طرفية معيارية مصممة للتركيبات البعيدة وظروف البيئة الشاقة لخطوط الأنابيب ورؤوس الآبار."
    },
    "specs": {
      "en": "Remote Telemetry | Solar & Wide Temp Tolerant",
      "ar": "قياس عن بعد | تشغيل بالطاقة الشمسية"
    },
    "image": "/AUTOMATION CONTROL/ROCKWELL AUTOMATION/RTU Controllers.png"
  },
  {
    "id": "i-o-modules",
    "slug": "i-o-modules",
    "partner": "rockwell-automation",
    "solution": "automation-control",
    "category": "controllers",
    "tag": "ROCKWELL AUTOMATION",
    "title": {
      "en": "(I/O) Modules",
      "ar": "وحدات الإدخال والإخراج (I/O Modules)"
    },
    "desc": {
      "en": "Comprehensive distributed and chassis-based I/O solutions providing modular flexibility, high-speed digital/analog processing, and integrated functional safety.",
      "ar": "حلول إدخال وإخراج معيارية وشاملة توفر مرونة التوزيع ومعالجة الإشارات عالية السرعة والسلامة المدمجة."
    },
    "specs": {
      "en": "Distributed & Chassis I/O | Hot Swappable (RIUP)",
      "ar": "إدخال/إخراج موزع ومعياري | تبديل أثناء التشغيل"
    },
    "image": "/AUTOMATION CONTROL/ROCKWELL AUTOMATION/IO Modules.png"
  },
  {
    "id": "variable-frequency-drives",
    "slug": "variable-frequency-drives",
    "partner": "rockwell-automation",
    "solution": "automation-control",
    "category": "drives",
    "tag": "ROCKWELL AUTOMATION",
    "title": {
      "en": "Variable Frequency Drives",
      "ar": "محركات التردد المتغير (VFD)"
    },
    "desc": {
      "en": "World-class PowerFlex AC and DC drives designed for precision motor speed control, significant energy savings, and seamless industrial integration.",
      "ar": "محركات PowerFlex للتيار المتردد والمستمر المصممة للتحكم الدقيق في السرعة وتوفير استهلاك الطاقة."
    },
    "specs": {
      "en": "PowerFlex Family | Low & Medium Voltage Control",
      "ar": "عائلة PowerFlex | تحكم الجهد المنخفض والمتوسط"
    },
    "image": "/AUTOMATION CONTROL/ROCKWELL AUTOMATION/Variable Frequency Drives.png"
  },
  {
    "id": "motor-controllers",
    "slug": "motor-controllers",
    "partner": "rockwell-automation",
    "solution": "automation-control",
    "category": "drives",
    "tag": "ROCKWELL AUTOMATION",
    "title": {
      "en": "Motor Controllers",
      "ar": "أجهزة التحكم في المحركات وبدء التشغيل"
    },
    "desc": {
      "en": "Intelligent solid-state soft starters, electronic overload relays, and contactors providing superior motor protection and advanced diagnostics.",
      "ar": "أجهزة بدء تشغيل ناعم ومرحلات حماية ذكية وموصلات توفر حماية متقدمة للمحركات."
    },
    "specs": {
      "en": "Solid-State Soft Starters | Smart Overload Protection",
      "ar": "أجهزة بدء ناعم | حماية إلكترونية ذكية"
    },
    "image": "/AUTOMATION CONTROL/ROCKWELL AUTOMATION/Motor Controllers'.png"
  },
  {
    "id": "industrial-network-solutions",
    "slug": "industrial-network-solutions",
    "partner": "rockwell-automation",
    "solution": "automation-control",
    "category": "networking",
    "tag": "ROCKWELL AUTOMATION",
    "title": {
      "en": "Industrial Network Solutions",
      "ar": "حلول الشبكات والاتصالات الصناعية"
    },
    "desc": {
      "en": "Stratix managed Ethernet switches and security appliances designed to deliver resilient, secure, and deterministic EtherNet/IP communication.",
      "ar": "مفاتيح Stratix المدارة وأجهزة الأمان المصممة لتوفير اتصالات EtherNet/IP آمنة وموثوقة."
    },
    "specs": {
      "en": "Stratix Managed Switches | CIP Security & NAT",
      "ar": "مفاتيح Stratix المدارة | أمان صناعي CIP"
    },
    "image": "/AUTOMATION CONTROL/ROCKWELL AUTOMATION/Industrial Network Solutions.png"
  },
  {
    "id": "condition-monitoring",
    "slug": "condition-monitoring",
    "partner": "rockwell-automation",
    "solution": "automation-control",
    "category": "networking",
    "tag": "ROCKWELL AUTOMATION",
    "title": {
      "en": "Condition Monitoring",
      "ar": "أنظمة مراقبة حالة المعدات والصيانة التنبؤية"
    },
    "desc": {
      "en": "Real-time vibration sensors and dynamic measurement modules safeguarding critical rotating equipment to prevent unplanned machinery failure.",
      "ar": "حساسات اهتزاز ووحدات قياس ديناميكية في الوقت الفعلي لحماية المعدات الدوارة ومنع التوقفات غير المخططة."
    },
    "specs": {
      "en": "Dynamic Vibration Monitoring | Predictive Machinery Health",
      "ar": "مراقبة ديناميكية للاهتزازات | صحة الآلات التنبؤية"
    },
    "image": "/AUTOMATION CONTROL/ROCKWELL AUTOMATION/Condition Monitoring.png"
  },
  {
    "id": "industrial-computers-and-monitors",
    "slug": "industrial-computers-and-monitors",
    "partner": "rockwell-automation",
    "solution": "automation-control",
    "category": "networking",
    "tag": "ROCKWELL AUTOMATION",
    "title": {
      "en": "Industrial Computers and Monitors",
      "ar": "الحواسب الصناعية وشاشات التشغيل"
    },
    "desc": {
      "en": "Ruggedized industrial PCs, sunlight-readable touch displays, and operator workstations engineered to endure heavy industrial environments.",
      "ar": "حواسب صناعية متينة وشاشات لمس عالية الدقة ومحطات عمل للمشغلين مصممة للعمل في البيئات الصناعية الشاقة."
    },
    "specs": {
      "en": "Extreme Industrial Rated | Sunlight Readable Touch",
      "ar": "تصنيف صناعي فائق | شاشات لمس واضحة تحت الشمس"
    },
    "image": "/AUTOMATION CONTROL/ROCKWELL AUTOMATION/Industrial Computers and Monitors.png"
  },
  {
    "id": "circuit-and-load-protection",
    "slug": "circuit-and-load-protection",
    "partner": "rockwell-automation",
    "solution": "automation-control",
    "category": "protection",
    "tag": "ROCKWELL AUTOMATION",
    "title": {
      "en": "Circuit and Load Protection",
      "ar": "حماية الدوائر الكهربائية والأحمال"
    },
    "desc": {
      "en": "Modular miniature circuit breakers, electronic circuit protectors, and residual current devices preventing electrical overloads and short circuits.",
      "ar": "قواطع دوائر مصغرة وحمايات إلكترونية للأحمال تحمي الأنظمة من زيادات التيار والدوائر القصيرة."
    },
    "specs": {
      "en": "Modular DIN Rail Mount | High Fault Current Rating",
      "ar": "تركيب معياري DIN Rail | قدرة عالية على فصل الأعطال"
    },
    "image": "/AUTOMATION CONTROL/ROCKWELL AUTOMATION/Circuit and Load Protection.png"
  },
  {
    "id": "relays-and-timers",
    "slug": "relays-and-timers",
    "partner": "rockwell-automation",
    "solution": "automation-control",
    "category": "protection",
    "tag": "ROCKWELL AUTOMATION",
    "title": {
      "en": "Relays and Timers",
      "ar": "المرحلات ومؤقتات التحكم"
    },
    "desc": {
      "en": "General-purpose, timing, safety, and solid-state relays built for high duty-cycle longevity and precision switching in critical industrial control circuits.",
      "ar": "مرحلات عامة ومؤقتات ومرحلات أمان مصممة للعمل الشاق والتبديل الدقيق في دوائر التحكم الصناعية."
    },
    "specs": {
      "en": "General & Safety Relays | High Switching Reliability",
      "ar": "مرحلات عامة ومرحلات أمان | موثوقية تشغيل فائقة"
    },
    "image": "/AUTOMATION CONTROL/ROCKWELL AUTOMATION/Relays and Timers.png"
  },
  {
    "id": "packaged-fire-sets",
    "slug": "packaged-fire-sets",
    "partner": "spp-pumps",
    "solution": "fire-pump-solutions",
    "category": "packaged-sets",
    "tag": "SPP PUMPS",
    "title": {
      "en": "Packaged Fire Sets",
      "ar": "مجموعات مضخات الحريق المعبأة"
    },
    "desc": {
      "en": "Engineered skid-mounted fire pump packages integrating electric and diesel drivers, jockey pumps, and auto-transfer switchgear for rapid, fully tested site integration.",
      "ar": "حزم مضخات حريق هندسية مجمعة على قواعد هيكلية تدمج المحركات الكهربائية والديزل ومضخات التعويض ولوحات التحويل التلقائي لتثبيت سريع واختبار شامل."
    },
    "specs": {
      "en": "Skid-Mounted | Dual Driver Redundancy | NFPA 20, UL Listed & FM Approved",
      "ar": "مثبتة على قاعدة هيكلية | ازدواجية المحركات | مطابقة لـ NFPA 20 ومعتمدة من UL و FM"
    },
    "image": "/PRODUCTS/SPP PUMPS/PACKAGED FIRE SETS.jpg"
  },
  {
    "id": "pre-packaged-pump-houses",
    "slug": "pre-packaged-pump-houses",
    "partner": "spp-pumps",
    "solution": "fire-pump-solutions",
    "category": "pump-houses",
    "tag": "SPP PUMPS",
    "title": {
      "en": "Pre-Packaged Pump Houses",
      "ar": "محطات مضخات الحريق المعبأة مسبقاً"
    },
    "desc": {
      "en": "Fully enclosed, weatherproof turnkey pump houses pre-fitted with internal piping, power, ventilation, lighting, and advanced deluge control systems.",
      "ar": "محطات ضخ متكاملة ومغلقة بالكامل ومقاومة للعوامل الجوية، مزودة بكافة التمديدات الداخلية والكهرباء والتهوية والإنارة وأنظمة التحكم بالإغراق."
    },
    "specs": {
      "en": "Factory Assembled & Tested | Drop-In-Place Installation | ISO Container Standard",
      "ar": "مجمعة ومختبرة بالكامل في المصنع | تركيب فوري في الموقع | مطابقة لمعايير حاويات ISO"
    },
    "image": "/PRODUCTS/SPP PUMPS/PRE-PACKAGED PUMP HOUSES.jpg"
  },
  {
    "id": "oil-injected-electric-screw-compressor",
    "slug": "oil-injected-electric-screw-compressor",
    "partner": "kirloskar-pneumatic",
    "solution": "air-gas-solutions",
    "category": "screw",
    "tag": "KIRLOSKAR PNEUMATIC",
    "title": {
      "en": "Oil Injected Electric Screw Compressor",
      "ar": "ضاغط الهواء اللولبي الكهربائي المحقون بالزيت"
    },
    "desc": {
      "en": "Kirloskar Pneumatic offers a comprehensive range of oil-injected electric screw air compressors that include fixed-speed models and those powered by variable frequency drive technology. Designed to withstand hard conditions, these screw compressors deliver unparalleled performance across applications.",
      "ar": "تقدم كيرلوسكار نيوماتيك مجموعة شاملة من ضواغط الهواء اللولبية الكهربائية المحقونة بالزيت والتي تشمل نماذج السرعة الثابتة وتلك التي تعمل بتقنية محركات التردد المتغير، مصممة لتحمل أصعب الظروف وتوفير أداء فائق."
    },
    "specs": {
      "en": "Capacity: 22 to 1047 cfm | Pressure Range: 7.5 to 13 kg/cm²",
      "ar": "السعة: 22 إلى 1047 قدم مكعب/دقيقة | نطاق الضغط: 7.5 إلى 13 كجم/سم²"
    },
    "image": "/AIR & GAS SOLUTIONS/Oil Injected Electric Screw Compressor.png"
  },
  {
    "id": "diesel-engine-driven-portable-screw-compressor",
    "slug": "diesel-engine-driven-portable-screw-compressor",
    "partner": "kirloskar-pneumatic",
    "solution": "air-gas-solutions",
    "category": "screw",
    "tag": "KIRLOSKAR PNEUMATIC",
    "title": {
      "en": "Diesel Engine Driven Portable Screw Compressor",
      "ar": "ضاغط الهواء اللولبي المحمول بمحرك ديزل"
    },
    "desc": {
      "en": "We have set a new standard with our KRAMIS-portable compressors, engineered for exceptional durability and efficiency. Built to withstand the toughest challenges of demanding work environments, these compressors offer superior performance, ensure reliability and durability as well as high-power output even in the most remote locations.",
      "ar": "وضعنا معياراً جديداً مع ضواغط KRAMIS المحمولة والمصممة هندسياً لمتانة وكفاءة استثنائية لتحمل أصعب تحديات بيئات العمل وتوفير قدرة عالية حتى في أبعد المواقع."
    },
    "specs": {
      "en": "Capacity: 5.1 to 17 m³/min | Pressure: 7 to 14 kg/cm²",
      "ar": "السعة: 5.1 إلى 17 م³/دقيقة | الضغط: 7 إلى 14 كجم/سم²"
    },
    "image": "/AIR & GAS SOLUTIONS/Diesel Engine Driven Portable Screw Compressor.png"
  },
  {
    "id": "reciprocating-horizontal-balanced-opposed-air-compressor",
    "slug": "reciprocating-horizontal-balanced-opposed-air-compressor",
    "partner": "kirloskar-pneumatic",
    "solution": "air-gas-solutions",
    "category": "reciprocating",
    "tag": "KIRLOSKAR PNEUMATIC",
    "title": {
      "en": "Reciprocating Horizontal Balanced Opposed Air Compressor",
      "ar": "ضاغط الهواء الترددي الأفقي المتوازن المتقابل"
    },
    "desc": {
      "en": "Engineered for precision and efficiency, our reciprocating horizontal balanced opposed air compressors offer reliable performance in a variety of industrial applications. Designed to minimise power consumption and maintain low operating temperatures, these compressors ensure consistent and effective operation.",
      "ar": "مصممة للدقة والكفاءة، توفر ضواغط الهواء الترددية الأفقية المتوازنة والمتقابلة أداءً موثوقاً في مجموعة متنوعة من التطبيقات الصناعية مع تقليل استهلاك الطاقة والحفاظ على درجات حرارة تشغيل منخفضة."
    },
    "specs": {
      "en": "Capacity: 32 to 4200 cfm | Pressure: 1 to 400 kg/cm² (g)",
      "ar": "السعة: 32 إلى 4200 قدم مكعب/دقيقة | الضغط: 1 إلى 400 كجم/سم²"
    },
    "image": "/AIR & GAS SOLUTIONS/Reciprocating Horizontal Balanced Opposed Air Compressor.png"
  },
  {
    "id": "reciprocating-gas-compressor",
    "slug": "reciprocating-gas-compressor",
    "partner": "kirloskar-pneumatic",
    "solution": "air-gas-solutions",
    "category": "reciprocating",
    "tag": "KIRLOSKAR PNEUMATIC",
    "title": {
      "en": "Reciprocating Gas Compressor",
      "ar": "ضاغط الغاز الترددي"
    },
    "desc": {
      "en": "Our reciprocating gas compressors are built to handle the demanding needs of gas compression with exceptional reliability. These compressors deliver stable performance while maintaining efficiency across various pressures and capacities, making them ideal for a range of gas handling applications.",
      "ar": "تم بناء ضواغط الغاز الترددية للتعامل مع الاحتياجات الصعبة لضغط الغاز بموثوقية استثنائية وأداء مستقر مع الحفاظ على الكفاءة عبر مختلف الضغوط والسعات."
    },
    "specs": {
      "en": "Capacity: Up to 11,000 m³/hr | Pressure: Up to 400 kg/cm² (g)",
      "ar": "السعة: حتى 11,000 م³/ساعة | الضغط: حتى 400 كجم/سم²"
    },
    "image": "/AIR & GAS SOLUTIONS/Reciprocating Gas Compressor.png"
  },
  {
    "id": "reciprocating-gas-compressor-packages",
    "slug": "reciprocating-gas-compressor-packages",
    "partner": "kirloskar-pneumatic",
    "solution": "air-gas-solutions",
    "category": "packages",
    "tag": "KIRLOSKAR PNEUMATIC",
    "title": {
      "en": "Reciprocating Gas Compressor Packages",
      "ar": "حزم ضواغط الغاز الترددية"
    },
    "desc": {
      "en": "Our ISO 13631 reciprocating gas compression packages are designed to deliver reliable, high-performance solutions for a wide range of upstream, midstream and downstream applications. Built for durability and efficiency, these systems ensure optimal gas compression, even in challenging conditions of the Oil & gas industry.",
      "ar": "صُممت حزم ضغط الغاز الترددية المتوافقة مع ISO 13631 لتقديم حلول موثوقة وعالية الأداء لمختلف تطبيقات المنبع والمصب لقطاع النفط والغاز."
    },
    "specs": {
      "en": "Pressure Range: 1 to 580 bar | Gas Flow: 50 to 6000 CFM",
      "ar": "نطاق الضغط: 1 إلى 580 بار | تدفق الغاز: 50 إلى 6000 قدم مكعب/دقيقة"
    },
    "image": "/AIR & GAS SOLUTIONS/Reciprocating Gas Compressor Packages.png"
  },
  {
    "id": "screw-compressor-packages",
    "slug": "screw-compressor-packages",
    "partner": "kirloskar-pneumatic",
    "solution": "air-gas-solutions",
    "category": "packages",
    "tag": "KIRLOSKAR PNEUMATIC",
    "title": {
      "en": "Screw Compressor Packages",
      "ar": "حزم ضواغط الغاز اللولبية"
    },
    "desc": {
      "en": "Engineered high-efficiency screw compressor packages built for heavy-duty process air and gas systems in industrial refineries, chemical plants, and manufacturing sites.",
      "ar": "حزم ضواغط لولبية مصممة هندسياً بكفاءة عالية لتطبيقات غاز العمليات والأنظمة الصناعية الحرجة في مصافي التكرير والمصانع الكيميائية."
    },
    "specs": {
      "en": "Custom engineered API compliant skid packages",
      "ar": "حزم مخصصة ومبنية هندسياً وفق أعلى معايير الجودة وAPI"
    },
    "image": "/AIR & GAS SOLUTIONS/Screw Compressor Packages.png"
  },
  {
    "id": "turbolev-kcm",
    "slug": "turbolev-kcm",
    "partner": "kirloskar-chillers",
    "solution": "refrigeration-hvac-solutions",
    "category": "centrifugal-chillers",
    "tag": "KIRLOSKAR CHILLERS",
    "title": {
      "en": "TURBOLEV - KCM",
      "ar": "TURBOLEV - KCM"
    },
    "desc": {
      "en": "Kirloskar TURBOLEV® series of chillers uses the principle of magnetic levitation on application of an electric field, adapted to suit the chiller application.",
      "ar": "تستخدم سلسلة مبردات كيرلوسكار TURBOLEV® مبدأ الرفع المغناطيسي عند تطبيق مجال كهربائي، وتم تكييفها لتناسب تطبيقات التبريد."
    },
    "specs": {
      "en": "",
      "ar": ""
    },
    "image": "/PRODUCTS/KIRLOSKAR CHILLERS/TURBOLEV  - KCM.jpg"
  },
  {
    "id": "turbolev-ksm-kdm",
    "slug": "turbolev-ksm-kdm",
    "partner": "kirloskar-chillers",
    "solution": "refrigeration-hvac-solutions",
    "category": "centrifugal-chillers",
    "tag": "KIRLOSKAR CHILLERS",
    "title": {
      "en": "TURBOLEV - KSM / KDM",
      "ar": "TURBOLEV - KSM / KDM"
    },
    "desc": {
      "en": "Kirloskar TURBOLEV® series of chillers uses the principle of magnetic levitation on application of an electric field, adapted to suit the chiller application.",
      "ar": "تستخدم سلسلة مبردات كيرلوسكار TURBOLEV® مبدأ الرفع المغناطيسي عند تطبيق مجال كهربائي، وتم تكييفها لتناسب تطبيقات التبريد."
    },
    "specs": {
      "en": "",
      "ar": ""
    },
    "image": "/PRODUCTS/KIRLOSKAR CHILLERS/TURBOLEV - KSM - KDM.png"
  },
  {
    "id": "water-cooled-screw-chiller",
    "slug": "water-cooled-screw-chiller",
    "partner": "kirloskar-chillers",
    "solution": "refrigeration-hvac-solutions",
    "category": "screw-chillers",
    "tag": "KIRLOSKAR CHILLERS",
    "title": {
      "en": "WATER COOLED SCREW CHILLER",
      "ar": "WATER COOLED SCREW CHILLER"
    },
    "desc": {
      "en": "The PRODIGY® Series® Screw Chillers are manufactured at our state-of-the-art manufacturing facility which ensures product of world class quality. Water cooled screw chillers are certified under AHRI 500/590 certification program.",
      "ar": "يتم تصنيع مبردات PRODIGY® Series® اللولبية في منشأتنا التصنيعية المتطورة لضمان منتج بجودة عالمية. مبردات المياه اللولبية معتمدة بموجب برنامج شهادات AHRI 500/590."
    },
    "specs": {
      "en": "",
      "ar": ""
    },
    "image": "/PRODUCTS/KIRLOSKAR CHILLERS/Water Cooled Screw Chiller.jpg"
  },
  {
    "id": "air-cooled-screw-chiller",
    "slug": "air-cooled-screw-chiller",
    "partner": "kirloskar-chillers",
    "solution": "refrigeration-hvac-solutions",
    "category": "screw-chillers",
    "tag": "KIRLOSKAR CHILLERS",
    "title": {
      "en": "AIR COOLED SCREW CHILLER",
      "ar": "AIR COOLED SCREW CHILLER"
    },
    "desc": {
      "en": "The PRODIGY® Series® Screw Chillers are manufactured at our state-of-the-art manufacturing facility which ensures product of world class quality. Air cooled screw chillers are certified under AHRI 500/590 certification program.",
      "ar": "يتم تصنيع مبردات PRODIGY® Series® اللولبية في منشأتنا التصنيعية المتطورة لضمان منتج بجودة عالمية. مبردات الهواء اللولبية معتمدة بموجب برنامج شهادات AHRI 500/590."
    },
    "specs": {
      "en": "",
      "ar": ""
    },
    "image": "/PRODUCTS/KIRLOSKAR CHILLERS/Air Cooled Screw Chiller.png"
  },
  {
    "id": "data-center-chillers",
    "slug": "data-center-chillers",
    "partner": "kirloskar-chillers",
    "solution": "refrigeration-hvac-solutions",
    "category": "mission-critical",
    "tag": "KIRLOSKAR CHILLERS",
    "title": {
      "en": "DATA CENTER CHILLERS",
      "ar": "DATA CENTER CHILLERS"
    },
    "desc": {
      "en": "The Kirloskar Data Centre Chiller range is engineered to provide 24x7 reliability and energy efficiency to safeguard your critical IT infrastructure and ensure maximum uptime. Specifically designed to deliver high leaving chilled water temperatures from 16 to 23 deg. C as per DC requirements, with 6 to 10 deg. C temperature difference.",
      "ar": "تم تصميم مجموعة مبردات كيرلوسكار لمراكز البيانات لتوفير موثوقية وكفاءة طاقة على مدار الساعة طوال أيام الأسبوع لحماية بنيتك التحتية لتكنولوجيا المعلومات وضمان أقصى وقت تشغيل. مصممة لتوفير درجات حرارة مياه مثلجة خارجة من 16 إلى 23 درجة مئوية حسب متطلبات مراكز البيانات مع فارق درجات حرارة من 6 إلى 10 درجات مئوية."
    },
    "specs": {
      "en": "",
      "ar": ""
    },
    "image": "/PRODUCTS/KIRLOSKAR CHILLERS/DATA CENTER CHILLERS.png"
  },
  {
    "id": "air-to-water-industrial-heat-pumps",
    "slug": "air-to-water-industrial-heat-pumps",
    "partner": "kirloskar-chillers",
    "solution": "refrigeration-hvac-solutions",
    "category": "heat-pumps",
    "tag": "KIRLOSKAR CHILLERS",
    "title": {
      "en": "Air-to-Water Industrial Heat Pumps",
      "ar": "مضخات حرارية صناعية من الهواء إلى الماء"
    },
    "desc": {
      "en": "Eco-friendly heat pumps extracting ambient thermal energy to produce sanitary and process hot water up to 80°C with significant reduction in carbon footprint.",
      "ar": "مضخات حرارية صديقة للبيئة تستخلص الطاقة الحرارية المحيطة لإنتاج مياه ساخنة للعمليات الصناعية حتى 80 مئوية مع خفض ملحوظ للانبعاثات."
    },
    "specs": {
      "en": "",
      "ar": ""
    },
    "image": "/PRODUCTS/KIRLOSKAR CHILLERS/Air to Water Heat Pumps.jpg"
  },
  {
    "id": "water-to-water-heat-recovery-heat-pumps",
    "slug": "water-to-water-heat-recovery-heat-pumps",
    "partner": "kirloskar-chillers",
    "solution": "refrigeration-hvac-solutions",
    "category": "heat-pumps",
    "tag": "KIRLOSKAR CHILLERS",
    "title": {
      "en": "Water-to-Water Heat Recovery Heat Pumps",
      "ar": "مضخات حرارية لاسترداد الطاقة من الماء إلى الماء"
    },
    "desc": {
      "en": "Simultaneous heating and cooling heat pumps recovering waste heat from condenser loops to provide energy-neutral process hot water and chilled water.",
      "ar": "مضخات حرارية للتبريد والتدفئة المتزامنة تسترد الحرارة المهدرة من دوائر المكثف لتوفير مياه ساخنة ومياه مثلجة بكفاءة طاقة قصوى."
    },
    "specs": {
      "en": "",
      "ar": ""
    },
    "image": "/PRODUCTS/KIRLOSKAR CHILLERS/Water to Water Heat Pumps.jpg"
  },
  {
    "id": "anybus-protocol-converters-gateways",
    "slug": "anybus-protocol-converters-gateways",
    "partner": "hms-networks",
    "solution": "automation-control",
    "category": "gateways",
    "tag": "HMS NETWORKS",
    "title": {
      "en": "Anybus Protocol Converters & Gateways",
      "ar": "بوابات ومحولات البروتوكولات Anybus"
    },
    "desc": {
      "en": "Multi-network protocol converters, embedded communication interfaces, and wireless adapters connecting any device to any industrial fieldbus or Industrial Ethernet network.",
      "ar": "محولات بروتوكولات متعددة الشبكات وواجهات اتصال مدمجة ومحولات لاسلكية لربط أي جهاز بأي شبكة صناعية أو إيثرنت صناعي."
    },
    "specs": {
      "en": "Protocol Conversion | Multi-Network Bridging | Wireless",
      "ar": "تحويل البروتوكولات | ربط متعدد الشبكات | اتصال لاسلكي"
    },
    "image": "/AUTOMATION CONTROL/HMS/Anyway By HMS.png"
  },
  {
    "id": "ewon-industrial-remote-solutions-routers",
    "slug": "ewon-industrial-remote-solutions-routers",
    "partner": "hms-networks",
    "solution": "automation-control",
    "category": "remote-access",
    "tag": "HMS NETWORKS",
    "title": {
      "en": "Ewon Industrial Remote Solutions & Routers",
      "ar": "حلول الوصول عن بعد وراوترات Ewon الصناعية"
    },
    "desc": {
      "en": "Secure cloud-managed industrial VPN routers and edge gateways enabling machine builders and plant engineers to remotely access, troubleshoot, and monitor equipment globally.",
      "ar": "راوترات VPN صناعية آمنة ومُدارة سحابياً وبوابات حافة تمكن مصنعي الآلات والمهندسين من الوصول واستكشاف الأخطاء ومراقبة المعدات عن بعد."
    },
    "specs": {
      "en": "Secure Cloud VPN | Talk2M Ecosystem | Live Telemetry",
      "ar": "شبكة VPN سحابية آمنة | منظومة Talk2M | نقل بيانات حي"
    },
    "image": "/AUTOMATION CONTROL/HMS/Ewon By HMS.png"
  },
  {
    "id": "intesis-building-hvac-integration-gateways",
    "slug": "intesis-building-hvac-integration-gateways",
    "partner": "hms-networks",
    "solution": "automation-control",
    "category": "gateways",
    "tag": "HMS NETWORKS",
    "title": {
      "en": "Intesis Building & HVAC Integration Gateways",
      "ar": "بوابات تكامل أنظمة المباني والتكييف Intesis"
    },
    "desc": {
      "en": "Specialized protocol gateways for Building Management Systems (BMS) and HVAC units, bridging BACnet, Modbus, KNX, and DALI protocols seamlessly.",
      "ar": "بوابات تكامل متخصصة لأنظمة إدارة المباني (BMS) ووحدات التكييف والتهوية، تربط بروتوكولات BACnet و Modbus و KNX و DALI بسلاسة."
    },
    "specs": {
      "en": "BMS & HVAC Gateways | BACnet, Modbus & KNX | AC Interfaces",
      "ar": "بوابات BMS والتكييف | بروتوكولات BACnet و Modbus | واجهات التكييف"
    },
    "image": "/AUTOMATION CONTROL/HMS/Intesis By HMS.jpg"
  },
  {
    "id": "ixxat-can-fieldbus-vehicle-networks",
    "slug": "ixxat-can-fieldbus-vehicle-networks",
    "partner": "hms-networks",
    "solution": "automation-control",
    "category": "fieldbus",
    "tag": "HMS NETWORKS",
    "title": {
      "en": "Ixxat CAN, Fieldbus & Vehicle Networks",
      "ar": "حلول شبكات CAN وحافلات الميدان Ixxat"
    },
    "desc": {
      "en": "Robust PC interfaces, gateways, repeaters, and safety solutions for CAN, CAN FD, EtherCAT, and demanding automotive test networks.",
      "ar": "واجهات حواسب قوية وبوابات ومكررات إشارة وحلول أمان لشبكات CAN و CAN FD و EtherCAT واختبارات المركبات المتقدمة."
    },
    "specs": {
      "en": "CAN & CAN FD Interfaces | EtherCAT Bridges | Safety & Automotive",
      "ar": "واجهات CAN و CAN FD | جسور EtherCAT | سلامة واختبار مركبات"
    },
    "image": "/AUTOMATION CONTROL/HMS/Ixxat by HMS.jpg"
  },
  {
    "id": "n-tron-rugged-industrial-ethernet-switches",
    "slug": "n-tron-rugged-industrial-ethernet-switches",
    "partner": "hms-networks",
    "solution": "automation-control",
    "category": "switches",
    "tag": "HMS NETWORKS",
    "title": {
      "en": "N-Tron Rugged Industrial Ethernet Switches",
      "ar": "مفاتيح إيثرنت صناعية عالية التحمل N-Tron"
    },
    "desc": {
      "en": "Heavy-duty unmanaged, monitored, and managed Industrial Ethernet switches engineered to withstand high vibration, extreme temperatures, and harsh electrical noise.",
      "ar": "مفاتيح إيثرنت صناعية مدارة وغير مدارة ومراقبة مصممة لتحمل الاهتزازات العالية ودرجات الحرارة القصوى والضوضاء الكهربائية."
    },
    "specs": {
      "en": "Managed & Unmanaged Switches | Extreme Environment Rated",
      "ar": "مفاتيح مدارة وغير مدارة | مصنفة للظروف البيئية القاسية"
    },
    "image": "/AUTOMATION CONTROL/HMS/Ntron By HMS.png"
  },
  {
    "id": "peak-system-can-lin-bus-interfaces",
    "slug": "peak-system-can-lin-bus-interfaces",
    "partner": "hms-networks",
    "solution": "automation-control",
    "category": "fieldbus",
    "tag": "HMS NETWORKS",
    "title": {
      "en": "PEAK-System CAN & LIN Bus Interfaces",
      "ar": "واجهات وأجهزة تشخيص النواقل PEAK-System"
    },
    "desc": {
      "en": "Advanced PC communication hardware, bus adapters, diagnostic software, and data logging modules for industrial CAN and LIN network protocols.",
      "ar": "أجهزة اتصال متقدمة ومحولات نواقل وبرمجيات تشخيص ووحدات تسجيل بيانات لبروتوكولات CAN و LIN الصناعية."
    },
    "specs": {
      "en": "CAN & LIN Adapters | Bus Diagnostic Hardware | Protocol Analysis",
      "ar": "محولات CAN و LIN | أجهزة تشخيص النواقل | تحليل البروتوكولات"
    },
    "image": "/AUTOMATION CONTROL/HMS/PEAK by HMS.jpg"
  },
  {
    "id": "red-lion-edge-controllers-visual-hmis",
    "slug": "red-lion-edge-controllers-visual-hmis",
    "partner": "hms-networks",
    "solution": "automation-control",
    "category": "switches",
    "tag": "HMS NETWORKS",
    "title": {
      "en": "Red Lion Edge Controllers & Visual HMIs",
      "ar": "وحدات التحكم الطرفي وشاشات HMI من Red Lion"
    },
    "desc": {
      "en": "High-performance operator interface panels, panel meters, and industrial edge controllers enabling real-time data visualization, protocol conversion, and plant monitoring.",
      "ar": "لوحات تشغيل ومقاييس صناعية ووحدات تحكم حافة تتيح التصور البصري المباشر للبيانات وتحويل البروتوكولات ومراقبة المصانع."
    },
    "specs": {
      "en": "Industrial HMIs & Edge Control | Data Acquisition | Crimson® Software",
      "ar": "شاشات HMI صناعية وتحكم طرفي | جمع البيانات | برمجية Crimson®"
    },
    "image": "/AUTOMATION CONTROL/HMS/Redlion By HMS.png"
  },
  {
    "id": "ethernet-ip-to-modbus-serial-4-port-gateway-plx31-eip-mbs4",
    "slug": "ethernet-ip-to-modbus-serial-4-port-gateway-plx31-eip-mbs4",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "gateways",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "EtherNet/IP™ to Modbus® Serial 4-Port Gateway (PLX31-EIP-MBS4)",
      "ar": "بوابة إيثرنت/آي بي إلى مودباص تسلسلي 4 منافذ (PLX31-EIP-MBS4)"
    },
    "desc": {
      "en": "High-density stand-alone protocol gateway featuring 4 isolated serial channels enabling high-speed communication between EtherNet/IP PACs and up to 4 separate Modbus sub-networks.",
      "ar": "بوابة بروتوكولات مستقلة عالية الكثافة مزودة بـ 4 قنوات تسلسلية معزولة تتيح الاتصال عالي السرعة بين أجهزة EtherNet/IP PAC وما يصل إلى 4 شبكات Modbus فرعية منفصلة."
    },
    "specs": {
      "en": "4 Isolated Serial Ports | RS-232/422/485 | Modbus Master & Slave",
      "ar": "4 منافذ تسلسلية معزولة | RS-232/422/485 | رئيسي وتابع Modbus"
    },
    "image": "/AUTOMATION CONTROL/PROSOFT/GATEWAYS/EtherNet-IP to Modbus Serial 4 Port PLX31-EIP-MBS4.png"
  },
  {
    "id": "ethernet-ip-to-modbus-serial-gateway-plx31-eip-mbs",
    "slug": "ethernet-ip-to-modbus-serial-gateway-plx31-eip-mbs",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "gateways",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "EtherNet/IP™ to Modbus® Serial Gateway (PLX31-EIP-MBS)",
      "ar": "بوابة إيثرنت/آي بي إلى مودباص تسلسلي (PLX31-EIP-MBS)"
    },
    "desc": {
      "en": "Compact DIN-rail gateway interconnecting EtherNet/IP controllers with legacy Modbus RTU/ASCII serial devices, delivering bi-directional data flow with zero code modification.",
      "ar": "بوابة مدمجة لتركيب قضيب DIN تربط أجهزة التحكم EtherNet/IP بأجهزة Modbus RTU/ASCII التسلسلية مع نقل ثنائي الاتجاه للبيانات."
    },
    "specs": {
      "en": "Single Serial Port | Modbus Master / Slave | High-Speed Throughput",
      "ar": "منفذ تسلسلي واحد | رئيسي وتابع Modbus | سرعة نقل فائقة"
    },
    "image": "/AUTOMATION CONTROL/PROSOFT/GATEWAYS/EtherNet-IP to Modbus Serial PLX31-EIP-MBS.png"
  },
  {
    "id": "ethernet-ip-to-modbus-tcp-ip-gateway-plx31-eip-mbtcp",
    "slug": "ethernet-ip-to-modbus-tcp-ip-gateway-plx31-eip-mbtcp",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "gateways",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "EtherNet/IP™ to Modbus® TCP/IP Gateway (PLX31-EIP-MBTCP)",
      "ar": "بوابة إيثرنت/آي بي إلى مودباص TCP/IP (PLX31-EIP-MBTCP)"
    },
    "desc": {
      "en": "Dual-port Ethernet gateway providing deterministic bridging and subnet isolation between EtherNet/IP networks and Modbus TCP/IP servers and clients.",
      "ar": "بوابة إيثرنت بمنفذين توفر ربطاً موثوقاً وعزل شبكات فرعية بين شبكات EtherNet/IP وخوادم وعملاء Modbus TCP/IP."
    },
    "specs": {
      "en": "Dual Isolated Ethernet Subnets | Client & Server Support | High Speed",
      "ar": "شبكتان فرعيتان معزولتان | دعم العميل والخادم | سرعة عالية"
    },
    "image": "/AUTOMATION CONTROL/PROSOFT/GATEWAYS/EtherNet-IP to Modbus TCP-IP PLX31-EIP-MBTCP.png"
  },
  {
    "id": "ethernet-ip-to-reliance-automax-gateway-an-x-amx",
    "slug": "ethernet-ip-to-reliance-automax-gateway-an-x-amx",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "gateways",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "EtherNet/IP™ to Reliance AutoMax™ Gateway (AN-X-AMX)",
      "ar": "بوابة إيثرنت/آي بي إلى ريلاينس أوتوماكس (AN-X-AMX)"
    },
    "desc": {
      "en": "Specialized migration gateway enabling ControlLogix and modern PACs to control I/O drops on legacy Reliance AutoMax DCS networks without replacing field cabling.",
      "ar": "بوابة ترحيل متخصصة تتيح لأجهزة ControlLogix وأجهزة التحكم الحديثة التحكم في وحدات I/O على شبكات Reliance AutoMax DCS القديمة دون استبدال الكابلات الميدانية."
    },
    "specs": {
      "en": "AutoMax DCS Integration | Non-CE | Phased Plant Modernization",
      "ar": "تكامل مع أنظمة AutoMax DCS | غير معتمد CE | تحديث تدريجي للمصنع"
    },
    "image": "/AUTOMATION CONTROL/PROSOFT/GATEWAYS/EtherNet-IP to Reliance AutoMax Gateway, non-CE AN-X-AMX.png"
  },
  {
    "id": "ethernet-ip-to-siemens-industrial-ethernet-plx31-eip-sie",
    "slug": "ethernet-ip-to-siemens-industrial-ethernet-plx31-eip-sie",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "gateways",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "EtherNet/IP™ to Siemens® Industrial Ethernet (PLX31-EIP-SIE)",
      "ar": "بوابة إيثرنت/آي بي إلى إيثرنت سيمنز الصناعي (PLX31-EIP-SIE)"
    },
    "desc": {
      "en": "High-speed protocol converter facilitating bi-directional data exchange between Rockwell ControlLogix/CompactLogix and Siemens S7-200, S7-300, S7-400, S7-1200, and S7-1500 PLCs.",
      "ar": "محول بروتوكولات عالي السرعة يتيح تبادل البيانات ثنائي الاتجاه بين أجهزة تحكم روكويل وسيمنز S7-200 و S7-300 و S7-400 و S7-1200 و S7-1500."
    },
    "specs": {
      "en": "Direct Siemens S7 Communication | Client & Server Modes | DIN-Rail Mount",
      "ar": "اتصال مباشر مع سيمنز S7 | أوضاع العميل والخادم | تركيب DIN-Rail"
    },
    "image": "/AUTOMATION CONTROL/PROSOFT/GATEWAYS/EtherNet-IP to Siemens Industrial Ethernet PLX31-EIP-SIE.png"
  },
  {
    "id": "ethernet-ip-to-ti-remote-i-o-master-gateway",
    "slug": "ethernet-ip-to-ti-remote-i-o-master-gateway",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "gateways",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "EtherNet/IP™ to TI® Remote I/O Master Gateway",
      "ar": "بوابة إيثرنت/آي بي إلى وحدات الإدخال/الإخراج تكساس إنسترومنتس"
    },
    "desc": {
      "en": "Enables modern Rockwell Automation ControlLogix PACs to act as master controllers over legacy Texas Instruments 505 / 545 / 555 Remote I/O bases.",
      "ar": "تمكن أجهزة ControlLogix الحديثة من العمل كوحدة تحكم رئيسية على قواعد وحدات الإدخال والإخراج البعيدة Texas Instruments 505/545/555."
    },
    "specs": {
      "en": "TI 505 RIO Emulation | Zero Rewiring Required | Non-CE Modernization",
      "ar": "محاكاة TI 505 RIO | لا يتطلب إعادة توصيل الكابلات | تحديث غير معتمد CE"
    },
    "image": "/AUTOMATION CONTROL/PROSOFT/GATEWAYS/EtherNet-IP to Texas Instruments Remote I-O Master Gateway, non-CE.jpg"
  },
  {
    "id": "ethernet-ip-to-ge-genius-i-o-gateway-an-x3-geni",
    "slug": "ethernet-ip-to-ge-genius-i-o-gateway-an-x3-geni",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "gateways",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "EtherNet/IP™ to GE Genius™ I/O Gateway (AN-X3-GENI)",
      "ar": "بوابة إيثرنت/آي بي إلى وحدات جنرال إلكتريك جينيوس (AN-X3-GENI)"
    },
    "desc": {
      "en": "Enables smooth phased upgrades by allowing EtherNet/IP PACs to communicate directly with legacy GE Fanuc Series 90-70 / 90-30 Genius I/O blocks.",
      "ar": "تتيح التحديث التدريجي السلس من خلال تمكين أجهزة EtherNet/IP PAC من الاتصال مباشرة بوحدات GE Genius I/O القديمة."
    },
    "specs": {
      "en": "GE Genius Bus Emulation | Phased DCS Migration | Drop-In Compatibility",
      "ar": "محاكاة ناقل GE Genius | ترحيل تدريجي لأنظمة التحكم | توافق فوري"
    },
    "image": "/AUTOMATION CONTROL/PROSOFT/GATEWAYS/EtherNet-IP™ to GE Genius™ I-O Gateway AN-X3-GENI.jpg"
  },
  {
    "id": "ethernet-ip-to-remote-i-o-or-dh-gateway-an-x4-ab-dhrio",
    "slug": "ethernet-ip-to-remote-i-o-or-dh-gateway-an-x4-ab-dhrio",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "gateways",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "EtherNet/IP™ to Remote I/O or DH+™ Gateway (AN-X4-AB-DHRIO)",
      "ar": "بوابة إيثرنت/آي بي إلى ريموت آي/أو أو داتا هايواي بلس (AN-X4-AB-DHRIO)"
    },
    "desc": {
      "en": "Modernization gateway connecting modern EtherNet/IP PACs to legacy Allen-Bradley Data Highway Plus (DH+) and Remote I/O (RIO) networks for PLC-5 and SLC 500 replacements.",
      "ar": "بوابة تحديث تربط أجهزة EtherNet/IP PAC الحديثة بشبكات Allen-Bradley Data Highway Plus (DH+) ووحدات الإدخال والإخراج البعيدة (RIO) لاستبدال PLC-5 و SLC 500."
    },
    "specs": {
      "en": "Allen-Bradley DH+ & RIO | PLC-5 & SLC Migration | Fast Commissioning",
      "ar": "شبكات ألن برادلي DH+ و RIO | ترحيل وتحديث PLC-5 و SLC | تدشين سريع"
    },
    "image": "/AUTOMATION CONTROL/PROSOFT/GATEWAYS/EtherNet-IP™ to Remote I-O or DH+ Gateway AN-X4-AB-DHRIO.png"
  },
  {
    "id": "ethernet-ip-to-modicon-s908-gateway-an-x3-mod",
    "slug": "ethernet-ip-to-modicon-s908-gateway-an-x3-mod",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "gateways",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "EtherNet/IP™ to Modicon™ S908 Gateway (AN-X3-MOD)",
      "ar": "بوابة إيثرنت/آي بي إلى موديكون S908 (AN-X3-MOD)"
    },
    "desc": {
      "en": "Allows ControlLogix and modern PACs to control existing Modicon 800-series remote I/O on S908 coaxial networks without rewiring field terminations.",
      "ar": "تتيح لأجهزة ControlLogix التحكم في وحدات I/O لسلسلة Modicon 800 القديمة على شبكات S908 المحورية دون إعادة توصيل الأطراف الميدانية."
    },
    "specs": {
      "en": "Modicon S908 RIO Coax Support | Seamless Controller Modernization",
      "ar": "دعم كابلات Modicon S908 المحورية | تحديث سلس ومباشر لوحدات التحكم"
    },
    "image": "/AUTOMATION CONTROL/PROSOFT/GATEWAYS/EtherNetIP™ to Modicon™ S908 Gateway AN-X3-MOD.png"
  },
  {
    "id": "industrial-edge-gateway-elx3",
    "slug": "industrial-edge-gateway-elx3",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "gateways",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "Industrial Edge Gateway (ELX3)",
      "ar": "بوابة الحوسبة الطرفية الصناعية (ELX3)"
    },
    "desc": {
      "en": "Containerized Linux edge gateway bridging OT control systems with enterprise IT, cloud platforms, and MQTT/Sparkplug architectures with enterprise cybersecurity.",
      "ar": "بوابة حوسبة طرفية بنظام لينكس تربط أنظمة التحكم التشغيلية OT بالأنظمة السحابية ومنصات MQTT مع أمان سيبراني صناعي متقدم."
    },
    "specs": {
      "en": "Linux Container Engine | MQTT & Sparkplug B | OT-to-Cloud Data Bridge",
      "ar": "بيئة حاويات لينكس | دعم MQTT و Sparkplug B | جسر بيانات OT إلى السحابة"
    },
    "image": "/AUTOMATION CONTROL/PROSOFT/GATEWAYS/Industrial Edge Gateway ELX3.png"
  },
  {
    "id": "isolated-8-channel-hart-analog-input-module-plx51-hart-8i",
    "slug": "isolated-8-channel-hart-analog-input-module-plx51-hart-8i",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "gateways",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "Isolated 8-Channel HART® Analog Input Module (PLX51-HART-8I)",
      "ar": "وحدة إدخال تناظري هارت معزولة 8 قنوات (PLX51-HART-8I)"
    },
    "desc": {
      "en": "High-precision standalone input module capturing process variables and HART instrument diagnostic data directly into EtherNet/IP, Modbus TCP, and DNP3 controllers.",
      "ar": "وحدة إدخال تناظرية دقيقة تلتقط متغيرات العمليات وبيانات تشخيص أجهزة القياس HART مباشرة إلى أجهزة التحكم EtherNet/IP و Modbus TCP."
    },
    "specs": {
      "en": "8 Isolated Channels | HART 5, 6 & 7 | EtherNet/IP, Modbus TCP & DNP3",
      "ar": "8 قنوات معزولة | دعم HART 5 و 6 و 7 | بروتوكولات EtherNet/IP و Modbus TCP"
    },
    "image": "/AUTOMATION CONTROL/PROSOFT/GATEWAYS/Isolated 8-Channel HART® Input Module PLX51-HART-8I.png"
  },
  {
    "id": "industrial-hotspot-802-11abgn-rlx2-ihnf",
    "slug": "industrial-hotspot-802-11abgn-rlx2-ihnf",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "wireless",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "Industrial Hotspot 802.11abgn (RLX2-IHNF)",
      "ar": "نقطة اتصال لاسلكية صناعية 802.11abgn (RLX2-IHNF)"
    },
    "desc": {
      "en": "High-speed industrial wireless access point and bridge designed for heavy vibration, extreme operating temperatures, and mobile crane/AGV connectivity.",
      "ar": "نقطة وصول وجسر لاسلكي صناعي عالي السرعة مصمم لتحمل الاهتزازات الشديدة ودرجات الحرارة القصوى واتصالات الرافعات والآليات المتحركة."
    },
    "specs": {
      "en": "802.11abgn MIMO | Ultra-Fast Roaming (<10ms) | IP66 / NEMA 4X Rated",
      "ar": "معيار 802.11abgn MIMO | تجوال فائق السرعة (<10ms) | تصنيف IP66/NEMA 4X"
    },
    "image": "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "industrial-cellular-plus-gateway-icx35-hwc",
    "slug": "industrial-cellular-plus-gateway-icx35-hwc",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "wireless",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "Industrial Cellular Plus Gateway (ICX35-HWC)",
      "ar": "بوابة خلوية صناعية متطورة (ICX35-HWC)"
    },
    "desc": {
      "en": "Rugged 4G LTE cellular gateway providing secure, always-on telemetry, SMS alarming, and remote diagnostics for distributed wellheads and remote pump stations.",
      "ar": "بوابة خلوية 4G LTE متينة توفر نقل بيانات آمن ومستمر وتنبيهات SMS وتشخيص عن بعد لرؤوس الآبار ومحطات الضخ البعيدة."
    },
    "specs": {
      "en": "4G LTE Multi-Carrier | Dual SIM Failover | OpenVPN & IPsec Security",
      "ar": "دعم 4G LTE متعدد الشبكات | شريحتا اتصال للتبديل التلقائي | أمان OpenVPN و IPsec"
    },
    "image": "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "prosoft-connect-cloud-remote-access-gateway-plx35-nb2",
    "slug": "prosoft-connect-cloud-remote-access-gateway-plx35-nb2",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "remote-access",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "ProSoft Connect™ Cloud Remote Access Gateway (PLX35-NB2)",
      "ar": "بوابة الوصول عن بعد السحابية ProSoft Connect (PLX35-NB2)"
    },
    "desc": {
      "en": "Zero-configuration cloud VPN bridge allowing automation engineers to remotely troubleshoot PLCs and HMIs from anywhere without maintaining complex IT firewall rules.",
      "ar": "جسر VPN سحابي دون الحاجة لإعدادات معقدة يتيح للمهندسين استكشاف أخطاء PLC و HMI عن بعد دون اختراق جدران الحماية للشركات."
    },
    "specs": {
      "en": "EasyConnect Architecture | 256-Bit Encrypted Tunnel | No Software Install Required",
      "ar": "بنية EasyConnect السحابية | تشفير 256 بت | لا يتطلب تثبيت برامج"
    },
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "controllogix-modbus-serial-in-chassis-module-mvi56e-mcm",
    "slug": "controllogix-modbus-serial-in-chassis-module-mvi56e-mcm",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "in-chassis",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "ControlLogix® Modbus® Serial In-Chassis Module (MVI56E-MCM)",
      "ar": "وحدة مودباص تسلسلية مدمجة لهيكل ControlLogix (MVI56E-MCM)"
    },
    "desc": {
      "en": "High-performance in-chassis communication module adding dual independent Modbus master/slave serial ports directly onto the ControlLogix 1756 backplane.",
      "ar": "وحدة اتصال مدمجة في الهيكل تضيف منفذي مودباص تسلسليين مستقلين مباشرة على اللوحة الخلفية لأجهزة ControlLogix 1756."
    },
    "specs": {
      "en": "Direct 1756 Backplane Mount | Dual Serial Channels | CIP Routing & Diagnostics",
      "ar": "تركيب مباشر على ناقل 1756 | قناتان تسلسليتان | توجيه وتشخيص عبر CIP"
    },
    "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "compactlogix-profibus-dp-master-module-ilx34-pbm",
    "slug": "compactlogix-profibus-dp-master-module-ilx34-pbm",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "in-chassis",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "CompactLogix™ PROFIBUS DP Master Module (ILX34-PBM)",
      "ar": "وحدة بروفيباص رئيسية مدمجة لهيكل CompactLogix (ILX34-PBM)"
    },
    "desc": {
      "en": "In-chassis module allowing Rockwell CompactLogix PACs to communicate directly with PROFIBUS DP slave drives, sensors, and remote I/O drops up to 12 Mbps.",
      "ar": "وحدة مدمجة تتيح لأجهزة CompactLogix الاتصال المباشر مع محركات وحساسات PROFIBUS DP بسرعة تصل إلى 12 ميجابت/ثانية."
    },
    "specs": {
      "en": "CompactLogix Point I/O Form Factor | Up to 12 Mbps | Automatic Tag Generation",
      "ar": "حجم معياري Point I/O | سرعة حتى 12 ميجابت/ثانية | توليد تلقائي للرموز"
    },
    "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "prosoft-configuration-builder-pcb",
    "slug": "prosoft-configuration-builder-pcb",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "software",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "ProSoft Configuration Builder (PCB)",
      "ar": "برمجية بناء وإعداد تكوينات بروسوفت (PCB)"
    },
    "desc": {
      "en": "Comprehensive Windows-based configuration software for diagnostics, ladder logic tag generation, and firmware parameter setup across all ProSoft modules.",
      "ar": "برمجية شاملة للتشخيص وإنشاء متغيرات المنطق السلمي وإعداد معلمات البرامج الثابتة لجميع وحدات ProSoft."
    },
    "specs": {
      "en": "Graphical Parameter Editor | Live Diagnostic Telemetry | Auto Ladder Generation",
      "ar": "محرر معلمات رسومي | قياسات تشخيصية حية | توليد تلقائي لبرامج السلم"
    },
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "prosoft-wireless-designer-pwd",
    "slug": "prosoft-wireless-designer-pwd",
    "partner": "prosoft-technology",
    "solution": "automation-control",
    "category": "software",
    "tag": "PROSOFT TECHNOLOGY",
    "title": {
      "en": "ProSoft Wireless Designer (PWD)",
      "ar": "برمجية تصميم ومحاكاة الشبكات اللاسلكية (PWD)"
    },
    "desc": {
      "en": "Specialized predictive RF planning software tool that calculates line-of-sight path loss, Fresnel zone clearance, and bill of materials for industrial wireless deployments.",
      "ar": "أداة تخطيط هندسي للترددات الراديوية تحسب فقدان الإشارة ومسار الرؤية ومنطقة فرينل وقائمة المواد للمشاريع اللاسلكية الصناعية."
    },
    "specs": {
      "en": "RF Link Analysis | Fresnel Zone Calculation | Complete BOM Generation",
      "ar": "تحليل روابط التردد اللاسلكي | حساب منطقة فرينل | استخراج قائمة المواد"
    },
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "grp-gre-industrial-piping-systems",
    "slug": "grp-gre-industrial-piping-systems",
    "partner": "epp-composites",
    "solution": "non-metallic-solutions",
    "category": "piping",
    "tag": "EPP COMPOSITES",
    "title": {
      "en": "GRP & GRE Industrial Piping Systems",
      "ar": "أنظمة أنابيب GRP و GRE الصناعية"
    },
    "desc": {
      "en": "High-performance Glass Reinforced Plastic (GRP) and Glass Reinforced Epoxy (GRE) piping systems engineered for severe chemical media, high-pressure desalination, oilfield flowlines, and underground municipal utilities.",
      "ar": "أنظمة أنابيب عالية الأداء من البلاستيك المقوى بالزجاج (GRP) والإيبوكسي المقوى بالزجاج (GRE) مصممة لنقل الوسائط الكيميائية القاسية، ومحطات التحلية عالية الضغط، وخطوط حقول النفط والبلديات."
    },
    "specs": {
      "en": "Diameter: DN 25 ~ DN 4000 mm | Pressure: Up to 32 Bar | 50+ Years Service Life",
      "ar": "القطر: 25 إلى 4000 ملم | الضغط: حتى 32 بار | عمر تشغيلي يتجاوز 50 عاماً"
    },
    "image": "/PRODUCTS/EPP COMPOSITE/GRP-GRE Piping System.jpg"
  },
  {
    "id": "frp-chemical-process-equipment-storage-tanks",
    "slug": "frp-chemical-process-equipment-storage-tanks",
    "partner": "epp-composites",
    "solution": "non-metallic-solutions",
    "category": "equipment",
    "tag": "EPP COMPOSITES",
    "title": {
      "en": "FRP Chemical Process Equipment & Storage Tanks",
      "ar": "معدات العمليات الكيميائية وخزانات التخزين FRP"
    },
    "desc": {
      "en": "Custom engineered vertical and horizontal chemical storage tanks, process reaction vessels, scrubbers, chimneys, and absorption towers built with specialized vinyl ester resins for aggressive chemical containment.",
      "ar": "خزانات تخزين كيميائية رأسية وأفقية مخصصة، وأوعية مفاعلات، وأبراج غسيل غازات ومداخن مصنعة من راتنجات فينيل إستر المتطورة لاحتواء المواد الكيميائية الحارقة بأمان."
    },
    "specs": {
      "en": "Volume up to 200,000 Liters | Temp up to 180°C | ASME RTP-1 & BS 4994 Compliant",
      "ar": "سعة حتى 200,000 لتر | حرارة حتى 180°م | مطابقة لمعايير ASME RTP-1 و BS 4994"
    },
    "image": "/PRODUCTS/EPP COMPOSITE/FRP Process Equipment.jpg"
  },
  {
    "id": "gfrp-composite-lighting-utility-poles",
    "slug": "gfrp-composite-lighting-utility-poles",
    "partner": "epp-composites",
    "solution": "non-metallic-solutions",
    "category": "energy-infra",
    "tag": "EPP COMPOSITES",
    "title": {
      "en": "GFRP Composite Lighting & Utility Poles",
      "ar": "أعمدة الإنارة والمرافق المركبة من GFRP"
    },
    "desc": {
      "en": "Aesthetically designed, non-conductive, and corrosion-free Glass Fiber Reinforced Polymer (GFRP) poles engineered for coastal expressways, smart cities, commercial infrastructure, and aggressive marine atmospheres.",
      "ar": "أعمدة بوليمر مقوى بالألياف الزجاجية (GFRP) غير موصلة للكهرباء وخالية من الصدأ ومصممة بجمالية عالية للطرق السريعة الساحلية، والمدن الذكية، والبيئات البحرية المعرضة لرذاذ الملح."
    },
    "specs": {
      "en": "Passive Safety Breakaway | UV Stabilized | Zero Maintenance | 100% Rust-Proof",
      "ar": "أمان سلبي ضد الصدمات | حماية من الأشعة فوق البنفسجية | صيانة معدومة | مقاومة تامة للصدأ"
    },
    "image": "/PRODUCTS/EPP COMPOSITE/GFRP Lighting Poles.jpg"
  },
  {
    "id": "structural-pultruded-profiles-beams",
    "slug": "structural-pultruded-profiles-beams",
    "partner": "epp-composites",
    "solution": "non-metallic-solutions",
    "category": "pultrusion",
    "tag": "EPP COMPOSITES",
    "title": {
      "en": "Structural Pultruded Profiles & Beams",
      "ar": "المقاطع والكمرات الإنشائية المسحوبة بتقنية Pultrusion"
    },
    "desc": {
      "en": "Engineered composite structural sections including I-beams, H-beams, channels, angles, rectangular tubes, and solid rods offering superior strength-to-weight ratio and electrical insulation replacing heavy structural steel.",
      "ar": "مقاطع إنشائية مركبة تشمل كمرات I و H، وقنوات، وزوايا، وأنابيب مربعة توفر متانة فائقة مقارنة بالوزن مع عزل كهربائي كامل كبديل مثالي للفولاذ الإنشائي الثقيل."
    },
    "specs": {
      "en": "High Strength-to-Weight | ASTM D4385 Class 1 Fire Retardant | Non-Conductive",
      "ar": "متانة عالية مع خفة الوزن | مقاومة للحريق ASTM D4385 | عازلة تماماً للكهرباء"
    },
    "image": "/PRODUCTS/EPP COMPOSITE/Pultrusion.jpg"
  },
  {
    "id": "pultruded-walkway-gratings-industrial-handrails",
    "slug": "pultruded-walkway-gratings-industrial-handrails",
    "partner": "epp-composites",
    "solution": "non-metallic-solutions",
    "category": "pultrusion",
    "tag": "EPP COMPOSITES",
    "title": {
      "en": "Pultruded Walkway Gratings & Industrial Handrails",
      "ar": "حواجز المشاة وشبكات الأرضيات والدرابزينات المسحوبة"
    },
    "desc": {
      "en": "Heavy-duty non-slip industrial gratings, catwalk flooring, safety ladders, and handrail systems engineered for chemical process plants, offshore platforms, wastewater plants, and cooling towers.",
      "ar": "حواجز وشبكات أرضيات صناعية مانعة للانزلاق، وممرات مشاة، وسلالم أمان، وأنظمة درابزين مصممة لمصانع البتروكيماويات، والمنصات البحرية، ومحطات المعالجة، وأبراج التبريد."
    },
    "specs": {
      "en": "Anti-Slip Quartz Gritted Surface | High Load Capacity | OSHA & ANSI Compliant",
      "ar": "سطح كوارتز خشن مانع للانزلاق | قدرة تحميل عالية | مطابقة لمعايير OSHA و ANSI"
    },
    "image": "/PRODUCTS/EPP COMPOSITE/Pultrusion1.jpg"
  },
  {
    "id": "smc-compression-molded-products-meter-boxes",
    "slug": "smc-compression-molded-products-meter-boxes",
    "partner": "epp-composites",
    "solution": "non-metallic-solutions",
    "category": "molding",
    "tag": "EPP COMPOSITES",
    "title": {
      "en": "SMC Compression Molded Products & Meter Boxes",
      "ar": "منتجات القولبة بالضغط SMC وصناديق العدادات الكهربائية"
    },
    "desc": {
      "en": "High-precision Sheet Molding Compound (SMC) electrical meter enclosures, junction boxes, cable distribution cabinets, and railway components offering superior dielectric insulation and weatherproofing.",
      "ar": "صناديق عدادات ولوحات توزيع كهربائية ومكونات سكك حديدية مصنعة بمركب قولبة الصفائح (SMC) عالي الدقة، يوفر عزلاً كهربائياً ومقاومة تامة للعوامل الجوية والصدمات."
    },
    "specs": {
      "en": "IP65 / IP67 Weatherproof | UL 94 V-0 Flame Retardant | Tamper-Proof Locking",
      "ar": "حماية ضد الطقس IP65/IP67 | مثبط للهب UL 94 V-0 | إغلاق آمن ومقاوم للعبث"
    },
    "image": "/PRODUCTS/EPP COMPOSITE/SMC.jpg"
  },
  {
    "id": "thermoplastic-lined-dual-laminate-vessels",
    "slug": "thermoplastic-lined-dual-laminate-vessels",
    "partner": "epp-composites",
    "solution": "non-metallic-solutions",
    "category": "molding",
    "tag": "EPP COMPOSITES",
    "title": {
      "en": "Thermoplastic Lined & Dual-Laminate Vessels",
      "ar": "منتجات وأوعية اللدائن الحرارية والتصفيح المزدوج"
    },
    "desc": {
      "en": "Dual-laminate systems integrating PP, PVDF, ECTFE, PFA, and FEP thermoplastic liners with structural FRP backing for maximum chemical barrier protection against ultra-corrosive chemical solutions and hot acids.",
      "ar": "أنظمة تصفيح مزدوج تدمج بطانات PP و PVDF و ECTFE و PFA مع هيكل خارجي من FRP لتوفير أقصى درجات الحماية والحجز الكيميائي ضد المحاليل الحارقة والأحماض الساخنة."
    },
    "specs": {
      "en": "PVDF / ECTFE / PP Liners | Seamless Fusion Welding | High Chemical Inertness",
      "ar": "بطانات PVDF و ECTFE و PP | لحام حراري مصمت | خمول كيميائي استثنائي"
    },
    "image": "/PRODUCTS/EPP COMPOSITE/Thermoplastic Products.jpg"
  },
  {
    "id": "wind-turbine-nacelle-covers-spinner-cones",
    "slug": "wind-turbine-nacelle-covers-spinner-cones",
    "partner": "epp-composites",
    "solution": "non-metallic-solutions",
    "category": "energy-infra",
    "tag": "EPP COMPOSITES",
    "title": {
      "en": "Wind Turbine Nacelle Covers & Spinner Cones",
      "ar": "مكونات توربينات الرياح وأغطية المحركات ومخاريط الدوران"
    },
    "desc": {
      "en": "Aerodynamically optimized, lightweight composite nacelle covers, rotor spinner cones, and aerodynamic fairings manufactured with advanced vacuum infusion processes for utility-scale wind energy generators.",
      "ar": "أغطية محركات هوائية ديناميكية خفيفة الوزن، ومخاريط دوران، وأجزاء هيكلية لتوربينات الرياح مصنعة بتقنية الحقن الفراغي المتطورة لمحطات توليد الطاقة المتجددة."
    },
    "specs": {
      "en": "Aerodynamic Infusion Tech | High Fatigue Resistance | Extreme Weather Durability",
      "ar": "تقنية حقن هوائية متقدمة | مقاومة إجهاد فائقة | متانة عالية للظروف المناخية القاسية"
    },
    "image": "/PRODUCTS/EPP COMPOSITE/Wind Turbine Components.jpg"
  }
];
