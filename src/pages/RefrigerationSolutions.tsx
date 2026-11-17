import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function RefrigerationSolutions() {
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
        en: 'Ammonia Screw Compressor Packages',
        ar: 'حزم ضواغط الأمونيا اللولبية'
      },
      desc: {
        en: 'Heavy-duty natural refrigerant screw compressor packages delivering superior COP and zero-GWP eco-compliance.',
        ar: 'حزم ضواغط لولبية متينة تعمل بالمبردات الطبيعية وتوفر أعلى معامل أداء تشغيلي مع الامتثال البيئي.'
      },
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '02 / 06',
      title: {
        en: 'Cold Storage & Turnkey Blast Freezers',
        ar: 'غرف التبريد الصناعية والتجميد السريع'
      },
      desc: {
        en: 'Turnkey industrial cold room engineering, spiral blast freezers, and deep-freeze logistics infrastructure.',
        ar: 'هندسة غرف التبريد الصناعية الجاهزة للتشغيل، ومجمدات التبريد السريع، وبنية سلاسل الإمداد المبردة.'
      },
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '03 / 06',
      title: {
        en: 'Process Gas Refrigeration Skids',
        ar: 'تبريد غازات العمليات الصناعية'
      },
      desc: {
        en: 'Custom-built refrigeration packages for petrochemical refineries, gas recovery, and chemical synthesis.',
        ar: 'أنظمة تبريد مخصصة لمصافي البتروكيماويات، واستخلاص الغازات، وعمليات التصنيع الكيميائي الدقيقة.'
      },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '04 / 06',
      title: {
        en: 'Low-Temperature Brine & Glycol Systems',
        ar: 'أنظمة تبريد المحاليل منخفضة الحرارة'
      },
      desc: {
        en: 'Engineered secondary refrigerant systems delivering continuous cooling down to sub-zero industrial process requirements.',
        ar: 'أنظمة وسائط تبريد ثانوية متقدمة توفر تبريداً مستمراً يلبي متطلبات العمليات الصناعية تحت الصفر.'
      },
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '05 / 06',
      title: {
        en: 'Evaporative Condensers & Heat Rejection',
        ar: 'المكثفات التبخيرية وأبراج التبريد'
      },
      desc: {
        en: 'Advanced heat rejection systems offering ultra-low water consumption and maximum thermodynamic efficiency in hot climates.',
        ar: 'أنظمة متقدمة للتخلص من الحرارة توفر استهلاكاً منخفضاً للمياه وكفاءة ديناميكية حرارية قصوى في المناخ الحار.'
      },
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '06 / 06',
      title: {
        en: 'Retrofit & Natural Refrigerant Conversions',
        ar: 'التحديث وتحويل وسائط التبريد'
      },
      desc: {
        en: 'Comprehensive compressor overhauls, eco-refrigerant conversions, and smart automation retrofits maximizing lifecycle.',
        ar: 'عمرات شاملة للضواغط، وتحويل وسائط التبريد الصديقة للبيئة، وتحديثات التحكم الذكي لإطالة العمر التشغيلي.'
      },
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
    }
  ]

  const industries = [
    {
      id: 'food-beverage',
      tabName: { en: 'Food, Beverage & Cold Chain', ar: 'الأغذية والمشروبات وسلاسل التبريد' },
      tag: { en: 'FOOD, BEVERAGE & COLD CHAIN', ar: 'الأغذية والمشروبات وسلاسل التبريد' },
      title: {
        en: 'Preserving Freshness & Food Safety Across Cold Chains',
        ar: 'الحفاظ على النضارة وسلامة الأغذية عبر سلاسل التبريد'
      },
      desc: {
        en: 'Deploying ultra-reliable ammonia screw compressor packages, automated spiral blast freezers, and hygienic cold rooms to maintain critical temperatures from processing to distribution.',
        ar: 'توفير حزم ضواغط أمونيا لولبية موثوقة ومجمدات حلزونية سريعة وغرف تبريد صحية للحفاظ على درجات الحرارة الحيوية من التصنيع حتى التوزيع.'
      },
      features: {
        en: [
          'High COP ammonia and eco-refrigerant screw compressor packages',
          'Automated spiral blast freezers and multi-temperature staging rooms',
          'Hygienic clean air distribution and AHUs for food processing areas',
          '24/7 continuous thermal logging and automated alarm monitoring'
        ],
        ar: [
          'حزم ضواغط أمونيا لولبية ذات كفاءة طاقة استثنائية',
          'مجمدات حلزونية سريعة وغرف تهيئة متعددة درجات الحرارة',
          'أنظمة مناولة وتوزيع هواء صحية مخصصة لمناطق تصنيع الأغذية',
          'تسجيل حراري مستمر على مدار الساعة مع أنظمة إنذار أوتوماتيكية'
        ]
      },
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'petrochemical',
      tabName: { en: 'Oil, Gas & Petrochemical', ar: 'النفط والغاز والبتروكيماويات' },
      tag: { en: 'OIL, GAS & PETROCHEMICAL', ar: 'النفط والغاز والبتروكيماويات' },
      title: {
        en: 'Severe-Duty Process Refrigeration & Gas Liquefaction',
        ar: 'تبريد العمليات الشاقة وإسالة الغازات البتروكيماوية'
      },
      desc: {
        en: 'Custom engineered refrigeration skids built to API standards for boil-off gas reliquefaction, chemical reactor cooling, and explosive hazardous area operations.',
        ar: 'حزم تبريد متخصصة مصممة وفق معايير API لإعادة إسالة الغازات المتبخرة، وتبريد المفاعلات الكيميائية، والتشغيل في المناطق المصنفة الخطرة.'
      },
      features: {
        en: [
          'API 619 compliant screw refrigeration skids with explosion-proof controls',
          'Titanium and duplex corrosion-resistant heat exchangers for sour gas',
          'High-ambient desert cooling design with sand separation filters',
          'Boil-off gas (BOG) recovery and hydrocarbon condensation packages'
        ],
        ar: [
          'حزم تبريد لولبية مطابقة لمعيار API 619 مع تحكم مقاوم للانفجار',
          'مبادلات حرارية مقاومة للتآكل من التيتانيوم والدوبلكس للغازات الحامضية',
          'تصميم مخصص للحرارة الصحراوية العالية مع فلاتر فصل الرمال',
          'حزم استخلاص الغازات المتبخرة (BOG) وتكثيف الهيدروكربونات'
        ]
      },
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'power-energy',
      tabName: { en: 'Power & Energy Utilities', ar: 'المرافق والطاقة' },
      tag: { en: 'POWER & ENERGY UTILITIES', ar: 'المرافق والطاقة' },
      title: {
        en: 'Thermal Energy Storage & Industrial Process Chill',
        ar: 'تخزين الطاقة الحرارية والتبريد الصناعي'
      },
      desc: {
        en: 'Maximizing power generation efficiency and industrial process reliability with ice bank thermal storage and heavy-duty refrigeration systems.',
        ar: 'زيادة كفاءة توليد الطاقة وموثوقية العمليات الصناعية باستخدام أنظمة تخزين الطاقة الحرارية بالجليد ومعدات التبريد الشاقة.'
      },
      features: {
        en: [
          'Thermal Energy Storage (TES) ice banks for off-peak load shifting',
          'High-capacity evaporative condensers with reduced water loss',
          'Continuous sub-zero temperature delivery for industrial reactors',
          'SCADA integration and automated refrigeration modulation'
        ],
        ar: [
          'بنوك تخزين الجليد (TES) لتوزيع أحمال الطاقة خارج أوقات الذروة',
          'مكثفات تبخيرية عالية السعة مع أنظمة تقليل هدر المياه',
          'تبريد مستمر تحت الصفر للمفاعلات والعمليات الصناعية',
          'تكامل مع أنظمة SCADA والتحكم الأوتوماتيكي في التبريد'
        ]
      },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'pharma',
      tabName: { en: 'Pharmaceuticals & Bio-Storage', ar: 'الأدوية والتخزين الحيوي' },
      tag: { en: 'PHARMACEUTICALS & BIO-STORAGE', ar: 'الأدوية والتخزين الحيوي' },
      title: {
        en: 'Ultra-Low Cascade Refrigeration & Vaccine Storage',
        ar: 'التبريد فائق الانخفاض وتخزين اللقاحات الحيوية'
      },
      desc: {
        en: 'Delivering cGMP-compliant ultra-low temperature cascades (-40°C down to -80°C) with dual-redundant refrigeration for high-value pharmaceuticals.',
        ar: 'توفير أنظمة تبريد متعاقبة فائقة الانخفاض (-40°م إلى -80°م) مع أنظمة تبريد احتياطية مزدوجة للمستحضرات الصيدلانية عالية القيمة.'
      },
      features: {
        en: [
          'Ultra-low temperature cascade systems with dual backup circuits',
          'cGMP and FDA validated environmental monitoring and logging',
          'Automated alarm failover and auxiliary generator compatibility',
          'Comprehensive DQ/IQ/OQ validation documentation'
        ],
        ar: [
          'أنظمة تبريد متعاقبة فائقة الانخفاض مع دوائر احتياطية مزدوجة',
          'مراقبة بيئية وتوثيق معتمد وفق معايير cGMP و FDA',
          'أنظمة إنذار أوتوماتيكية وتوافق مع المولدات الاحتياطية',
          'حزم توثيق واعتماد شاملة لجودة التركيب والتشغيل (IQ/OQ)'
        ]
      },
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1000&q=80'
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
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80"
            alt="Refrigeration Solutions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-6 relative z-20 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar'
                ? 'الرئيسية / الحلول الصناعية / حلول التبريد'
                : 'HOME / INDUSTRIAL SOLUTIONS / REFRIGERATION SOLUTIONS'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {locale === 'ar' ? 'حلول التبريد' : 'Refrigeration Solutions'}
            </h1>
            <p className="text-slate-200 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              {locale === 'ar'
                ? 'من خلال تقديم أنظمة التبريد الصناعي، وحزم ضواغط الأمونيا اللولبية، وبنية سلاسل الإمداد المبردة، نوفر حلولاً موثوقة وعالية الكفاءة للتحكم في درجات الحرارة في العمليات الصناعية ومعالجة الأغذية والمصانع الكيميائية والبتروكيماويات.'
                : 'Delivering robust industrial refrigeration, ammonia screw compressor packages, and cold chain infrastructure, we provide high-efficiency temperature control systems engineered for demanding industrial processing, food preservation, chemical plants, and cold logistics.'}
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
                  ? 'حلول هندسية متقدمة للتبريد الصناعي وسلاسل التبريد'
                  : 'Engineering Solutions for Industrial Refrigeration'}
              </h2>
              <p className="text-slate-100 text-sm leading-relaxed">
                {locale === 'ar'
                  ? 'نقدم حزم ضواغط تبريد صناعية متقدمة وأنظمة أمونيا وحلول تبريد وتجميد موفرة للطاقة مصممة للعمل الشاق في أقسى البيئات.'
                  : 'Delivering advanced ammonia compressor packages, process refrigeration skids, and energy-efficient cold chain solutions engineered for continuous industrial operations.'}
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

      {/* 3. Trusted Technology Partner Section (Kirloskar Pneumatic) */}
      <section className="py-12 px-4 max-w-[1360px] mx-auto my-4 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="lg:col-span-6 space-y-4 text-start">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'شركاؤنا' : 'PARTNERS'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {locale === 'ar'
                ? 'شريك تكنولوجيا موثوق يقود التميز في التبريد الصناعي'
                : 'Trusted Technology Partner Driving Refrigeration Excellence'}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-xl">
              {locale === 'ar'
                ? 'نتعاون مع كيرلوسكار نيوماتيك (Kirloskar Pneumatic) لتقديم أنظمة ضواغط التبريد الصناعي وحزم الأمونيا الموثوقة والمصممة لتحمل أصعب ظروف التشغيل.'
                : 'We partner with Kirloskar Pneumatic to deliver heavy-duty industrial refrigeration compressors and natural refrigerant screw packages engineered for rigorous continuous operation.'}
            </p>
            <div className="pt-2">
              <Link
                to={localizedPath('/partners/kirloskar-pneumatic')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider"
              >
                {locale === 'ar' ? 'استكشف كيرلوسكار نيوماتيك' : 'Explore Kirloskar Pneumatic'}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <Link
              to={localizedPath('/solutions/refrigeration-solutions/kirloskar-pneumatic')}
              className="bg-white border border-slate-200/80 hover:border-brand-primary/60 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-center w-[280px] sm:w-[320px] h-[140px] sm:h-[150px] group overflow-hidden"
              title="Kirloskar Pneumatic"
            >
              <img
                src="/PARTNERS LOGO/KIRLOSKAR PNEUMATIC.jpg"
                alt="Kirloskar Pneumatic"
                className="h-16 sm:h-20 w-auto max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
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
              ? 'تغطي خبرتنا الهندسية قطاعات متخصصة متعددة، لتقديم حلول تبريد مثالية تلبي أدق المتطلبات التشغيلية.'
              : 'Our engineering experience covers multiple specialized sectors, delivering optimized refrigeration solutions for strict requirements.'}
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

