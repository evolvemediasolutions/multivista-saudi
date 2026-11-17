import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function HvacSolutions() {
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
      num: '01 / 06',
      title: {
        en: 'Water-Cooled Centrifugal & Screw Chillers',
        ar: 'مبردات المياه المركزية عالية الكفاءة'
      },
      desc: {
        en: 'High-efficiency centrifugal and screw chillers engineered for large-scale central plants, process cooling, and district cooling.',
        ar: 'مبردات طاردة مركزية ولولبية عالية الكفاءة مصممة لتبريد العمليات الصناعية والمحطات المركزية وتبريد المناطق.'
      },
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '02 / 06',
      title: {
        en: 'High-Ambient Air-Cooled Chillers',
        ar: 'مبردات الهواء المدمجة للأجواء القاسية'
      },
      desc: {
        en: 'Robust, compact air-cooled chiller systems engineered to operate continuously up to 55°C desert ambient temperatures.',
        ar: 'أنظمة مبردات مدمجة مبردة بالهواء مصممة خصيصاً للعمل المتواصل في درجات حرارة صحراوية تصل إلى 55 مئوية.'
      },
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '03 / 06',
      title: {
        en: 'Oil-Free Magnetic Bearing Chillers',
        ar: 'مبردات بمحامل مغناطيسية خالية من الزيت'
      },
      desc: {
        en: 'Advanced TURBOLEV magnetic levitation centrifugal chillers offering industry-leading part-load IPLV and near-silent operation.',
        ar: 'مبردات توربوليف الطاردة المركزية ذات الرفع المغناطيسي التي توفر أعلى كفاءة تحميل جزئي (IPLV) وتشغيلاً فائق الهدوء.'
      },
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '04 / 06',
      title: {
        en: 'Mission-Critical Data Center Cooling',
        ar: 'تبريد مراكز البيانات والمنشآت الحيوية'
      },
      desc: {
        en: 'Purpose-built data center chillers featuring fast restart, elevated chilled water temperature compatibility, and N+1 redundancy.',
        ar: 'مبردات مخصصة لمراكز البيانات تتميز بإعادة تشغيل فائقة السرعة وتوافق مع درجات مياه مرتفعة ونظام احتياطي N+1.'
      },
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '05 / 06',
      title: {
        en: 'Industrial Heat Recovery & Heat Pumps',
        ar: 'مضخات حرارية صناعية واسترداد الطاقة'
      },
      desc: {
        en: 'Air-to-water and water-to-water industrial heat recovery heat pumps extracting waste thermal energy for process heating and hot water.',
        ar: 'مضخات حرارية صناعية لاسترداد الطاقة الحرارية المهدرة واستخدامها في تسخين العمليات والمياه الصناعية.'
      },
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '06 / 06',
      title: {
        en: 'Mega-Tonnage District Cooling Plants',
        ar: 'محطات تبريد المناطق واسعة النطاق'
      },
      desc: {
        en: 'Large-tonnage modular chillers and series-counterflow chilled water configurations engineered for regional district energy infrastructure.',
        ar: 'مبردات نمطية ذات سعة أطنان فائقة وتكوينات تدفق متعاكس لمحطات تبريد المناطق وتوليد الطاقة الإقليمية.'
      },
      image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80'
    }
  ]

  const industries = [
    {
      id: 'district-commercial',
      tabName: { en: 'District Cooling & Commercial', ar: 'تبريد المناطق والمجمعات التجارية' },
      tag: { en: 'DISTRICT COOLING & COMMERCIAL', ar: 'تبريد المناطق والمجمعات التجارية' },
      title: {
        en: 'High-Efficiency Central Plant Chillers for Large Developments',
        ar: 'مبردات محطات مركزية عالية الكفاءة للمشاريع الكبرى'
      },
      desc: {
        en: 'Providing ultra-high efficiency water-cooled centrifugal and screw chillers for city-scale district cooling plants, commercial towers, airports, and universities.',
        ar: 'توفير مبردات مياه صناعية طاردة مركزية ولولبية فائقة الكفاءة لمحطات تبريد المدن والأبراج التجارية والمطارات والجامعات.'
      },
      features: {
        en: [
          'Modular centrifugal chillers up to 3,000 TR per unit with VFD options',
          'Series-counterflow plant designs delivering extreme Delta-T efficiency',
          'Integration with thermal energy storage (TES) and seawater cooling',
          'Intelligent central plant sequencing and SCADA optimization'
        ],
        ar: [
          'مبردات نمطية تصل إلى 3000 طن تبريد لكل وحدة مع خيارات VFD',
          'تصاميم تدفق متعاكس متتالية لتحقيق أعلى فارق درجات حرارة وكفاءة',
          'تكامل مع أنظمة تخزين الطاقة الحرارية والتبريد بمياه البحر',
          'تحكم ذكي بتسلسل تشغيل المحطة وتحسين استهلاك الطاقة عبر SCADA'
        ]
      },
      image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'data-centers',
      tabName: { en: 'Data Centers & Tech', ar: 'مراكز البيانات والتقنية' },
      tag: { en: 'DATA CENTERS & MISSION CRITICAL', ar: 'مراكز البيانات والمنشآت الحيوية' },
      title: {
        en: 'Zero-Downtime Precision Chilled Water Systems',
        ar: 'أنظمة مياه مثلجة فائقة الموثوقية دون توقف'
      },
      desc: {
        en: 'Mission-critical chiller designs ensuring uninterrupted thermal management with rapid restart technology, dual-feed power integration, and high water temperature resilience.',
        ar: 'تصاميم مبردات للمنشآت الحيوية تضمن استمرارية التحكم الحراري دون انقطاع مع تقنية إعادة التشغيل السريع وتغذية الطاقة المزدوجة.'
      },
      features: {
        en: [
          'Fast-restart capability within seconds of power restoration',
          'High water temperature operation optimized for modern server racks',
          'Dual independent refrigeration circuits for full redundancy',
          'Advanced harmonic filtering and generator-friendly power factor'
        ],
        ar: [
          'إعادة تشغيل فائقة السرعة خلال ثوانٍ من استعادة التيار الكهربائي',
          'تشغيل بدرجات حرارة مياه مرتفعة مهيأة لكبائن الخوادم الحديثة',
          'دوائر تبريد مستقلة ومزدوجة لتحقيق أقصى درجات الأمان والاعتمادية',
          'فلاتر توافقيات متقدمة ومعامل قدرة مناسب للمولدات الاحتياطية'
        ]
      },
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'healthcare-pharma',
      tabName: { en: 'Healthcare & Cleanrooms', ar: 'الرعاية الصحية والغرف النظيفة' },
      tag: { en: 'HEALTHCARE & PHARMACEUTICAL', ar: 'الرعاية الصحية والمنشآت الطبية' },
      title: {
        en: 'Hospital-Grade Climate & Close Tolerance Cooling',
        ar: 'تكييف بمعايير المستشفيات والتحكم الدقيق'
      },
      desc: {
        en: 'Delivering whisper-quiet, oil-free chillers and precision air conditioning systems satisfying strict infection control, cleanroom cGMP, and surgical suite standards.',
        ar: 'توفير مبردات خالية من الزيت فائقة الهدوء وأنظمة تكييف دقيقة تلبي المعايير الصارمة لمكافحة العدوى والغرف النظيفة وصالات الجراحة.'
      },
      features: {
        en: [
          'TURBOLEV magnetic bearing chillers with vibration-free operation',
          'Precise psychrometric humidity and temperature control',
          '100% fresh air cleanroom handling with HEPA filtration compatibility',
          'Comprehensive validation and environmental monitoring'
        ],
        ar: [
          'مبردات توربوليف بمحامل مغناطيسية تعمل بدون اهتزاز أو ضوضاء',
          'تحكم دقيق بالرطوبة النسبية ودرجات الحرارة في الأجنحة الحساسة',
          'مناولة هواء نقي 100% متوافقة مع فلاتر HEPA للغرف النظيفة',
          'حزم اعتماد وتوثيق شاملة للمتطلبات الطبية والصيدلانية'
        ]
      },
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'heavy-process',
      tabName: { en: 'Industrial & Manufacturing', ar: 'الصناعة والتصنيع' },
      tag: { en: 'INDUSTRIAL & HEAVY PROCESS', ar: 'الصناعة والعمليات الثقيلة' },
      title: {
        en: 'Rugged Process Fluid Chillers for High Ambient Operations',
        ar: 'مبردات سوائل العمليات الشاقة للأجواء الحارة'
      },
      desc: {
        en: 'Engineered closed-loop process cooling for plastics, metal forming, chemical batch reactors, and electrical substation cooling in extreme 55°C desert environments.',
        ar: 'تبريد سوائل العمليات للأنظمة المغلقة لمصانع البلاستيك وتشكيل المعادن والمفاعلات الكيميائية ومحطات الكهرباء تحت حرارة تصل إلى 55 مئوية.'
      },
      features: {
        en: [
          'Heavy-duty copper-nickel and epoxy coated condenser coils',
          'Reliable screw compressors delivering continuous industrial process chill',
          'Desert sand protection filters and IP55 weather-rated enclosures',
          'Integrated hydronic pump modules and automated safety protection'
        ],
        ar: [
          'ملفات مكثفات متينة من النحاس والنيكل مع طلاءات إيبوكسي عازلة',
          'ضواغط لولبية موثوقة توفر تبريداً صناعياً مستمراً على مدار الساعة',
          'فلاتر حماية من الرمال الصحراوية وهياكل مصنفة IP55 لمقاومة العوامل الجوية',
          'وحدات مضخات هيدروليكية مدمجة وأنظمة حماية أوتوماتيكية'
        ]
      },
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80'
    }
  ]

  const currentSector = industries[activeIndustryIndex]

  return (
    <div className="font-sans min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Hero Section */}
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full min-h-[450px] py-16 rounded-3xl overflow-hidden bg-slate-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-black/65 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80"
            alt="HVAC Solutions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-6 relative z-20 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar'
                ? 'الرئيسية / الحلول الصناعية / حلول التكييف'
                : 'HOME / INDUSTRIAL SOLUTIONS / HVAC SOLUTIONS'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {locale === 'ar' ? 'حلول التكييف' : 'HVAC Solutions'}
            </h1>
            <p className="text-slate-200 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              {locale === 'ar'
                ? 'من خلال تقديم مبردات المياه ومبردات الهواء المتقدمة، وأنظمة التكييف المركزية واسعة النطاق، نوفر حلولاً موثوقة وعالية الكفاءة للتحكم في المناخ وتبريد العمليات للمجمعات التجارية ومراكز البيانات ومشاريع تبريد المناطق والمستشفيات تحت أصعب الظروف المناخية الصحراوية.'
                : 'Providing advanced water-cooled chillers, air-cooled chillers, and large-scale central HVAC systems, we engineer reliable climate control and process cooling solutions designed for commercial developments, data centers, district cooling, and harsh desert environments.'}
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
                  ? 'حلول هندسية متقدمة للتكييف المركزي وتبريد العمليات'
                  : 'Engineering Solutions for Large-Scale HVAC & Chillers'}
              </h2>
              <p className="text-slate-100 text-sm leading-relaxed">
                {locale === 'ar'
                  ? 'نقدم مبردات طاردة مركزية ومبردات لولبية ومضخات حرارية موفرة للطاقة مصممة خصيصاً للبيئات الصحراوية والمشاريع الضخمة.'
                  : 'Delivering advanced centrifugal chillers, screw chillers, mission-critical cooling, and energy-saving heat pumps engineered for extreme desert ambient conditions.'}
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
                  <div className="absolute top-4 right-4 z-20 text-[11px] font-bold text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 tracking-wider">
                    {item.num}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title[locale]} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
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
              <div className="flex-1 max-w-xs bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-brand-primary h-full transition-all duration-300 rounded-full"
                  style={{ width: `${Math.max(12, scrollProgress * 100)}%` }}
                ></div>
              </div>

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

      {/* 3. Trusted Technology Partner Section (Kirloskar Chillers) */}
      <section className="py-12 px-4 max-w-[1360px] mx-auto my-4 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="lg:col-span-6 space-y-4 text-start">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'شركاؤنا' : 'PARTNERS'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {locale === 'ar'
                ? 'شريك تكنولوجيا موثوق يقود التميز في التكييف والمبردات'
                : 'Trusted Technology Partner Driving HVAC Excellence'}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-xl">
              {locale === 'ar'
                ? 'نتعاون مع كيرلوسكار تشيلرز (Kirloskar Chillers) لتقديم مبردات مياه ومبردات هواء موثوقة وموفرة للطاقة ومصممة لتحمل المناخ الصحراوي القاسي.'
                : 'We partner with Kirloskar Chillers to deliver validated, energy-efficient water-cooled and air-cooled chillers built to withstand extreme climatic conditions.'}
            </p>
            <div className="pt-2">
              <Link
                to={localizedPath('/partners/kirloskar-chillers')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider"
              >
                {locale === 'ar' ? 'استكشف كيرلوسكار تشيلرز' : 'Explore Kirloskar Chillers'}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <Link
              to={localizedPath('/solutions/hvac-solutions/kirloskar-chillers')}
              className="bg-white border border-slate-200/80 hover:border-brand-primary/60 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-center w-[280px] sm:w-[320px] h-[140px] sm:h-[150px] group overflow-hidden"
              title="Kirloskar Chillers"
            >
              <img
                src="/PARTNERS LOGO/KCPL.jpg"
                alt="Kirloskar Chillers"
                className="h-16 sm:h-20 w-auto max-w-[85%] object-contain scale-100 group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Industries We Serve Section */}
      <section className="py-16 px-4 max-w-[1360px] mx-auto my-6 font-sans">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {locale === 'ar' ? 'القطاعات' : 'SECTORS'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {locale === 'ar' ? 'القطاعات التي نخدمها' : 'Industries we serve'}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {locale === 'ar'
              ? 'تغطي خبرتنا الهندسية قطاعات متخصصة متعددة، لتقديم حلول تكييف ومبردات مثالية تلبي أدق المتطلبات التشغيلية.'
              : 'Our engineering experience covers multiple specialized sectors, delivering optimized HVAC solutions for strict requirements.'}
          </p>
        </div>

        <div className="flex items-center border border-slate-200 rounded-xl overflow-x-auto scrollbar-none bg-white shadow-xs mb-8">
          {industries.map((ind, index) => {
            const isActive = activeIndustryIndex === index
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryIndex(index)}
                className={`flex-1 min-w-[200px] py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-center transition-all cursor-pointer whitespace-nowrap border-r last:border-r-0 border-slate-200 ${
                  isActive
                    ? 'bg-brand-primary text-white shadow-inner'
                    : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                {ind.tabName[locale]}
              </button>
            )
          })}
        </div>

        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 text-start">
              <span className="text-xs font-extrabold text-brand-primary tracking-widest uppercase block">
                {currentSector.tag[locale]}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {currentSector.title[locale]}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentSector.desc[locale]}
              </p>

              <div className="space-y-3 pt-2">
                {currentSector.features[locale].map((feat, fidx) => (
                  <div key={fidx} className="flex items-start gap-3 text-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to={localizedPath('/contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all duration-300"
                >
                  <span>{locale === 'ar' ? 'تواصل مع مهندسينا' : 'Consult Our Engineers'}</span>
                  {dir === 'rtl' ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md h-[300px] sm:h-[380px] w-full">
                <img
                  src={currentSector.image}
                  alt={currentSector.title[locale]}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <IndustrialChallengeCTA />

    </div>
  )
}
