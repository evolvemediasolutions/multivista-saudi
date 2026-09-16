import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function FirePumpSolutions() {
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
        en: 'Packaged Fire Pump Sets',
        ar: 'مجموعات مضخات الحريق المعبأة'
      },
      desc: {
        en: 'High-capacity, UL-listed and FM-approved packaged pump sets designed for continuous industrial reliability.',
        ar: 'مجموعات مضخات حريق معبأة ومعتمدة من FM ومدرجة بـ UL مصممة للخدمة الصناعية المستمرة.'
      },
      image: '/PRODUCTS/SPP PUMPS/PACKAGED FIRE SETS.jpg'
    },
    {
      num: '02 / 08',
      title: {
        en: 'Vertical Turbine Fire Pumps',
        ar: 'مضخات الحريق التوربينية الرأسية'
      },
      desc: {
        en: 'Engineered for sub-surface water sources, deep sumps, reservoirs, and marine seawater intake applications.',
        ar: 'مصممة لمصادر المياه الجوفية والآبار العميقة والخزانات وسحب مياه البحر في المنشآت الساحلية.'
      },
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '03 / 08',
      title: {
        en: 'End Suction Fire Pump Packages',
        ar: 'حزم مضخات الحريق ذات السحب الطرفي'
      },
      desc: {
        en: 'Compact footprint, highly reliable single-stage fire pumps optimized for commercial buildings and industrial complexes.',
        ar: 'مضخات حريق أحادية المرحلة مدمجة وعالية الموثوقية للمباني التجارية والمجمعات الصناعية.'
      },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '04 / 08',
      title: {
        en: 'Pre-Packaged Fire Pump Houses',
        ar: 'محطات مضخات الحريق المعبأة مسبقاً'
      },
      desc: {
        en: 'Fully pre-packaged, skid-mounted fire pump enclosures equipped with integrated piping, power, and controls.',
        ar: 'محطات ضخ حريق متكاملة ومسبقة التجهيز داخل حاويات مزودة بالأنابيب والتحكم ولوحات التشغيل.'
      },
      image: '/PRODUCTS/SPP PUMPS/PRE-PACKAGED PUMP HOUSES.jpg'
    },
    {
      num: '05 / 08',
      title: {
        en: 'Diesel Engine Driven Pump Sets',
        ar: 'مجموعات مضخات الحريق بمحركات الديزل'
      },
      desc: {
        en: 'Heavy-duty emergency diesel sets with dual battery cranking and automated NFPA-compliant test controllers.',
        ar: 'مجموعات طوارئ ديزل للخدمة الشاقة مزودة بنظام بدء تشغيل مزدوج ووحدات تحكم آلية مطابقة لـ NFPA.'
      },
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '06 / 08',
      title: {
        en: 'Electric Motor Driven Pump Sets',
        ar: 'مجموعات مضخات الحريق بالمحركات الكهربائية'
      },
      desc: {
        en: 'High-efficiency electric motor driven fire pumps featuring soft-starting and automatic transfer switch (ATS) integration.',
        ar: 'مضخات حريق كهربائية عالية الكفاءة مع بدء تشغيل ناعم وتكامل كامل مع مفتاح التحويل التلقائي ATS.'
      },
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '07 / 08',
      title: {
        en: 'Jockey & Pressure Maintenance Pumps',
        ar: 'مضخات التعويض والحفاظ على الضغط (Jockey)'
      },
      desc: {
        en: 'High-head multistage pumps maintaining constant system pressure and preventing unnecessary main pump start cycles.',
        ar: 'مضخات متعددة المراحل للحفاظ على ضغط الشبكة الثابت ومنع التشغيل غير المبرر لمضخات الحريق الرئيسية.'
      },
      image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '08 / 08',
      title: {
        en: 'Offshore & Marine Deluge Systems',
        ar: 'أنظمة مضخات الإغراق للمنصات البحرية'
      },
      desc: {
        en: 'Corrosion-resistant Super Duplex and Nickel-Aluminum Bronze fire pumps engineered for harsh offshore marine environments.',
        ar: 'مضخات سبائك فائقة مقاومة لمياه البحر مصممة للغمر ومكافحة الحرائق في المنصات البحرية وسفن الإنتاج.'
      },
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
    }
  ]

  const industries = [
    {
      id: 'oil-gas-refineries',
      tabName: { en: 'Oil & Gas / Refineries', ar: 'النفط والغاز والمصافي' },
      tag: { en: 'OIL & GAS / REFINERIES', ar: 'النفط والغاز والمصافي' },
      title: {
        en: 'Certified Deluge & High-Volume Fire Water for Hydrocarbon Facilities',
        ar: 'مياه إطفاء عالية التدفق وأنظمة إغراق معتمدة لمنشآت الهيدروكربون'
      },
      desc: {
        en: 'Providing NFPA 20, UL-listed, and FM-approved fire pump packages engineered for high-risk petroleum refineries, storage tank farms, upstream wellheads, and LNG export terminals where safety and zero failure rates are non-negotiable.',
        ar: 'توفير حزم مضخات حريق مطابقة لمعايير NFPA 20 ومعتمدة من FM ومدرجة في UL لمصافي البترول وخزانات الوقود ورؤوس الآبار ومحطات تصدير الغاز المسال حيث لا مجال لأي هامش خطأ.'
      },
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      features: {
        en: [
          'Full NFPA 20 & API Compliance with Certified Test Data',
          'Heavy-Duty Diesel & Electric Driven Redundant Systems',
          'High-Flow Horizontal Split-Case & Vertical Turbine Configurations',
          'Explosion-Proof Instrumentation for Zone 1 & Zone 2 Hazardous Areas'
        ],
        ar: [
          'مطابقة تامة لمعايير NFPA 20 و API مع بيانات اختبار معتمدة',
          'أنظمة احتياطية مدمجة بمحركات ديزل ومحركات كهربائية للخدمة الشاقة',
          'تكوينات ذات تدفق عالٍ تشمل الغلاف المنقسم والتوربينات الرأسية',
          'أجهزة قياس وتحكم مقاومة للانفجار للمناطق الخطرة Zone 1 و Zone 2'
        ]
      }
    },
    {
      id: 'commercial-highrise',
      tabName: { en: 'Commercial & High-Rise', ar: 'الأبراج والمباني التجارية' },
      tag: { en: 'COMMERCIAL & HIGH-RISE', ar: 'الأبراج والمباني التجارية' },
      title: {
        en: 'High-Pressure Fire Suppression for Modern Architectural Landmarks',
        ar: 'أنظمة إطفاء عالية الضغط للمعالم المعمارية والأبراج الشاهقة'
      },
      desc: {
        en: 'Delivering compact, high-efficiency vertical and end-suction fire pump sets designed to meet stringent municipal civil defense codes, ensuring reliable pressure delivery across extreme building heights and multi-zone distribution networks.',
        ar: 'توفير مضخات حريق رأسية وذات سحب طرفي مدمجة وعالية الكفاءة تلبي متطلبات الدفاع المدني بدقة، وتضمن وصول ضغط الإطفاء للارتفاعات الشاهقة وشبكات التوزيع متعددة المناطق.'
      },
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
      features: {
        en: [
          'Compact Modular Skid Footprint for Plant Rooms',
          'Multi-Stage High-Head Pressure Delivery for Skyscrapers',
          'Automated Weekly Self-Testing and Status Logging',
          'Integrated Jockey Pump Sets for Static Pressure Stability'
        ],
        ar: [
          'تصميم مدمج يوفر المساحة داخل غرف المعدات الميكانيكية',
          'مضخات متعددة المراحل لضخ الضغوط العالية لناطحات السحاب',
          'اختبار ذاتي أسبوعي مبرمج وتسجيل إلكتروني للحالة التشغيلية',
          'مضخات تعويض ضغط (Jockey) مدمجة للحفاظ على استقرار الشبكة'
        ]
      }
    },
    {
      id: 'petrochemicals-chemical',
      tabName: { en: 'Petrochemicals & Chemicals', ar: 'البتروكيماويات والكيماويات' },
      tag: { en: 'PETROCHEMICALS & CHEMICALS', ar: 'البتروكيماويات والكيماويات' },
      title: {
        en: 'Rapid-Response Foam & Water Fire Protection for Chemical Plants',
        ar: 'حماية سريعة برغوة الإطفاء والمياه للمجمعات والمصانع الكيميائية'
      },
      desc: {
        en: 'Engineered fire water packages built with specialized metallurgy to handle corrosive industrial water supplies, providing instantaneous deluge response for chemical processing columns, bulk loading gantries, and volatile solvent storage.',
        ar: 'حزم مياه إطفاء مصنعة من سبائك متطورة للتعامل مع مياه الإمداد الصناعية المسببة للتآكل، وتوفير استجابة فورية لأبراج العمليات الكيميائية ومحطات الشحن وخزانات المذيبات سريعة الاشتعال.'
      },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      features: {
        en: [
          'Corrosion-Resistant Impellers and Shaft Sleeves',
          'Foam Proportioning & Water Deluge Integration',
          'Dual Redundant Diesel Starting Circuits',
          'Severe Chemical Environment Paint and Coating Specifications'
        ],
        ar: [
          'دفاعات وأكمام أعمدة مقاومة للتآكل والمواد الكيميائية',
          'تكامل مباشر مع أنظمة خلط رغوة الإطفاء وشبكات الإغراق',
          'دوائر بدء تشغيل ديزل مزدوجة لضمان الاستجابة الفورية',
          'طلاءات وتجهيزات خارجية خاصة تتحمل البيئات الكيميائية القاسية'
        ]
      }
    },
    {
      id: 'power-utilities',
      tabName: { en: 'Power & Utilities', ar: 'الطاقة والمرافق العامة' },
      tag: { en: 'POWER & UTILITIES', ar: 'الطاقة والمرافق العامة' },
      title: {
        en: 'Uncompromised Fire Safety for Power Plants and Major Substations',
        ar: 'أمان وحماية تامة من الحرائق لمحطات توليد الكهرباء والمحولات'
      },
      desc: {
        en: 'Safeguarding heavy power generation assets, step-up transformer yards, and grid substations with dedicated high-volume fire water pump sets capable of high-discharge spray cooling under emergency fault conditions.',
        ar: 'حماية أصول توليد الطاقة الثقيلة وساحات المحولات ومحطات التوزيع بحزم مضخات إطفاء مخصصة قادرة على رش التبريد بالتدفق العالي تحت ظروف الأعطال الطارئة.'
      },
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      features: {
        en: [
          'Transformer Deluge Spray High-Discharge Rates',
          'Seismic and Vibration Certified Pump Packages',
          'Remote Telemetry and SCADA Monitoring Interface',
          'Dual Fuel/Electric Driver Redundancy'
        ],
        ar: [
          'معدلات تدفق فائقة مخصصة لإغراق وتبريد المحولات الكهربائية',
          'حزم مضخات معتمدة لمقاومة الاهتزازات والزلازل',
          'واجهات ربط للتحكم والقياس عن بعد عبر أنظمة SCADA',
          'ازدواجية تشغيلية كاملة تجمع بين محركات الديزل والكهرباء'
        ]
      }
    },
    {
      id: 'manufacturing-warehousing',
      tabName: { en: 'Industrial & Warehousing', ar: 'المصانع والمستودعات' },
      tag: { en: 'INDUSTRIAL & WAREHOUSING', ar: 'المصانع والمستودعات' },
      title: {
        en: 'Pre-Engineered Containerized Pump Houses for Logistics Hubs',
        ar: 'محطات مضخات معيارية مسبقة الصنع لمراكز الخدمات اللوجستية'
      },
      desc: {
        en: 'Plug-and-play containerized fire pump houses designed for mega logistics distribution hubs, automated warehousing, and gigafactories, drastically slashing civil works and onsite commissioning timelines.',
        ar: 'محطات مضخات حريق مسبقة التجهيز داخل حاويات مخصصة للمراكز اللوجستية الضخمة والمستودعات الآلية والمصانع الكبرى، مما يقلل بشكل كبير من الأعمال المدنية وأوقات التدشين بالموقع.'
      },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      features: {
        en: [
          'Factory Tested & Pre-Wired Turnkey Packaged Enclosures',
          'Integrated Lighting, Ventilation, and Heating Systems',
          'Rapid Site Installation with Minimal Civil Concrete Requirements',
          'ESFR Sprinkler System High-Volume Water Flow Support'
        ],
        ar: [
          'محطات متكاملة ومختبرة مسبقاً بالمصنع مع كافة التمديدات',
          'أنظمة تهوية وإنارة وتدفئة مدمجة داخل الحاوية',
          'تركيب سريع في الموقع مع الحد الأدنى من الإنشاءات المدنية',
          'دعم تدفق المياه العالي لشبكات رشاشات ESFR السقفية'
        ]
      }
    },
    {
      id: 'offshore-renewables',
      tabName: { en: 'Offshore & Marine', ar: 'المنصات البحرية والموانئ' },
      tag: { en: 'OFFSHORE & MARINE', ar: 'المنصات البحرية والموانئ' },
      title: {
        en: 'Extreme Marine Alloy Fire Pumps for Seawater Immersion',
        ar: 'مضخات حريق بحرية بسبائك متطورة لمياه البحر والمنصات'
      },
      desc: {
        en: 'Manufactured with Nickel-Aluminum Bronze (NAB), Super Duplex, and Titanium materials to resist pitting and bio-fouling, delivering mission-critical fire safety on offshore production platforms, FPSOs, and coastal LNG berths.',
        ar: 'مصنعة من برونز النيكل والألومنيوم وسبائك السوبر دوبلكس والتيتانيوم لمقاومة التآكل والتكلس البحري، لتوفير أمان حرج على منصات الإنتاج وسفن FPSO ومرافئ الغاز الساحلية.'
      },
      image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80',
      features: {
        en: [
          'Super Duplex & NAB Construction for Seawater Immersion',
          'Deep Submerged Column Vertical Turbine Engineering',
          'ATEX / IECEx Explosion-Proof Certifications',
          'Extreme Reliability Under Marine Wave Dynamic Loads'
        ],
        ar: [
          'تصنيع من السوبر دوبلكس وبرونز الألومنيوم للغمر في مياه البحر',
          'هندسة توربينات رأسية ذات أعمدة غاطسة عميقة',
          'شهادات مقاومة الانفجار البحرية ATEX و IECEx',
          'موثوقية تشغيلية استثنائية تحت تأثير الأحمال الديناميكية للأمواج'
        ]
      }
    }
  ]

  const currentSector = industries[activeIndustryIndex]

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      {/* 1. Hero Section */}
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full min-h-[450px] py-16 rounded-3xl overflow-hidden bg-slate-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
            alt="Fire Pump Solutions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-6 relative z-20 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar'
                ? 'الرئيسية / الحلول الصناعية / حلول مضخات الحريق'
                : 'HOME / INDUSTRIAL SOLUTIONS / FIRE PUMP SOLUTIONS'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {locale === 'ar' ? 'حلول مضخات الحريق' : 'Fire Pump Solutions'}
            </h1>
            <p className="text-slate-200 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              {locale === 'ar'
                ? 'من خلال توفير مجموعات مضخات حريق عالمية المستوى معتمدة من FM ومدرجة في UL، نقدم أنظمة حماية متكاملة وموثوقة لمكافحة الحرائق وإمداد مياه الطوارئ مصممة لحماية الأرواح والأصول الحيوية. تساعد تقنياتنا الهندسية وحلولنا المسبقة الصنع قطاعات النفط والغاز، والمصافي، والبتروكيماويات، والمباني التجارية، وتوليد الطاقة، والمنصات البحرية على تحقيق أعلى مستويات الأمان والامتثال للمعايير الدولية.'
                : 'Delivering comprehensive FM-Approved and UL-Listed fire pump packages, we provide certified emergency fire protection and water delivery systems engineered to safeguard human lives and critical assets. Our pre-packaged pump houses, diesel and electric driven sets, and domain expertise empower Oil & Gas, Petrochemicals, Commercial Towers, Power Generation, and Marine infrastructure with uncompromising safety and international standard compliance.'}
            </p>
          </div>
        </section>
      </div>

      {/* 2. Engineering Solutions Section (Green Left Box + Horizontal Carousel) */}
      <section className="py-12 px-4 max-w-[1360px] mx-auto my-4 font-sans">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Solid Green Card */}
          <div className="w-full lg:w-[320px] bg-brand-primary text-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-lg flex-shrink-0 min-h-[420px]">
            <div className="space-y-4 text-start">
              <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
                {locale === 'ar'
                  ? 'حلول هندسية للعمليات الصناعية الحيوية'
                  : 'Engineering Solutions for Critical Industrial Operations'}
              </h2>
              <p className="text-slate-100 text-sm leading-relaxed">
                {locale === 'ar'
                  ? 'نقدم حزم مضخات حريق معتمدة، ومحطات ضخ مسبقة التجهيز داخل حاويات، وأنظمة طوارئ عالية الموثوقية تدعم سلامة المنشآت الحيوية.'
                  : 'Delivering FM-Approved and UL-Listed fire pump packages, containerized pump houses, and emergency water pumping systems that safeguard critical assets and human lives.'}
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
                  className="w-[280px] sm:w-[310px] h-[370px] sm:h-[400px] rounded-3xl overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0 snap-start block group bg-slate-900"
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

      {/* 3. Trusted Technology Partners Section */}
      <section className="py-12 px-4 max-w-[1360px] mx-auto my-4 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm">
          {/* Left Text Info */}
          <div className="lg:col-span-7 space-y-4 text-start">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'شركاؤنا' : 'PARTNERS'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {locale === 'ar'
                ? 'شركاء تكنولوجيا موثوقون يقودون الابتكار'
                : 'Trusted Technology Partners Driving Innovation'}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-xl">
              {locale === 'ar'
                ? 'نتعاون مع رواد تصنيع مضخات الحماية من الحرائق والأنظمة المعيارية لتقديم حلول معتمدة تلبي أعلى معايير السلامة وموثوقية الطوارئ في أصعب البيئات الصناعية.'
                : 'We collaborate with global centrifugal pump and fire protection leaders to deliver validated engineering packages that safeguard lives, assets, and operations across the region.'}
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

          {/* Right Partner Logo Card (SPP Pumps) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Link
              to={localizedPath('/solutions/fire-pump-solutions/spp-pumps')}
              className="bg-white border border-slate-200/80 hover:border-brand-primary/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center w-full max-w-[280px] sm:max-w-[320px] h-[150px] group"
            >
              <img
                src="/PARTNERS LOGO/SPP.jpg"
                alt="SPP Pumps"
                className="max-h-16 max-w-[200px] object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Industries We Serve Section (Matching Sectors Design) */}
      <section className="py-16 px-4 max-w-[1360px] mx-auto my-6 font-sans">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {locale === 'ar' ? 'القطاعات' : 'SECTORS'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {locale === 'ar' ? 'القطاعات التي نخدمها' : 'Industries we serve'}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {locale === 'ar'
              ? 'تغطي خبرتنا الهندسية في مضخات وأنظمة الحماية من الحرائق قطاعات متعددة، لتوفير حلول طوارئ معتمدة وعالية الاعتمادية.'
              : 'Our engineering expertise in fire protection pumping covers critical industries, delivering fully certified, high-reliability emergency systems.'}
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
                className={`px-6 py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 border-r border-slate-200 last:border-r-0 cursor-pointer flex-shrink-0 ${
                  isActive
                    ? 'bg-brand-primary text-white shadow-inner'
                    : 'text-slate-700 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                {ind.tabName[locale]}
              </button>
            )
          })}
        </div>

        {/* Tab Content Box */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-start">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
                {currentSector.tag[locale]}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {currentSector.title[locale]}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {currentSector.desc[locale]}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                {currentSector.features[locale].map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Explore Sector Button */}
              <div className="pt-4">
                <Link
                  to={localizedPath('/contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider"
                >
                  <span>{locale === 'ar' ? 'طلب استشارة هندسية' : 'Request Engineering Consultation'}</span>
                  {dir === 'rtl' ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </Link>
              </div>
            </div>

            {/* Right Sector Image */}
            <div className="lg:col-span-5 h-[340px] sm:h-[400px] rounded-2xl overflow-hidden relative shadow-md">
              <img
                src={currentSector.image}
                alt={currentSector.tabName[locale]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white text-start">
                <span className="text-xs uppercase tracking-widest text-slate-300 font-bold block">
                  {locale === 'ar' ? 'قطاع متخصص' : 'SPECIALIZED SECTOR'}
                </span>
                <span className="text-lg font-bold">
                  {currentSector.tabName[locale]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <IndustrialChallengeCTA bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" />
    </div>
  )
}
