import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function RefrigerationHvacSolutions() {
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
        en: 'Water-Cooled Chillers',
        ar: 'مبردات المياه المركزية'
      },
      desc: {
        en: 'High-efficiency centrifugal and screw chillers engineered for large-scale process and district cooling.',
        ar: 'مبردات طاردة مركزية ولولبية عالية الكفاءة مصممة لتبريد العمليات الصناعية وتبريد المناطق واسع النطاق.'
      },
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '02 / 08',
      title: {
        en: 'Air-Cooled Chillers',
        ar: 'مبردات الهواء المدمجة'
      },
      desc: {
        en: 'Robust, compact air-cooled chiller systems engineered to withstand severe desert ambient temperatures.',
        ar: 'أنظمة مبردات مدمجة مبردة بالهواء مصممة خصيصاً لتحمل درجات الحرارة المرتفعة والبيئات الصحراوية القاسية.'
      },
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '03 / 08',
      title: {
        en: 'Ammonia Screw Packages',
        ar: 'حزم ضواغط الأمونيا اللولبية'
      },
      desc: {
        en: 'Heavy-duty natural refrigerant screw compressor packages delivering superior COP and eco-compliance.',
        ar: 'حزم ضواغط لولبية متينة تعمل بالمبردات الطبيعية وتوفر أعلى معامل أداء تشغيلي مع الامتثال البيئي.'
      },
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '04 / 08',
      title: {
        en: 'Cold Storage & Blast Freezers',
        ar: 'غرف التبريد والتجميد السريع'
      },
      desc: {
        en: 'Turnkey industrial cold room engineering, spiral freezers, and deep-freeze logistics infrastructure.',
        ar: 'هندسة غرف التبريد الصناعية الجاهزة للتشغيل، ومجمدات التبريد السريع، وبنية سلاسل الإمداد المبردة.'
      },
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '05 / 08',
      title: {
        en: 'Process Gas Cooling',
        ar: 'تبريد غازات العمليات الصناعية'
      },
      desc: {
        en: 'Custom-built refrigeration systems for petrochemical refineries, gas recovery, and chemical synthesis.',
        ar: 'أنظمة تبريد مخصصة لمصافي البتروكيماويات، واستخلاص الغازات، وعمليات التصنيع الكيميائي الدقيقة.'
      },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '06 / 08',
      title: {
        en: 'Evaporative Condensers',
        ar: 'المكثفات التبخيرية وأبراج التبريد'
      },
      desc: {
        en: 'Advanced heat rejection systems offering low water consumption and maximum thermodynamic efficiency.',
        ar: 'أنظمة متقدمة للتخلص من الحرارة توفر استهلاكاً منخفضاً للمياه وكفاءة ديناميكية حرارية قصوى.'
      },
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '07 / 08',
      title: {
        en: 'District Cooling Equipment',
        ar: 'معدات محطات تبريد المناطق'
      },
      desc: {
        en: 'Large tonnage modular chillers and thermal energy storage solutions for central district energy plants.',
        ar: 'مبردات نمطية ذات سعة أطنان فائقة وحلول تخزين الطاقة الحرارية لمحطات تبريد المناطق المركزية.'
      },
      image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '08 / 08',
      title: {
        en: 'Retrofit & Energy Auditing',
        ar: 'التحديث وتدقيق كفاءة الطاقة'
      },
      desc: {
        en: 'Compressor overhauls, refrigerant conversions, and smart automation retrofits maximizing plant lifecycle.',
        ar: 'عمرات شاملة للضواغط، وتحويل وسائط التبريد، وتحديثات التحكم الذكي لإطالة العمر التشغيلي للمنشأة.'
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
        en: 'Gas Turbine Inlet Cooling & Thermal Energy Storage',
        ar: 'تبريد مدخل التوربينات الغازية وتخزين الطاقة الحرارية'
      },
      desc: {
        en: 'Maximizing gas turbine power output during peak summer temperatures using inlet air cooling (TIAC) and high-density thermal storage systems.',
        ar: 'زيادة إنتاجية التوربينات الغازية في أوقات ذروة الصيف باستخدام تبريد هواء المدخل (TIAC) وأنظمة تخزين الطاقة الحرارية.'
      },
      features: {
        en: [
          'Turbine Inlet Air Cooling (TIAC) with instantaneous chilling',
          'Thermal Energy Storage (TES) ice banks for off-peak load shifting',
          'High-capacity evaporative condensers with zero-water loss systems',
          'Automated thermodynamic modulation and turbine output optimization'
        ],
        ar: [
          'أنظمة تبريد هواء مدخل التوربينات (TIAC) مع تبريد فوري',
          'بنوك تخزين الجليد (TES) لتوزيع أحمال الطاقة خارج أوقات الذروة',
          'مكثفات تبخيرية عالية السعة مع أنظمة تقليل هدر المياه',
          'تحكم ديناميكي حراري ذكي لتحسين أداء التوربينات'
        ]
      },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'water-district',
      tabName: { en: 'Water & District Cooling', ar: 'المياه وتبريد المناطق' },
      tag: { en: 'WATER & DISTRICT COOLING', ar: 'المياه وتبريد المناطق' },
      title: {
        en: 'Mega-Tonnage District Cooling & Central Chilled Water Plants',
        ar: 'محطات التبريد المركزية وتبريد المناطق واسع النطاق'
      },
      desc: {
        en: 'Providing ultra-high efficiency water-cooled centrifugal and screw chillers in series-counterflow configurations for sustainable city-scale cooling networks.',
        ar: 'توفير مبردات مياه صناعية فائقة الكفاءة بتكوينات تدفق متعاكس متتالية لشبكات تبريد المدن المستدامة.'
      },
      features: {
        en: [
          'Centrifugal chillers with VFDs up to 3,000 TR per single unit',
          'Series-counterflow plant designs delivering extreme Delta-T efficiency',
          'Integration with seawater or treated sewage effluent (TSE) cooling',
          'Centralized SCADA integration and AI-driven plant sequencing'
        ],
        ar: [
          'مبردات طاردة مركزية بمغيرات سرعة تصل إلى 3000 طن تبريد لكل وحدة',
          'تصاميم تدفق متعاكس متتالية لتحقيق أعلى فارق درجات حرارة وكفاءة',
          'تكامل مع مياه البحر أو مياه الصرف المعالجة (TSE) للتبريد',
          'تكامل مع أنظمة SCADA والتحكم الذكي لتسلسل تشغيل المحطة'
        ]
      },
      image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'pharma',
      tabName: { en: 'Food, Beverage & Pharma', ar: 'الأغذية والمشروبات والأدوية' },
      tag: { en: 'PHARMACEUTICALS & BIOTECH', ar: 'الأدوية والتقنية الحيوية' },
      title: {
        en: 'Precision Cleanroom HVAC & Ultra-Low Cascade Systems',
        ar: 'تكييف الغرف النظيفة والتبريد فائق الانخفاض'
      },
      desc: {
        en: 'Delivering cGMP-compliant cleanroom air handling systems, close-tolerance humidity control, and ultra-low temperature cascades (-80°C) for vaccine and biologic storage.',
        ar: 'توفير أنظمة مناولة هواء للغرف النظيفة مطابقة لمعايير cGMP، وتحكم دقيق بالرطوبة، وتبريد فائق الانخفاض (-80°م) لتخزين اللقاحات والمستحضرات الحيوية.'
      },
      features: {
        en: [
          'cGMP and FDA validated cleanroom air conditioning and filtration',
          'Ultra-low temperature cascade freezers (-40°C down to -80°C)',
          'Precision psychrometric control (RH ±2% and Temp ±0.5°C)',
          'Comprehensive DQ/IQ/OQ/PQ validation packages and calibration'
        ],
        ar: [
          'أنظمة تكييف وترشيح هواء للغرف النظيفة معتمدة وفق cGMP و FDA',
          'مجمدات تبريد متعاقبة فائقة الانخفاض (-40°م إلى -80°م)',
          'تحكم دقيق بالرطوبة النسبية ودرجة الحرارة (±2% رطوبة و ±0.5°م)',
          'حزم توثيق واعتماد شاملة لجودة التركيب والتشغيل (IQ/OQ)'
        ]
      },
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'metals-heavy',
      tabName: { en: 'Metals, Mining & Heavy Industry', ar: 'المعادن والتعدين والصناعات الثقيلة' },
      tag: { en: 'METALS, MINING & HEAVY INDUSTRY', ar: 'المعادن والتعدين والصناعات الثقيلة' },
      title: {
        en: 'Heavy Process Fluid Chillers & Extreme Ambient Cooling',
        ar: 'تبريد سوائل العمليات الثقيلة والمناخات القاسية'
      },
      desc: {
        en: 'Providing robust closed-loop process cooling for blast furnaces, metal extrusion, plastics molding, and severe-environment control room pressurization.',
        ar: 'توفير حلول تبريد سوائل مغلقة الدائرة لأفران الصهر، وسحب المعادن، وقوالب البلاستيك، وضغط غرف التحكم في البيئات القاسية.'
      },
      features: {
        en: [
          'Heavy-duty air-cooled and water-cooled closed-loop fluid chillers',
          'Corrosion-resistant copper-nickel and epoxy-coated coils',
          'Continuous duty operation in desert temperatures up to 55°C',
          'Redundant dual-circuit compressors and automated failover pumps'
        ],
        ar: [
          'مبردات سوائل مغلقة الدائرة مبردة بالهواء والماء عالية التحمل',
          'ملفات نحاس-نيكل وطلاءات إيبوكسي مقاومة للأملاح والتآكل',
          'تشغيل مستمر وموثوق في درجات حرارة صحراوية تصل إلى 55 مئوية',
          'ضواغط مزدوجة الدائرة ومضخات تحويل احتياطية أوتوماتيكية'
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
            alt="Refrigeration & HVAC Solutions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-6 relative z-20 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar'
                ? 'الرئيسية / الحلول الصناعية / حلول التبريد والتكييف'
                : 'HOME / INDUSTRIAL SOLUTIONS / REFRIGERATION & HVAC SOLUTIONS'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {locale === 'ar' ? 'حلول التبريد والتكييف' : 'Refrigeration & HVAC Solutions'}
            </h1>
            <p className="text-slate-200 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              {locale === 'ar'
                ? 'من خلال تقديم أنظمة التبريد الصناعي وتبريد العمليات وأنظمة التكييف واسعة النطاق، نوفر حلولاً متكاملة تدعم العمليات الحيوية بأعلى كفاءة واستمرارية تشغيل. تساعد تقنياتنا وخبراتنا الهندسية قطاعات مثل الأغذية والمشروبات، وسلاسل التبريد، والبتروكيماويات، وتبريد المناطق على تحقيق أعلى معايير الاستدامة والموثوقية.'
                : 'Delivering comprehensive industrial refrigeration, process cooling, and large-scale HVAC systems, we provide robust solutions engineered for high-efficiency temperature control in demanding industrial and commercial environments. Our proven technologies support critical processes across Food & Beverage, Cold Chain, Petrochemicals, and District Cooling with maximum reliability.'}
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
                  ? 'حلول هندسية متقدمة للتبريد الصناعي والتكييف'
                  : 'Engineering Solutions for Critical Cooling & Refrigeration'}
              </h2>
              <p className="text-slate-100 text-sm leading-relaxed">
                {locale === 'ar'
                  ? 'نقدم مبردات صناعية متقدمة وحزم تبريد وأنظمة أمونيا وحلول تبريد موفرة للطاقة مصممة للعمل في أصعب الظروف البيئية.'
                  : 'Delivering advanced process chillers, refrigeration packages, ammonia systems, and energy-efficient cooling solutions engineered for continuous, high-ambient desert operations.'}
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

      {/* 3. Trusted Technology Partners Section (2 Partners: Kirloskar Pneumatic & Kirloskar Chillers) */}
      <section className="py-12 px-4 max-w-[1360px] mx-auto my-4 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm">
          {/* Left Text Info */}
          <div className="lg:col-span-6 space-y-4 text-start">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'شركاؤنا' : 'PARTNERS'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {locale === 'ar'
                ? 'شركاء تكنولوجيا موثوقون يقودون التميز في التبريد'
                : 'Trusted Technology Partners Driving Cooling Excellence'}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-xl">
              {locale === 'ar'
                ? 'نتعاون مع كبرى الشركات العالمية في مجال التبريد والتكييف الصناعي لتقديم معدات موثوقة وموفرة للطاقة تلبي معايير الجودة الصارمة ومصممة لتحمل المناخ الصحراوي القاسي.'
                : 'We collaborate with world-renowned refrigeration and HVAC leaders to deliver validated, energy-efficient cooling solutions built to withstand extreme climatic conditions.'}
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

          {/* Right 2 Partner Logo Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Kirloskar Pneumatic */}
            <Link
              to={localizedPath('/solutions/refrigeration-hvac-solutions/kirloskar-pneumatic')}
              className="bg-white border border-slate-200/80 hover:border-brand-primary/60 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-center h-[140px] sm:h-[150px] group overflow-hidden"
              title="Kirloskar Pneumatic"
            >
              <img
                src="/PARTNERS LOGO/KIRLOSKAR PNEUMATIC.jpg"
                alt="Kirloskar Pneumatic"
                className="h-16 sm:h-20 w-auto max-w-[85%] object-contain scale-100 group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Kirloskar Chillers */}
            <Link
              to={localizedPath('/solutions/refrigeration-hvac-solutions/kirloskar-chillers')}
              className="bg-white border border-slate-200/80 hover:border-brand-primary/60 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-center h-[140px] sm:h-[150px] group overflow-hidden"
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

      {/* 4. Industries We Serve Section (Matching Exact Screenshot UI) */}
      <section className="py-16 px-4 max-w-[1360px] mx-auto my-6 font-sans">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {locale === 'ar' ? 'القطاعات' : 'SECTORS'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {locale === 'ar' ? 'القطاعات التي نخدمها' : 'Industries we serve'}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {locale === 'ar'
              ? 'تغطي خبرتنا الهندسية قطاعات متخصصة متعددة، لتقديم حلول مثالية تلبي أدق وأعلى المتطلبات التشغيلية.'
              : 'Our engineering experience covers multiple specialized sectors, delivering optimized solutions for strict requirements.'}
          </p>
        </div>

        {/* Tab Navigation Bar (Single Connected Border Pill Bar) */}
        <div className="flex items-center border border-slate-200 rounded-xl overflow-x-auto scrollbar-none bg-white shadow-xs mb-8">
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

        {/* Selected Industry Card (Left Image, Right Content matching screenshot) */}
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
                  <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                to={localizedPath('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg transition-colors text-xs sm:text-sm uppercase tracking-wider shadow-sm"
              >
                <span>{locale === 'ar' ? 'طلب استشارة هندسية للقطاع' : 'REQUEST INDUSTRY CONSULTATION'}</span>
                {dir === 'rtl' ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Call to Action Section */}
      <IndustrialChallengeCTA />

    </div>
  )
}

