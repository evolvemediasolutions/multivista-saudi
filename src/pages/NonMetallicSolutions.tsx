import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function NonMetallicSolutions() {
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
        en: 'FRP & GRP Piping Systems',
        ar: 'أنظمة أنابيب FRP و GRP'
      },
      desc: {
        en: 'High-strength, corrosion-resistant composite piping engineered for demanding process fluids.',
        ar: 'أنابيب مركبة عالية القوة ومقاومة للتآكل مصممة لنقل سوائل العمليات الصناعية الصعبة.'
      },
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '02 / 08',
      title: {
        en: 'Chemical Storage Tanks',
        ar: 'خزانات تخزين المواد الكيميائية'
      },
      desc: {
        en: 'Custom-engineered composite tanks and process vessels offering superior chemical resistance.',
        ar: 'خزانات وأوعية عمليات مركبة مصممة هندسياً لتوفير مقاومة كيميائية استثنائية.'
      },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '03 / 08',
      title: {
        en: 'Underground Tanks (UGST)',
        ar: 'خزانات التخزين تحت الأرض (UGST)'
      },
      desc: {
        en: 'Robust double-wall underground tanks engineered for fuel, chemical, and effluent containment.',
        ar: 'خزانات متينة مزدوجة الجدار تحت الأرض مصممة لاحتواء الوقود والكيماويات ومياه الصرف.'
      },
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '04 / 08',
      title: {
        en: 'Molded & Pultruded Gratings',
        ar: 'حواجز وشبكات FRP المقاومة'
      },
      desc: {
        en: 'Slip-resistant, non-corrosive FRP gratings and walkways for hazardous plant floors.',
        ar: 'حواجز وممرات مشاة من FRP مقاومة للانزلاق والتآكل لأرضيات المصانع والمواقع الخطرة.'
      },
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '05 / 08',
      title: {
        en: 'FRP Cable Trays & Raceways',
        ar: 'حوامل كابلات ومسارات FRP'
      },
      desc: {
        en: 'Non-conductive, fire-retardant cable management systems designed for chemical zones.',
        ar: 'أنظمة إدارة كابلات غير موصلة للكهرباء ومثبطة للهب مصممة للمناطق الكيميائية والبحرية.'
      },
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '06 / 08',
      title: {
        en: 'Structural Pultruded Profiles',
        ar: 'مقاطع وهياكل سحب الألياف الإنشائية'
      },
      desc: {
        en: 'Lightweight, ultra-durable composite beams, channels, and structural sections.',
        ar: 'كمرات وقنوات وهياكل مقطعية مركبة خفيفة الوزن وفائقة المتانة كبديل للصلب.'
      },
      image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '07 / 08',
      title: {
        en: 'FRP Ladders & Safety Cages',
        ar: 'سلالم وأقفاص أمان صناعية'
      },
      desc: {
        en: 'Non-sparking, dielectric safety ladders designed for safe access in harsh facilities.',
        ar: 'سلالم أمان عازلة كهربائياً وغير مولدة للشرر للوصول الآمن في المنشآت الصناعية.'
      },
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '08 / 08',
      title: {
        en: 'Lighting Poles & Meter Boxes',
        ar: 'أعمدة الإنارة وصناديق العدادات'
      },
      desc: {
        en: 'Weatherproof, corrosion-proof lighting poles and enclosures for municipal and industrial utilities.',
        ar: 'أعمدة إنارة وصناديق كهربائية مقاومة للعوامل الجوية والتآكل للمرافق البلدية والصناعية.'
      },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    }
  ]

  const industries = [
    {
      id: 'chemical-petrochemical',
      tabName: { en: 'Chemical & Petrochemical', ar: 'الكيماويات والبتروكيماويات' },
      tag: { en: 'CHEMICAL & PETROCHEMICAL', ar: 'الكيماويات والبتروكيماويات' },
      title: {
        en: 'Extreme Corrosion Resistance for Aggressive Chemical Media',
        ar: 'مقاومة تآكل فائقة للوسائط والعمليات الكيميائية القاسية'
      },
      desc: {
        en: 'Providing non-metallic composite piping, dual-laminate reactors, scrubbers, and acid storage tanks engineered to resist acids, alkalis, solvents, and corrosive process vapors across severe petrochemical operating units.',
        ar: 'توفير أنابيب مركبة غير معدنية، ومفاعلات ثنائية التصفيح، وأبراج غسيل غاز، وخزانات تخزين أحماض مصممة لمقاومة الأحماض والقلويات والمذيبات وأبخرة العمليات المسببة للتآكل في وحدات التشغيل البتروكيماوية.'
      },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      features: {
        en: [
          'High Chemical Inertness to Concentrated Acids & Alkalis',
          'Dual-Laminate & Custom Vinyl Ester Resin Systems',
          'Zero Corrosion-Induced Wall Degradation or Wall Thinning',
          'Seamless Integration with Existing Plant Flanges and Systems'
        ],
        ar: [
          'خمول كيميائي فائق تجاه الأحماض والقلويات المركزة',
          'أنظمة تصفيح مزدوج وراتنجات فينيل إستر المتخصصة',
          'انعدام تآكل الجدران أو نقص سماكة الأنابيب عبر الزمن',
          'تكامل سلس مع الفلانشات والأنظمة القائمة في المصانع'
        ]
      }
    },
    {
      id: 'water-wastewater',
      tabName: { en: 'Water & Wastewater Treatment', ar: 'معالجة المياه والصرف' },
      tag: { en: 'WATER & WASTEWATER', ar: 'معالجة المياه ومياه الصرف الصحي' },
      title: {
        en: 'Durable, Long-Life Infrastructure for Desalination & Sewage',
        ar: 'بنية تحتية متينة وطويلة العمر لمحطات التحلية ومعالجة الصرف'
      },
      desc: {
        en: 'Delivering large-diameter GRP intake headers, sea water outfall lines, sewage manholes, weir troughs, and chemical dosing tanks impervious to microbial corrosion and chloride attack in modern treatment facilities.',
        ar: 'توريد خطوط سحب ومآخذ مياه البحر ذات الأقطار الكبيرة من GRP، وخطوط التصريف، وغرف التفتيش، ومسارات المياه، وخزانات حقن الكيماويات المحصنة ضد التآكل الميكروبي وهجمات الكلوريد في محطات المعالجة الحديثة.'
      },
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      features: {
        en: [
          'High Hydraulic Flow Coefficients (Low Friction Loss)',
          '50+ Year Design Life in Aggressive Saline & Sewage Media',
          'Biogenic Sulfide & Microbially Induced Corrosion Immunity',
          'Lightweight Modular Installation with Minimal Heavy Craneage'
        ],
        ar: [
          'معاملات تدفق هيدروليكي ممتازة (انخفاض فواقد الاحتكاك)',
          'عمر تصميمي يتجاوز 50 عاماً في البيئات المالحة والصرف الصحي',
          'حصانة تامة ضد كبريتيد الهيدروجين والتآكل الميكروبي',
          'تركيب نمطي خفيف الوزن يقلل الحاجة للرافعات الثقيلة'
        ]
      }
    },
    {
      id: 'oil-gas-offshore',
      tabName: { en: 'Oil & Gas / Offshore', ar: 'النفط والغاز والمشاريع البحرية' },
      tag: { en: 'OIL & GAS / OFFSHORE', ar: 'النفط والغاز والمشاريع البحرية' },
      title: {
        en: 'Lightweight Composite Solutions for Marine & Subsea Platforms',
        ar: 'حلول مركبة خفيفة الوزن للمنصات البحرية والبيئات القاعية'
      },
      desc: {
        en: 'Delivering fire-resistant FRP deck gratings, offshore handrail systems, high-pressure composite flowlines, and seawater cooling lines engineered to survive salt spray, UV exposure, and intense offshore wave action.',
        ar: 'توفير حواجز شبكية لأرضيات المنصات مقاومة للحريق، وأنظمة درابزين بحرية، وخطوط تدفق مركبة عالية الضغط، وخطوط تبريد بمياه البحر مصممة للصمود أمام رذاذ الملح والتعرض للأشعة فوق البنفسجية وأمواج البحر العاتية.'
      },
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      features: {
        en: [
          'Up to 70% Weight Reduction Compared to Steel Structures',
          'USCG Level-1 & Level-2 Fire-Retardant Certified Materials',
          'Superior Resistance to Salt Spray, Marine Atmospheres & UV',
          'Zero Hot Work Permitting Required for Maintenance & Cutting'
        ],
        ar: [
          'تخفيض في الوزن يصل إلى 70% مقارنة بالهياكل الفولاذية',
          'مواد معتمدة لمقاومة الحريق بمعايير USCG Level-1 & Level-2',
          'مقاومة فائقة لرذاذ الملح والأجواء البحرية والأشعة فوق البنفسجية',
          'عدم الحاجة لتصاريح العمل الساخن أثناء الصيانة والقص'
        ]
      }
    },
    {
      id: 'power-desalination',
      tabName: { en: 'Power Generation & Desalination', ar: 'توليد الطاقة ومحطات التحلية' },
      tag: { en: 'POWER GENERATION & DESALINATION', ar: 'توليد الطاقة ومحطات التحلية' },
      title: {
        en: 'Thermal & Chemical Stability for Critical Utility Plants',
        ar: 'استقرار حراري وكيميائي لمحطات الطاقة والمرافق الحيوية'
      },
      desc: {
        en: 'Supplying circulating water cooling lines, flue gas desulfurization (FGD) scrubbers, demineralized water vessels, and non-conductive cable support systems for thermal, combined-cycle, and nuclear power utilities.',
        ar: 'توريد خطوط مياه التبريد الدوارة، وأبراج إزالة الكبريت من غاز العادم (FGD)، وأوعية المياه منزوعة المعادن، وأنظمة دعم الكابلات العازلة لمحطات التوليد الحرارية والدورة المركبة والمحطات النووية.'
      },
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      features: {
        en: [
          'High Operating Temperature Stability up to 180°C',
          'Electrically Non-Conductive & Dielectric Protection',
          'Erosion Resistance to Slurries & Particulate Flow',
          'Optimized Pressure Rating for High Discharge Headers'
        ],
        ar: [
          'استقرار حراري عالي في درجات تشغيل تصل إلى 180° مئوية',
          'حماية عازلة وغير موصلة للكهرباء لأمان الأفراد',
          'مقاومة ممتازة للحت الميكانيكي مع الملاط والتدفق الحبيبي',
          'تصنيفات ضغط محسنة لخطوط الضخ ومجمعات التفريغ العالية'
        ]
      }
    },
    {
      id: 'infrastructure-utilities',
      tabName: { en: 'Infrastructure & Utilities', ar: 'البنية التحتية والمرافق العامة' },
      tag: { en: 'INFRASTRUCTURE & UTILITIES', ar: 'البنية التحتية والمرافق العامة' },
      title: {
        en: 'Low-Maintenance Structural FRP for Smart Cities & Municipalities',
        ar: 'هياكل FRP منخفضة الصيانة للمدن الذكية والمشاريع البلدية'
      },
      desc: {
        en: 'Engineered composite light poles, utility meter boxes, pedestrian bridge components, and architectural louvers delivering aesthetic excellence, vandal resistance, and total rust immunity in municipal environments.',
        ar: 'أعمدة إنارة مركبة ومصممة هندسياً، وصناديق عدادات المرافق، ومكونات جسور المشاة، وواجهات معمارية توفر جمالية عالية ومقاومة للتخريب وحصانة كاملة ضد الصدأ في البيئات الحضرية.'
      },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      features: {
        en: [
          'High Impact Strength & Passive Safety Breakaway Poles',
          'UV-Stabilized Pigmentation with Zero Repainting Costs',
          'Radio Frequency Transparent for Smart Metering & 5G',
          'Custom Geometric & Structural Architectural Profiles'
        ],
        ar: [
          'مقاومة صدمات عالية وأعمدة إنارة ذات أمان سلبي عند الاصطدام',
          'ألوان مثبتة ضد الأشعة فوق البنفسجية دون الحاجة لإعادة الطلاء',
          'نفاذية عالية للترددات الراديوية للعدادات الذكية وشبكات 5G',
          'مقاطع معمارية وهيكلية مصممة حسب متطلبات المشروع'
        ]
      }
    },
    {
      id: 'marine-ports',
      tabName: { en: 'Marine & Ports', ar: 'الموانئ والصناعات البحرية' },
      tag: { en: 'MARINE & PORTS', ar: 'الموانئ والصناعات البحرية' },
      title: {
        en: 'Seawater-Proof Jetty, Dock & Berthing Facilities',
        ar: 'مرافق أرصفة وموانئ بحرية محصنة ضد مياه البحر المالحة'
      },
      desc: {
        en: 'Deploying non-corrosive floating dock decking, composite piling fenders, jetty catwalks, and fueling line enclosures built to withstand continuous splash zones, tidal variations, and marine organisms.',
        ar: 'تطبيق أرضيات للأرصفة العائمة مقاومة للتآكل، ومصدات ركائز مركبة، وممرات مشاة للأرصفة البحرية، وحاويات لخطوط التزود بالوقود مصممة لتحمل مناطق رذاذ الأمواج المستمرة والمد والجزر والكائنات البحرية.'
      },
      image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80',
      features: {
        en: [
          'Zero Degradation from Barnacles & Marine Growth Exposure',
          'Non-Slip High Traction Surfaces Even When Submerged',
          'Elastic Impact Energy Absorption for Vessel Berthing',
          'Significant Reduction in Port Lifecycle Maintenance Costs'
        ],
        ar: [
          'انعدام التحلل أو التلف جراء الكائنات البحرية الملتصقة',
          'أسطح مانعة للانزلاق ذات احتكاك عالي حتى عند الغمر بالماء',
          'امتصاص مرن لطاقة الصدمات أثناء رسو السفن والقوارب',
          'خفض ملحوظ وكبير في تكاليف الصيانة الدورية للموانئ'
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
            src="https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1200&q=80"
            alt="Non Metallic Solution"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-6 relative z-20 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar'
                ? 'الرئيسية / الحلول الصناعية / حلول المواد غير المعدنية'
                : 'HOME / INDUSTRIAL SOLUTIONS / NON METALLIC SOLUTION'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {locale === 'ar' ? 'حلول المواد غير المعدنية' : 'Non Metallic Solution'}
            </h1>
            <p className="text-slate-200 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              {locale === 'ar'
                ? 'من خلال تقديم أنظمة متكاملة من المواد غير المعدنية والبلاستيك المقوى بالألياف والزجاج (FRP/GRP)، نوفر حلولاً متطورة للأنابيب المقاومة للتآكل وخزانات المواد الكيميائية والحواجز والحلول الإنشائية المصممة للبيئات الصناعية والبحرية القاسية. تساعد تقنياتنا الهندسية وخبراتنا قطاعات مثل النفط والغاز، والصناعات الكيماوية، ومعالجة المياه، ومحطات التحلية على تحقيق عمليات آمنة ومستدامة وخالية من التآكل.'
                : 'Delivering comprehensive non-metallic, FRP, and GRP composite systems, we provide advanced corrosion-resistant piping, chemical storage tanks, gratings, and structural solutions engineered for harsh industrial and offshore environments. Our innovative composite technologies and domain expertise empower industries including Chemical, Petrochemicals, Oil & Gas, Water & Wastewater, and Power Generation to build corrosion-free, sustainable, and dependable operations.'}
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
                  ? 'نقدم تقنيات الأنابيب المركبة، وخزانات المواد الكيميائية، والهياكل المقاومة للتآكل التي تدعم استدامة العمليات الصناعية.'
                  : 'Delivering composite piping, chemical containment, gratings, and structural technologies that support corrosion-free and future-ready industrial operations.'}
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
                ? 'نتعاون مع قادة تصنيع المركبات البلاستيكية غير المعدنية لتقديم حلول معتمدة تلبي أعلى معايير الجودة ومقاومة التآكل في أصعب البيئات الصناعية.'
                : 'We collaborate with global non-metallic and composite pioneers to deliver validated engineering systems that solve severe corrosion challenges across the region.'}
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

          {/* Right Partner Logo Card (EPP Composites) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Link
              to={localizedPath('/solutions/non-metallic-solutions/epp-composites')}
              className="bg-white border border-slate-200/80 hover:border-brand-primary/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center w-full max-w-[280px] sm:max-w-[320px] h-[150px] group"
            >
              <img
                src="/PARTNERS LOGO/EPP.jpg"
                alt="EPP Composites"
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
              ? 'تغطي خبرتنا الهندسية في المواد غير المعدنية قطاعات متعددة، لتقديم حلول متينة تقضي تماماً على مشاكل الصدأ والتآكل.'
              : 'Our engineering expertise in non-metallic materials spans critical industries, delivering composite solutions that permanently eliminate corrosion.'}
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
      <IndustrialChallengeCTA bgImage="https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1200&q=80" />
    </div>
  )
}
