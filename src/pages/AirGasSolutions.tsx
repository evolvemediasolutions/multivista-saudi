import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function AirGasSolutions() {
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
        en: 'Air Compressors',
        ar: 'ضواغط الهواء'
      },
      desc: {
        en: 'Efficient air compressors engineered for continuous industrial duty.',
        ar: 'ضواغط هواء عالية الكفاءة مصممة للعمل الصناعي الشاق والمستمر.'
      },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '02 / 08',
      title: {
        en: 'Gas Compressors',
        ar: 'ضواغط الغاز'
      },
      desc: {
        en: 'Reliable gas compression for demanding process applications.',
        ar: 'ضغط غاز موثوق يلبي متطلبات تطبيقات العمليات الصناعية الدقيقة.'
      },
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '03 / 08',
      title: {
        en: 'Compressed Air Systems',
        ar: 'أنظمة الهواء المضغوط'
      },
      desc: {
        en: 'Complete compressed air systems designed for performance.',
        ar: 'أنظمة هواء مضغوط متكاملة مصممة لأعلى كفاءة وأداء تشغيلي.'
      },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '04 / 08',
      title: {
        en: 'Air Treatment',
        ar: 'معالجة وتنقية الهواء'
      },
      desc: {
        en: 'Air treatment that protects equipment and improves quality.',
        ar: 'معالجة متطورة للهواء تحمي المعدات وتحسن جودة العمليات.'
      },
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '05 / 08',
      title: {
        en: 'Dryers & Filters',
        ar: 'المجففات والفلاتر'
      },
      desc: {
        en: 'Dryers and filters that deliver clean, dry compressed air.',
        ar: 'مجففات وفلاتر توفر هواءً مضغوطاً فائق النقاء والجفاف.'
      },
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '06 / 08',
      title: {
        en: 'Gas Generation',
        ar: 'توليد الغاز في الموقع'
      },
      desc: {
        en: 'On-site gas generation for consistent, cost-effective supply.',
        ar: 'أنظمة توليد الغاز في الموقع لإمداد مستمر، فعال واقتصادي.'
      },
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '07 / 08',
      title: {
        en: 'Air Distribution',
        ar: 'شبكات توزيع الهواء'
      },
      desc: {
        en: 'Efficient distribution systems for plant-wide air delivery.',
        ar: 'شبكات توزيع عالية الكفاءة لتوصيل الهواء عبر جميع أرجاء المنشأة.'
      },
      image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '08 / 08',
      title: {
        en: 'Service & Maintenance',
        ar: 'الخدمة والصيانة'
      },
      desc: {
        en: 'Expert service that maximizes uptime and efficiency.',
        ar: 'خدمات هندسية متخصصة تضمن أعلى مستويات الجاهزية والإنتاجية.'
      },
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
    }
  ]

  const industries = [
    {
      id: 'aerospace',
      tabName: { en: 'Aerospace', ar: 'صناعة الطيران' },
      tag: { en: 'AEROSPACE', ar: 'صناعة الطيران' },
      title: {
        en: 'Enabling Precision Across Aerospace Operations',
        ar: 'تمكين الدقة العالية عبر عمليات الطيران والفضاء'
      },
      desc: {
        en: 'Delivering ultra-pure compressed air, customized nitrogen generation, and specialized test-bench pressure systems built to meet rigorous aerospace performance and safety standards.',
        ar: 'توفير هواء مضغوط فائق النقاء، وتوليد نيتروجين مخصص، وأنظمة ضغط متخصصة لمنصات الاختبار مصممة لتلبية معايير الأداء والسلامة الصارمة في قطاع الطيران.'
      },
      features: {
        en: [
          'High-purity breathing and instrument air',
          'Nitrogen generation for fuel tank inerting & tire filling',
          'High-pressure test-bench booster systems',
          'Zero-oil risk certified compression equipment'
        ],
        ar: [
          'هواء عالي النقاء للتنفس والأجهزة الدقيقة',
          'توليد النيتروجين لخمل خزانات الوقود وتعبئة الإطارات',
          'أنظمة معززات ضغط عالية لمنصات الاختبار',
          'معدات ضغط معتمدة وخالية تماماً من مخاطر الزيوت'
        ]
      },
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'auto-component',
      tabName: { en: 'Auto Component', ar: 'مكونات السيارات' },
      tag: { en: 'AUTO COMPONENT', ar: 'مكونات السيارات' },
      title: {
        en: 'Optimizing Efficiency in Auto Component Manufacturing',
        ar: 'تعزيز الكفاءة في تصنيع قطع ومكونات السيارات'
      },
      desc: {
        en: 'Providing continuous, high-efficiency compressed air systems for precision machining, stamping, robotic clamping, and electronics assembly in automotive tier suppliers.',
        ar: 'توفير أنظمة هواء مضغوط مستمرة وعالية الكفاءة لعمليات التشغيل الآلي الدقيق والكبس والتثبيت الروبوتي وتجميع المكونات الإلكترونية لدى موردي قطع السيارات.'
      },
      features: {
        en: [
          'Stable pressure for CNC machining and robotic automation',
          'Dry air preventing corrosion in precision metal parts',
          'Variable speed compressors lowering energy costs',
          'Modular air distribution networks'
        ],
        ar: [
          'ضغط مستقر لآلات CNC والأتمتة الروبوتية',
          'هواء جاف يمنع تآكل الأجزاء المعدنية الدقيقة',
          'ضواغط ذات سرعة متغيرة لتقليل استهلاك الطاقة',
          'شبكات توزيع هواء مرنة وقابلة للتوسيع'
        ]
      },
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'automotive',
      tabName: { en: 'Automotive', ar: 'صناعة السيارات' },
      tag: { en: 'AUTOMOTIVE', ar: 'صناعة السيارات' },
      title: {
        en: 'Driving Performance on Automotive Production Lines',
        ar: 'دفع الأداء والكفاءة على خطوط تجميع السيارات'
      },
      desc: {
        en: 'Supplying heavy-duty industrial compressor packages, paint-booth moisture-free air treatment, and automated assembly tool pneumatics for vehicle manufacturing plants.',
        ar: 'توريد حزم ضواغط صناعية للخدمة الشاقة، وأنظمة معالجة الهواء الخالية من الرطوبة لكبائن الطلاء، وتوزيع هوائي لأدوات التجميع الآلية لمصانع السيارات.'
      },
      features: {
        en: [
          'Ultra-clean air for flawless paint finishing',
          'Continuous pneumatic power for robotic assembly lines',
          'Centralized plant-wide utility monitoring',
          'High uptime guarantee with redundant backup configurations'
        ],
        ar: [
          'هواء فائق النقاء لضمان جودة طلاء مثالية',
          'طاقة هوائية مستمرة لخطوط التجميع الروبوتية',
          'مراقبة مركزية شاملة لمرافق المنشأة',
          'ضمان جاهزية عالية مع تكوينات احتياطية متكاملة'
        ]
      },
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'brewery-bottling',
      tabName: { en: 'Brewery & Bottling', ar: 'التعبئة والمشروبات' },
      tag: { en: 'BREWERY & BOTTLING', ar: 'التعبئة والمشروبات' },
      title: {
        en: 'Hygienic Air & Gas Solutions for Bottling Lines',
        ar: 'حلول هواء وغاز صحية ومعقمة لخطوط التعبئة'
      },
      desc: {
        en: '100% oil-free Class 0 air compressors, CO2 recovery and compression, high-pressure PET blow-molding air, and sterile filtration ensuring uncontaminated beverage packaging.',
        ar: 'ضواغط هواء خالية تماماً من الزيت Class 0، واسترداد وضغط ثاني أكسيد الكربون، وهواء عالي الضغط لنفخ عبوات PET، وترشيح معقم لحماية نقاء المنتجات.'
      },
      features: {
        en: [
          'ISO 8573-1 Class 0 oil-free air certification',
          '40-bar high-pressure boosters for PET bottle blowing',
          'CO2 gas compression and purification packages',
          'Sterile micro-filtration removing airborne contaminants'
        ],
        ar: [
          'شهادة هواء خالي من الزيت ISO 8573-1 Class 0',
          'معززات ضغط عالي 40 بار لنفخ عبوات PET',
          'حزم ضغط وتنقية غاز ثاني أكسيد الكربون CO2',
          'ترشيح معقم دقيق لإزالة أي ملوثات محمولة بالهواء'
        ]
      },
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'buildings-infrastructure',
      tabName: { en: 'Buildings & Infrastructure', ar: 'المباني والبنية التحتية' },
      tag: { en: 'BUILDINGS & INFRASTRUCTURE', ar: 'المباني والبنية التحتية' },
      title: {
        en: 'Powering Critical Utility & Infrastructure Systems',
        ar: 'تشغيل المرافق وأنظمة البنية التحتية الحيوية'
      },
      desc: {
        en: 'Central utility air compressors, construction air supplies, pneumatic automation for facilities, and aeration systems supporting large-scale commercial and civil developments.',
        ar: 'ضواغط هواء مركزية للمرافق، وإمدادات الهواء لأعمال الإنشاءات، والتحكم الهوائي للمنشآت، وأنظمة التهوية التي تدعم المشاريع المدنية والتجارية الكبرى.'
      },
      features: {
        en: [
          'Centralized utility air for mega-projects & airports',
          'Low-noise rotary screw units for commercial basements',
          'Wastewater aeration and water treatment blowers',
          'Energy audit and smart pressure management'
        ],
        ar: [
          'هواء مرافق مركزي للمشاريع العملاقة والمطارات',
          'وحدات لولبية منخفضة الضوضاء للطوابق السفلية التجارية',
          'منفاخات تهوية مياه الصرف ومعالجة المياه',
          'تدقيق استهلاك الطاقة وإدارة ذكية لمستويات الضغط'
        ]
      },
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'cement',
      tabName: { en: 'Cement', ar: 'صناعة الأسمنت' },
      tag: { en: 'CEMENT', ar: 'صناعة الأسمنت' },
      title: {
        en: 'Heavy-Duty Air Solutions for Harsh Cement Plants',
        ar: 'حلول هواء شديدة التحمل لبيئات مصانع الأسمنت'
      },
      desc: {
        en: 'Engineered rotary screw and low-pressure blower systems designed for pneumatic conveying, silo fluidization, and dust suppression in extreme, high-particulate conditions.',
        ar: 'أنظمة ضواغط لولبية ومنفاخات منخفضة الضغط مصممة للنقل الهوائي، وتمييع الصوامع، ومكافحة الغبار في أصعب الظروف البيئية والصناعية.'
      },
      features: {
        en: [
          'High-dust tolerant heavy filtration assemblies',
          'Energy-efficient pneumatic raw meal & cement transport',
          'Reliable aeration blowers for bulk blending silos',
          'Ruggedized outdoor enclosures and heat resistance'
        ],
        ar: [
          'مجموعات ترشيح فائقة التحمل للغبار الكثيف',
          'نقل هوائي موفر للطاقة للمواد الخام والأسمنت',
          'منفاخات تهوية موثوقة لصوامع الخلط والتخزين',
          'هياكل خارجية متينة ومقاومة لدرجات الحرارة العالية'
        ]
      },
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'chemical-fertilizer',
      tabName: { en: 'Chemical & Fertilizer', ar: 'الكيماويات والأسمدة' },
      tag: { en: 'CHEMICAL & FERTILIZER', ar: 'الكيماويات والأسمدة' },
      title: {
        en: 'Corrosion-Resistant Gas Compression & Process Utilities',
        ar: 'ضغط الغاز المقاوم للتآكل ومرافق العمليات الكيميائية'
      },
      desc: {
        en: 'Specialized API-compliant process gas compressors, dry instrument air packages, and inert gas generation handling aggressive and toxic gases with maximum plant safety.',
        ar: 'ضواغط غاز عمليات متوافقة مع معايير API، وحزم هواء للأجهزة الدقيقة، وتوليد غاز خامل للتعامل الآمن مع الغازات الشديدة والمسببة للتآكل.'
      },
      features: {
        en: [
          'API 619 screw & API 618 reciprocating gas packages',
          'Nitrogen generation for safety purging and blanketing',
          'Explosion-proof ATEX / IECEx certified controls',
          'Corrosion-resistant materials and exotic alloys'
        ],
        ar: [
          'حزم ضواغط لولبية وترددية متوافقة مع معايير API',
          'توليد النيتروجين للتطهير الآمن وتغطية الخزانات',
          'أنظمة تحكم مضادة للانفجار معتمدة بـ ATEX / IECEx',
          'مواد وسبائك خاصة فائقة المقاومة للتآكل'
        ]
      },
      image: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'consumer-process-goods',
      tabName: { en: 'Consumer Process Goods', ar: 'السلع الاستهلاكية' },
      tag: { en: 'CONSUMER PROCESS GOODS', ar: 'السلع الاستهلاكية' },
      title: {
        en: 'Clean & Efficient Utilities for Consumer Manufacturing',
        ar: 'مرافق نقية وعالية الكفاءة لتصنيع السلع الاستهلاكية'
      },
      desc: {
        en: 'High-speed automated packaging air, nitrogen inerting for shelf-life extension, and energy-optimized compressors delivering reliable uptime for FMCG facilities.',
        ar: 'هواء مخصص لآلات التغليف عالية السرعة، وحقن النيتروجين لإطالة العمر التخزيني، وضواغط موفرة للطاقة تضمن استمرارية الإنتاج لمصانع السلع الاستهلاكية.'
      },
      features: {
        en: [
          'Fast response pneumatic supply for high-speed cartoners',
          'Nitrogen flushing systems for fresh packaging',
          'Smart variable flow compressors reducing kWh per unit',
          'Predictive maintenance monitoring systems'
        ],
        ar: [
          'إمداد هوائي سريع الاستجابة لآلات التعبئة والتغليف السريعة',
          'أنظمة حقن النيتروجين لحفظ المنتجات طازجة',
          'ضواغط ذكية متغيرة التدفق لتقليل استهلاك الكيلوواط/ساعة',
          'أنظمة مراقبة وصيانة تنبؤية متقدمة'
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
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
            alt="Air & Gas Solutions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-6 relative z-20 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar'
                ? 'الرئيسية / الحلول الصناعية / حلول الهواء والغاز'
                : 'HOME / INDUSTRIAL SOLUTIONS / AIR & GAS SOLUTIONS'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {locale === 'ar' ? 'حلول الهواء والغاز' : 'Air & Gas Solutions'}
            </h1>
            <p className="text-slate-200 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              {locale === 'ar'
                ? 'من خلال توفير أنظمة موثوقة للهواء والغاز المضغوطين، نقدم حلولاً متكاملة تدعم العمليات الصناعية الحيوية بأقصى قدر من الكفاءة واستمرارية التشغيل. تساعد تقنياتنا المبتكرة وخبراتنا الهندسية قطاعات مثل النفط والغاز، والأدوية، والكيماويات، والبتروكيماويات، وتوليد الطاقة على تحقيق عمليات مستدامة وآمنة وموثوقة.'
                : 'Delivering reliable compressed air and gas systems, we provide complete solutions that support critical industrial processes with maximum efficiency and uptime. Our innovative technologies and engineering expertise help industries such as Oil & Gas, Pharmaceuticals, Chemicals, Petrochemicals, and Power Generation achieve sustainable, safe, and dependable operations.'}
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
                  ? 'حلول هندسية للعمليات الصناعية الحيوية'
                  : 'Engineering Solutions for Critical Industrial Operations'}
              </h2>
              <p className="text-slate-100 text-sm leading-relaxed">
                {locale === 'ar'
                  ? 'نقدم تقنيات الأتمتة والمرافق والروبوتات والعمليات التي تدعم العمليات الصناعية الفعالة والمستقبلية.'
                  : 'Delivering automation, utilities, robotics, and process technologies that support efficient and future-ready industrial operations.'}
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
                ? 'نتعاون مع قادة التكنولوجيا العالميين لتقديم أنظمة أتمتة وحلول صناعية معتمدة تلبي معايير الجودة الصارمة في الصناعة.'
                : 'We collaborate with global technology leaders to deliver validated automation and industrial systems that meet strict industry quality benchmarks.'}
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

          {/* Right Partner Logo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Link
              to={localizedPath('/solutions/air-gas-solutions/kirloskar-pneumatic')}
              className="bg-white border border-slate-200/80 hover:border-brand-primary/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center w-full max-w-[280px] sm:max-w-[320px] h-[150px] group"
            >
              <img
                src="/PARTNERS LOGO/KIRLOSKAR PNEUMATIC.jpg"
                alt="Kirloskar Pneumatic"
                className="max-h-16 max-w-[200px] object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Industries We Serve Section (Matching Screenshot) */}
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

      {/* Industrial Challenge CTA */}
      <IndustrialChallengeCTA bgImage="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" />
    </div>
  )
}
