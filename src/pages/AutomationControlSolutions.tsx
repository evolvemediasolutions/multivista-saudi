import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function AutomationControlSolutions() {
  const { locale, dir } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0)

  const localizedPath = (path: string) => `/${locale}${path === '/' ? '' : path}`

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const maxScroll = scrollWidth - clientWidth
      if (maxScroll > 0) {
        const progress = Math.abs(scrollLeft) / maxScroll
        setScrollProgress(Math.min(1, Math.max(0, progress)))
      }
    }
  }

  const scrollSlider = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const isRtl = dir === 'rtl'
      let offset = 340
      if (direction === 'left') {
        offset = isRtl ? 340 : -340
      } else {
        offset = isRtl ? -340 : 340
      }
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  const solutionItems = [
    {
      num: '01 / 08',
      title: {
        en: 'Programmable Controllers (PLCs)',
        ar: 'أجهزة التحكم المنطقية القابلة للبرمجة'
      },
      desc: {
        en: 'High-performance control systems engineered for demanding industrial sequencing and logic.',
        ar: 'أنظمة تحكم عالية الأداء مصممة للتسلسل المنطقي والعمليات الصناعية الدقيقة.'
      },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '02 / 08',
      title: {
        en: 'Variable Frequency Drives (VFDs)',
        ar: 'محركات التردد المتغير'
      },
      desc: {
        en: 'Intelligent motor control delivering precise torque, velocity, and energy savings.',
        ar: 'تحكم ذكي في المحركات يوفر عزم دوران دقيق وكفاءة عالية في استهلاك الطاقة.'
      },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '03 / 08',
      title: {
        en: 'Distributed I/O & RTUs',
        ar: 'وحدات الإدخال/الإخراج ووحدات التحكم الطرفية'
      },
      desc: {
        en: 'Ruggedized modular I/O and remote telemetry units built for extreme environments.',
        ar: 'وحدات إدخال وإخراج معيارية ووحدات قياس عن بعد مصممة للبيئات القاسية.'
      },
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '04 / 08',
      title: {
        en: 'Industrial Network Solutions',
        ar: 'حلول الشبكات الصناعية'
      },
      desc: {
        en: 'Deterministic communication backbones bridging OT field devices to enterprise systems.',
        ar: 'شبكات اتصالات صناعية متطورة تربط أجهزة الميدان بأنظمة المؤسسات المؤسسية.'
      },
      image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '05 / 08',
      title: {
        en: 'Condition Monitoring',
        ar: 'مراقبة حالة المعدات'
      },
      desc: {
        en: 'Real-time vibration and machine health analytics enabling predictive maintenance.',
        ar: 'تحليلات الاهتزاز وصحة المعدات في الوقت الفعلي لتمكين الصيانة التنبؤية.'
      },
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '06 / 08',
      title: {
        en: 'Industrial Computers & HMIs',
        ar: 'الحواسب الصناعية وشاشات التشغيل'
      },
      desc: {
        en: 'Sunlight-readable touchscreens and industrial computing hardware for shop floor control.',
        ar: 'شاشات لمس متطورة وأجهزة حاسوب صناعية لتحكم فعال على أرضية المصنع.'
      },
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '07 / 08',
      title: {
        en: 'Power & Circuit Protection',
        ar: 'حماية الدوائر الكهربائية والقدرة'
      },
      desc: {
        en: 'Reliable relays, contactors, and circuit protection safeguarding electrical equipment.',
        ar: 'مرحلات وقواطع دوائر موثوقة لحماية المعدات الكهربائية واللوحات الصناعية.'
      },
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '08 / 08',
      title: {
        en: 'Industrial Wireless & Remote Access',
        ar: 'الاتصالات اللاسلكية والوصول عن بعد'
      },
      desc: {
        en: 'Cybersecure cloud-ready gateways and wireless telemetry for connected plants.',
        ar: 'بوابات سحابية آمنة سيبرانياً واتصالات لاسلكية للمصانع والمنشآت المتصلة.'
      },
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
    }
  ]

  const industries = [
    {
      id: 'automotive',
      tabName: { en: 'Automotive & Assembly', ar: 'صناعة وتجميع السيارات' },
      tag: { en: 'AUTOMOTIVE & ASSEMBLY', ar: 'صناعة وتجميع السيارات' },
      title: {
        en: 'Driving Next-Gen Smart Manufacturing in Automotive',
        ar: 'قيادة التصنيع الذكي والجيل القادم في صناعة السيارات'
      },
      desc: {
        en: 'Deploying high-speed synchronized motion control, robotics integration, and deterministic EtherNet/IP networks to maximize line throughput and zero-defect quality across body, paint, and assembly shops.',
        ar: 'نشر أنظمة التحكم في الحركة المتزامنة عالية السرعة، ودمج الروبوتات، وشبكات EtherNet/IP لتعظيم إنتاجية الخطوط وضمان جودة خالية من العيوب في ورش الهيكل والطلاء والتجميع.'
      },
      features: {
        en: [
          'High-speed coordinated motion and multi-axis robotics',
          'Real-time automated traceability & MES integration',
          'Integrated functional safety controllers & light curtains',
          'Predictive vibration monitoring on stamping and welding lines'
        ],
        ar: [
          'تحكم متزامن عالي السرعة في الحركة والروبوتات متعددة المحاور',
          'تتبع آلي فوري وربط كامل مع أنظمة إدارة التصنيع (MES)',
          'وحدات تحكم مدمجة للسلامة الوظيفية وستائر أمان ضوئية',
          'مراقبة تنبؤية للاهتزازات على خطوط الكبس واللحام'
        ]
      },
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'oil-gas',
      tabName: { en: 'Oil, Gas & Petrochemical', ar: 'النفط والغاز والبتروكيماويات' },
      tag: { en: 'OIL & GAS / PETROCHEMICAL', ar: 'النفط والغاز والبتروكيماويات' },
      title: {
        en: 'Mission-Critical Control for Hazardous Environments',
        ar: 'أنظمة تحكم حرجة للبيئات الخطرة والمصنفة'
      },
      desc: {
        en: 'Delivering SIL-rated safety instrumented systems (SIS), distributed control systems (DCS), and explosion-proof telemetry architectures engineered to safeguard upstream wellheads, pipelines, and downstream refining units.',
        ar: 'توفير أنظمة أمان معتمدة بمستويات SIL، وأنظمة تحكم موزع (DCS)، وبنيات اتصال مضادة للانفجار لحماية رؤوس الآبار وخطوط الأنابيب ومجمعات التكرير.'
      },
      features: {
        en: [
          'SIL 2 & SIL 3 certified emergency shutdown (ESD) systems',
          'Solar-powered remote telemetry RTUs for remote pipelines',
          'Hazardous area Class I Div 2 / ATEX rated hardware',
          'Seamless integration with SCADA and industrial historian'
        ],
        ar: [
          'أنظمة إغلاق للطوارئ (ESD) معتمدة بمعايير SIL 2 و SIL 3',
          'وحدات RTU تعمل بالطاقة الشمسية لخطوط الأنابيب البعيدة',
          'أجهزة معتمدة للمناطق الخطرة Class I Div 2 و ATEX',
          'تكامل سلس مع أنظمة SCADA وسجلات البيانات الصناعية'
        ]
      },
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'power-energy',
      tabName: { en: 'Power & Energy Utilities', ar: 'توليد الطاقة والمرافق' },
      tag: { en: 'POWER & UTILITIES', ar: 'توليد الطاقة والمرافق' },
      title: {
        en: 'Grid-Ready Automation for Power Generation & Distribution',
        ar: 'أتمتة متوافقة مع الشبكة لتوليد الطاقة وتوزيعها'
      },
      desc: {
        en: 'Enabling intelligent turbine control, substation automation, and smart grid telemetry conforming to IEC 61850 protocols for thermal, renewable, and combined cycle utilities.',
        ar: 'تمكين التحكم الذكي في التوربينات، وأتمتة المحطات الفرعية، والقياس عن بعد للشبكات الذكية المتوافقة مع بروتوكولات IEC 61850 لمحطات الطاقة الحرارية والمتجددة.'
      },
      features: {
        en: [
          'IEC 61850 compliant substation automation switches',
          'High-availability dual redundant controller architectures',
          'Precision turbine speed governors and generator synchronization',
          'Integrated power metering and harmonic distortion monitoring'
        ],
        ar: [
          'مفاتيح أتمتة للمحطات الفرعية متوافقة مع معايير IEC 61850',
          'بنيات تحكم مزدوجة ذات جاهزية فائقة لتفادي أي انقطاع',
          'منظمات سرعة دقيقة للتوربينات ومزامنة المولدات',
          'قياس متكامل للطاقة ومراقبة التشوهات التوافقية'
        ]
      },
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'water-wastewater',
      tabName: { en: 'Water & Wastewater', ar: 'المياه ومعالجة الصرف' },
      tag: { en: 'WATER & WASTEWATER', ar: 'المياه ومعالجة الصرف' },
      title: {
        en: 'Optimizing Pumping & Treatment Networks',
        ar: 'تحسين شبكات الضخ ومعالجة المياه والصرف'
      },
      desc: {
        en: 'Implementing distributed SCADA telemetry, VFD pump energy management, and automated chemical dosing controls across municipal desalination and water treatment facilities.',
        ar: 'تنفيذ أنظمة SCADA اللاسلكية الموزعة، وإدارة طاقة مضخات VFD، والتحكم الآلي في الجرعات الكيميائية عبر محطات التحلية ومعالجة المياه.'
      },
      features: {
        en: [
          'Variable speed pump sequencing reducing kW/m³ water treated',
          'Long-range cellular & radio telemetry RTUs for remote lift stations',
          'Automated chlorine dosing and continuous turbidity analysis',
          'Comprehensive multi-station graphical SCADA dashboards'
        ],
        ar: [
          'تسلسل ذكي لمضخات VFD لتقليل استهلاك الطاقة لكل متر مكعب',
          'وحدات RTU خلوية ولاسلكية طويلة المدى لمحطات الرفع البعيدة',
          'تحكم آلي في جرعات الكلور ومراقبة مستمرة للعكارة',
          'لوحات تحكم رسومية شاملة عبر SCADA لعدة محطات'
        ]
      },
      image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'food-bev',
      tabName: { en: 'Food, Beverage & Pharma', ar: 'الأغذية والمشروبات والأدوية' },
      tag: { en: 'FOOD, BEVERAGE & PHARMA', ar: 'الأغذية والمشروبات والأدوية' },
      title: {
        en: 'Sanitary Control, Batch Compliance & Serialization',
        ar: 'التحكم الصحي، مطابقة الدفعات والترميز الدوائي'
      },
      desc: {
        en: 'Supplying 21 CFR Part 11 compliant recipe management, CIP/SIP cycle automation, and washdown-rated motion hardware ensuring hygienic food and drug safety standards.',
        ar: 'توفير إدارة الوصفات المتوافقة مع 21 CFR Part 11، وأتمتة دورات التنظيف الموضعي (CIP/SIP)، وأجهزة تحكم مقاومة للغسيل لضمان أعلى معايير السلامة الغذائية والدوائية.'
      },
      features: {
        en: [
          'ISA-88 batch control and 21 CFR Part 11 electronic records',
          'IP69K stainless steel washdown HMIs and servo drives',
          'High-speed vision inspection and product serialization',
          'CIP/SIP automated validation and cycle reporting'
        ],
        ar: [
          'تحكم بالدفعات وفق ISA-88 وسجلات إلكترونية متوافقة مع 21 CFR Part 11',
          'شاشات ومحركات سيرفو من الفولاذ المقاوم للصدأ بتصنيف IP69K',
          'فحص بصري عالي السرعة وترميز تسلسلي للمنتجات',
          'توثيق آلي وإعداد تقارير دورات التنظيف والتعقيم CIP/SIP'
        ]
      },
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'metals-mining',
      tabName: { en: 'Metals, Mining & Heavy Industry', ar: 'المعادن والتعدين والصناعات الثقيلة' },
      tag: { en: 'METALS & HEAVY INDUSTRY', ar: 'المعادن والتعدين والصناعات الثقيلة' },
      title: {
        en: 'Heavy-Duty Drive & Control Solutions for Extreme Demands',
        ar: 'حلول تحكم ومحركات فائقة التحمل للأحمال القصوى'
      },
      desc: {
        en: 'Engineered medium-voltage VFD systems, crusher torque control, and robust optical communication backbones built to withstand high dust, vibration, and thermal shocks in mining and smelting plants.',
        ar: 'أنظمة محركات تردد متوسط (MV VFD)، وتحكم متقدم في عزم الكسارات، وشبكات ألياف بصرية مصممة لتحمل الغبار الشديد والاهتزازات في مصانع التعدين والصهر.'
      },
      features: {
        en: [
          'Medium-voltage PowerFlex drive systems for large kilns & mills',
          'Conformal coating on all PCBs for dust and moisture resistance',
          'Heavy torque load sharing between multiple motors',
          'Extreme temperature rated industrial networking hardware'
        ],
        ar: [
          'أنظمة محركات PowerFlex للجهد المتوسط للأفران والمطاحن الكبيرة',
          'طلاء وقائي لكافة اللوحات الإلكترونية لمقاومة الغبار والرطوبة',
          'توزيع ذكي لعزم الدوران بين عدة محركات على نفس الحمل',
          'أجهزة شبكات صناعية مصممة لدرجات الحرارة القصوى'
        ]
      },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'
    }
  ]

  const currentSector = industries[activeIndustryIndex]

  return (
    <div className="font-sans min-h-screen bg-slate-50 text-slate-800">
      {/* 1. Hero Section */}
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full min-h-[450px] py-16 rounded-3xl overflow-hidden bg-slate-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80"
            alt="Automation & Control Solutions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-6 relative z-20 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar'
                ? 'الرئيسية / الحلول الصناعية / الأتمتة والتحكم'
                : 'HOME / INDUSTRIAL SOLUTIONS / AUTOMATION & CONTROL'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {locale === 'ar' ? 'حلول الأتمتة والتحكم' : 'Automation & Control Solutions'}
            </h1>
            <p className="text-slate-200 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              {locale === 'ar'
                ? 'من خلال توفير أنظمة تحكم ذكية، وحلول محركات متقدمة، وبنية تحتية موثوقة للاتصالات الصناعية، نقدم حلولاً متكاملة تدعم العمليات التصنيعية والمرافق الحيوية بأعلى كفاءة واستمرارية تشغيل وأمان سيبراني. تساعد تقنياتنا المبتكرة وخبراتنا الهندسية قطاعات مثل النفط والغاز، والسيارات، والكيماويات، والمياه، وتوليد الطاقة على تحقيق عمليات رقمية ذكية ومستدامة.'
                : 'Delivering intelligent automation, integrated control, and resilient industrial connectivity systems, we provide complete solutions that optimize critical manufacturing and infrastructure operations with maximum uptime, cybersecurity, and productivity. Our innovative architectures and domain engineering expertise empower industries including Oil & Gas, Automotive, Petrochemicals, Food & Beverage, Water & Wastewater, and Power Generation to build connected, sustainable, and smart operations.'}
            </p>
          </div>
        </section>
      </div>

      {/* 2. Solutions Carousel Section */}
      <section className="py-16 px-4 max-w-[1360px] mx-auto my-6 font-sans">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Left Solid Green Card */}
          <div className="w-full lg:w-[320px] bg-brand-primary text-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-lg flex-shrink-0 min-h-[420px]">
            <div className="space-y-4 text-start">
              <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
                {locale === 'ar'
                  ? 'حلول أتمتة وتحكم متكاملة لبيئات العمل الشاقة'
                  : 'Integrated Control & Automation for Demanding Operations'}
              </h2>
              <p className="text-slate-100 text-sm leading-relaxed">
                {locale === 'ar'
                  ? 'نقدم تقنيات الأتمتة المتقدمة، وأنظمة التحكم القابلة للبرمجة، ومحركات التردد المتغير، وشبكات الاتصال الصناعية لتمكين المصانع الذكية.'
                  : 'Delivering programmable automation, smart variable speed drives, rugged industrial networking, and predictive condition analytics for modern smart plants.'}
              </p>
            </div>
            <Link
              to={localizedPath('/contact')}
              className="mt-6 px-6 py-2.5 bg-white text-brand-primary font-bold text-sm rounded-xl hover:bg-slate-100 transition-colors shadow-sm"
            >
              {locale === 'ar' ? 'عرض المزيد' : 'View More'}
            </Link>
          </div>

          {/* Right Scrollable Carousel */}
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {solutionItems.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[280px] sm:w-[310px] h-[370px] sm:h-[400px] rounded-3xl overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0 snap-start block group"
                >
                  {/* Item number badge */}
                  <div className="absolute top-4 right-4 z-20 text-[11px] font-bold text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 tracking-wider">
                    {item.num}
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10"></div>

                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title[locale]}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 text-start space-y-1.5">
                    <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug">
                      {item.title[locale]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      {item.desc[locale]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Navigation & Progress Line */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
              {/* Progress Line */}
              <div className="flex-1 max-w-xs bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-brand-primary h-full transition-all duration-300 rounded-full"
                  style={{ width: `${Math.max(12, scrollProgress * 100)}%` }}
                ></div>
              </div>

              {/* Arrow controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollSlider('left')}
                  className="h-10 w-10 bg-brand-primary text-white hover:bg-brand-secondary active:scale-95 rounded-xl flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  aria-label="Previous items"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollSlider('right')}
                  className="h-10 w-10 bg-brand-primary text-white hover:bg-brand-secondary active:scale-95 rounded-xl flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  aria-label="Next items"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Trusted Technology Partners Section (Rockwell, HMS, ProSoft) */}
      <section className="py-12 px-4 max-w-[1360px] mx-auto my-4 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm">
          {/* Left Text Info */}
          <div className="lg:col-span-6 space-y-4 text-start">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'شركاؤنا' : 'PARTNERS'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {locale === 'ar'
                ? 'شركاء تكنولوجيا موثوقون يقودون التحول الصناعي'
                : 'Trusted Technology Partners Driving Industrial Transformation'}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-xl">
              {locale === 'ar'
                ? 'نتعاون مع رواد الأتمتة والاتصالات الصناعية العالميين لتقديم حلول معتمدة تلبي أعلى معايير الجودة والأمان والأداء التشغيلي في المملكة.'
                : 'We collaborate with global automation and industrial communication leaders to deliver validated control architectures, smart drives, and connectivity systems across the region.'}
            </p>
            <div className="pt-2">
              <Link
                to={localizedPath('/partners')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider"
              >
                {locale === 'ar' ? 'عرض جميع الشركاء' : 'View All Partners'}
              </Link>
            </div>
          </div>

          {/* Right 3 Partner Logo Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Rockwell Automation */}
            <Link
              to={localizedPath('/solutions/automation-control/rockwell-automation')}
              className="bg-white border border-slate-200/80 hover:border-brand-primary/60 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-center h-[140px] sm:h-[150px] group overflow-hidden"
              title="Rockwell Automation"
            >
              <img
                src="/PARTNERS LOGO/ROCKWELL AUTOMATION.png"
                alt="Rockwell Automation"
                className="h-16 sm:h-20 w-auto max-w-[85%] object-contain scale-[1.75] group-hover:scale-[1.85] transition-transform duration-300"
              />
            </Link>

            {/* HMS Networks */}
            <Link
              to={localizedPath('/solutions/automation-control/hms-networks')}
              className="bg-white border border-slate-200/80 hover:border-brand-primary/60 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-center h-[140px] sm:h-[150px] group overflow-hidden"
              title="HMS Networks"
            >
              <img
                src="/LOGO/HMS_logo.png"
                alt="HMS Networks"
                className="h-14 sm:h-18 w-auto max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* ProSoft Technology */}
            <Link
              to={localizedPath('/solutions/automation-control/prosoft-technology')}
              className="bg-white border border-slate-200/80 hover:border-brand-primary/60 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-center h-[140px] sm:h-[150px] group overflow-hidden"
              title="ProSoft Technology"
            >
              <img
                src="/PARTNERS LOGO/PROSOFT TECHNOLOGIES.png"
                alt="ProSoft Technology"
                className="h-16 sm:h-20 w-auto max-w-[85%] object-contain scale-[1.45] group-hover:scale-[1.55] transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Industries We Serve Section (Matching Air & Gas Solutions UI) */}
      <section className="py-16 px-4 max-w-[1360px] mx-auto my-6 font-sans">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {locale === 'ar' ? 'القطاعات' : 'SECTORS'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {locale === 'ar' ? 'القطاعات التي نخدمها' : 'Industries we serve'}
          </h2>
          <p className="text-slate-550 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {locale === 'ar'
              ? 'تغطي خبرتنا الهندسية قطاعات متخصصة متعددة، لتقديم حلول مثالية تلبي أدق وأعلى المتطلبات التشغيلية.'
              : 'Our engineering experience covers multiple specialized sectors, delivering optimized solutions for strict requirements.'}
          </p>
        </div>

        {/* Tab Navigation Bar */}
        <div className="flex items-center border border-slate-200 rounded-xl overflow-x-auto scrollbar-none bg-white shadow-sm mb-8">
          {industries.map((ind, index) => {
            const isActive = activeIndustryIndex === index
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryIndex(index)}
                className={`px-6 py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 border-r border-slate-200 last:border-r-0 cursor-pointer flex-shrink-0 ${isActive
                    ? 'bg-brand-primary text-white shadow-inner'
                    : 'text-slate-700 hover:text-brand-primary hover:bg-slate-50'
                  }`}
              >
                {ind.tabName[locale]}
              </button>
            )
          })}
        </div>

        {/* Selected Industry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm transition-all duration-300">
          {/* Left Image */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-2xl overflow-hidden h-[300px] sm:h-[400px] shadow-sm relative group bg-slate-900">
              <img
                src={currentSector.image}
                alt={currentSector.title[locale]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Details */}
          <div className="lg:col-span-6 space-y-5 text-start">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {currentSector.tag[locale]}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {currentSector.title[locale]}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {currentSector.desc[locale]}
            </p>

            {/* Key capabilities */}
            <div className="space-y-2.5 pt-2">
              {currentSector.features[locale].map((feat, fidx) => (
                <div key={fidx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                to={localizedPath('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary hover:bg-brand-primary text-white font-bold rounded-lg transition-colors text-xs sm:text-sm uppercase tracking-wider"
              >
                {locale === 'ar' ? 'طلب استشارة هندسية للقطاع' : 'Request Industry Consultation'}
                {dir === 'rtl' ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <IndustrialChallengeCTA bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" />
    </div>
  )
}
