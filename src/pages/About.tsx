import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { Shield, TrendingUp, Users, Heart, Zap, Briefcase, Tag, RotateCw, Sprout } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function About() {
  const { locale } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1)
      const element = document.getElementById(targetId)
      if (element) {
        // Offset scroll for header height (approx 80px / 5rem)
        const headerOffset = 90
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }, [location])

  const timeline = [
    {
      year: '2008',
      title: { en: 'New Beginnings', ar: 'بدايات جديدة' },
      desc: {
        en: 'Expanding capabilities and creating stronger foundations for future growth. Top Tag Trading (3T) was established in Al Khobar, Saudi Arabia, to provide specialized technical components and piping elements.',
        ar: 'توسيع القدرات وبناء أسس أقوى للنمو المستقبلي. تأسست شركة تاق للتجارة (3T) في الخبر، بالمملكة العربية السعودية، لتوفير المكونات الفنية المتخصصة وعناصر الأنابيب.'
      },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2014',
      title: { en: 'Strategic Expansion', ar: 'التوسع الاستراتيجي' },
      desc: {
        en: 'Secured partnerships with major international OEMs like Rockwell Automation, introducing advanced automation solutions to the region.',
        ar: 'تأمين شراكات استراتيجية مع كبار المصنعين الأصليين على المستوى الدولي مثل روكويل أوتوميشن، وإدخال حلول الأتمتة المتقدمة إلى المنطقة.'
      },
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2018',
      title: { en: 'Engineering Capabilities', ar: 'القدرات الهندسية الكبرى' },
      desc: {
        en: 'Transitioned from a parts supplier to a comprehensive engineering solutions provider, offering full packaging and skid systems design.',
        ar: 'التحول من مورد قطع غيار إلى مزود حلول هندسية شاملة، وتقديم تصميم متكامل لأنظمة الحزم ولوحات التركيب.'
      },
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2026',
      title: { en: "Today's Standard", ar: 'معيار اليوم للتميز' },
      desc: {
        en: 'Serving as a critical partner for Saudi Arabia\'s massive industrial infrastructure expansion, aligned with Vision 2030.',
        ar: 'العمل كشريك أساسي لتوسيع البنية التحتية الصناعية الضخمة في المملكة العربية السعودية، تماشياً مع رؤية ٢٠٣٠.'
      },
      image: 'https://images.unsplash.com/photo-1531535934200-870a25721de9?auto=format&fit=crop&w=600&q=80'
    }
  ]

  const cultureCards = [
    {
      title: { en: 'Be Empowered', ar: 'كن مُمكّناً' },
      desc: {
        en: 'We encourage initiative. We trust the integrity and abilities of our people and support them in delivering distinctive customer service.',
        ar: 'نحن نشجع المبادرة. ونثق في نزاهة وقدرات موظفينا وندعمهم في تقديم خدمة عملاء متميزة وفريدة.'
      },
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: { en: 'Safety', ar: 'السلامة أولاً' },
      desc: {
        en: 'Safe is a way of living. The wellbeing and safety of our colleagues, customers and everyone we serve remains fundamental to the way we work.',
        ar: 'السلامة أسلوب حياة. تبعد رفاهية وسلامة زملائنا وعملائنا وكل من نخدمهم أمراً أساسياً في طريقة عملنا.'
      },
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: { en: 'Teamwork', ar: 'العمل الجماعي' },
      desc: {
        en: 'We believe we are stronger together. Challenges are approached collectively, combining expertise to identify and implement the best possible solution.',
        ar: 'نحن نؤمن بأننا أقوى معاً. يتم التعامل مع التحديات بشكل جماعي، من خلال دمج الخبرات لتحديد وتنفيذ أفضل الحلول الممكنة.'
      },
      icon: <Users className="h-6 w-6" />
    },
    {
      title: { en: 'Performance Culture', ar: 'ثقافة الأداء والتميز' },
      desc: {
        en: 'Operational excellence requires continuous improvement. We work closely with our principal partners to strengthen our capabilities while recognizing and celebrating progress.',
        ar: 'يتطلب التميز التشغيلي التحسين المستمر. نحن نعمل بشكل وثيق مع شركائنا الرئيسيين لتعزيز قدراتنا مع تقدير والاحتفال بالتقدم المحرز.'
      },
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: { en: 'Customer Partnership', ar: 'الشراكة مع العملاء' },
      desc: {
        en: 'We care about our customers and principal partners, and demonstrate that commitment through our everyday interactions.',
        ar: 'نحن نهتم بعملائنا وشركائنا الرئيسيين، ونظهر هذا الالتزام من خلال تفاعلاتنا اليومية المستمرة.'
      },
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: { en: "It's Your Business", ar: 'الاستشعار بالمسؤولية' },
      desc: {
        en: 'Every employee has a professional stake in 3T\'s success. We value accountability, accurate communication and delivering on our commitments.',
        ar: 'لكل موظف حصة مهنية في نجاح 3T. نحن نقدر المساءلة والتواصل الدقيق والوفاء بالتزاماتنا بالكامل.'
      },
      icon: <Briefcase className="h-6 w-6" />
    }
  ]

  const brandElements = [
    {
      title: { en: 'Top Tag Trading', ar: 'تاق للتجارة' },
      desc: {
        en: 'Our identity represents our purpose: creating value and making a difference for our customers.',
        ar: 'تمثل هويتنا غرضنا الأساسي: خلق القيمة وإحداث فارق إيجابي لعملائنا.'
      },
      icon: <Tag className="h-5 w-5" />
    },
    {
      title: { en: 'Boomerang', ar: 'البوميرانج (الارتداد للعودة)' },
      desc: {
        en: 'Represents our ambition to create relationships and experiences that encourage customers to return to 3T.',
        ar: 'يمثل طموحنا في خلق علاقات وتجارب مميزة تشجع العملاء على العودة والتعامل المستمر مع 3T.'
      },
      icon: <RotateCw className="h-5 w-5" />
    },
    {
      title: { en: 'Growth Arrow', ar: 'سهم النمو' },
      desc: {
        en: 'Represents our drive to continuously progress, improve and reach new heights.',
        ar: 'يمثل دافعنا الدائم للتقدم والتحسين المستمر والوصول إلى آفاق هندسية وتجارية جديدة.'
      },
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: { en: 'Green', ar: 'اللون الأخضر' },
      desc: {
        en: 'Represents freshness, growth and the continuous renewal of our relationships with customers, principal partners and associates.',
        ar: 'يمثل الحيوية، والنمو والتجدد المستمر لعلاقاتنا مع العملاء والشركاء الرئيسيين والزملاء.'
      },
      icon: <Sprout className="h-5 w-5" />
    }
  ]

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full h-[450px] rounded-3xl overflow-hidden bg-slate-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-black/65 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar' ? 'الرئيسية / من نحن' : 'HOME / ABOUT US'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {locale === 'ar' ? 'خلق القيمة من خلال التميز الهندسي' : 'Creating Value Through Engineering Excellence'}
            </h1>
          </div>
        </section>
      </div>

      {/* 2. Intro Section */}
      <section className="py-20 px-4 max-w-[1360px] mx-auto text-start">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
              {locale === 'ar' ? 'من نحن' : 'INTRO'}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {locale === 'ar' ? 'حلول هندسية. دعم متميز.' : 'Engineering Solutions. Outstanding Support.'}
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-slate-655 text-base sm:text-lg leading-relaxed">
            <p>
              {locale === 'ar'
                ? 'بدأت 3T بحديث بين صديقين، ونمت لتصبح واحدة من أبرز موزعي المنتجات الصناعية في المملكة العربية السعودية مع إمكانات تغطي الهواء المضغوط، وضواغط وحزم التبريد الصناعي، وضواغط الغاز الخاصة بالعمليات، وحلول المياه المبردة للعمليات والتكييف، والمضخات الصناعية والتقنيات المرتبطة بها.'
                : "Sparked by a conversation between two friends, 3T has grown into one of Saudi Arabia's industrial product distributors with capabilities across compressed air, industrial refrigeration compressors and packages, process gas compressors, process chilled water and HVAC chiller solutions, industrial pumps and associated industrial technologies."}
            </p>
            <p className="text-slate-500 text-sm sm:text-base border-t border-slate-100 pt-6">
              {locale === 'ar'
                ? 'نحن ندعم العملاء في قطاعات النفط والغاز، والبتروكيماويات، والصلب، والطاقة، والتعدين، والتشييد، والأسمنت، والصناعات الكيميائية، وتجهيز الأغذية، والألبان، وتعبئة المشروبات، وغرف التبريد، والمستشفيات، والفنادق وغيرها من الأسواق الصناعية المختلفة.'
                : 'We support customers across Oil & Gas, Petrochemical, Steel, Power, Mining, Construction, Cement, Chemical, Food Processing, Dairy, Beverage Bottling, Cold Rooms, Hospitals, Hotels and other industrial markets.'}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Story / Journey Section (Sticky timeline) */}
      <section id="story" className="py-24 bg-white px-4 border-t border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side (Sticky on desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4 text-start">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'رحلتنا' : 'JOURNEY'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {locale === 'ar' ? 'المسار الذي بنى أساسنا' : 'The Path That Built Our Foundation'}
            </h2>
            <p className="text-slate-550 text-sm sm:text-base leading-relaxed">
              {locale === 'ar'
                ? 'رحلة تشكلت بسواعد أبنائنا، وشراكاتنا القوية، والالتزام المستمر بالتطور والتقدم.'
                : 'A journey shaped by people, partnerships, and a commitment to continuous progress.'}
            </p>
          </div>

          {/* Spacer Column */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Right Side (Scrolling timeline track) */}
          <div className="lg:col-span-7 relative border-l-2 border-slate-200/60 rtl:border-l-0 rtl:border-r-2 rtl:border-slate-200/60 pl-8 rtl:pl-0 rtl:pr-8 space-y-16 py-4">
            {timeline.map((item) => (
              <div key={item.year} className="relative group">
                
                {/* Node indicator */}
                <div className="absolute -left-[41px] rtl:-left-0 rtl:-right-[41px] top-6 h-4 w-4 rounded-full bg-slate-900 border-2 border-slate-50 group-hover:bg-brand-primary transition-colors duration-300 z-10"></div>
                
                {/* Milestone card */}
                <div className="bg-white border border-slate-100 rounded-3xl p-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden text-start">
                  <div className="pt-8 px-6 sm:px-8 pb-6 space-y-2">
                    <span className="text-3xl font-black text-brand-accent block tracking-tight">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-950">
                      {item.title[locale]}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc[locale]}
                    </p>
                  </div>
                  
                  <div className="w-full h-60 sm:h-72 overflow-hidden border-t border-slate-100">
                    <img 
                      src={item.image} 
                      alt="" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Our Approach & Principles Section */}
      <section className="py-24 px-4 max-w-[1360px] mx-auto text-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'منهجنا' : 'OUR APPROACH'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {locale === 'ar' ? 'نهج مبني حول نجاح العملاء' : 'Built Around Customer Success'}
            </h2>
            <div className="space-y-4 text-slate-650 text-base leading-relaxed">
              <p>
                {locale === 'ar'
                  ? 'في 3T، يمتد تركيزنا إلى ما هو أبعد من مجرد توريد المنتجات. نحن نعمل على تقديم حلول هندسية وخدمات دعم موثوقة ومستدامة وذات جدوى اقتصادية.'
                  : 'At 3T, our focus extends beyond supplying products. We work to provide engineering solutions and support services that are reliable, sustainable and cost-effective.'}
              </p>
              <p className="text-slate-500 text-sm border-t border-slate-100 pt-4">
                {locale === 'ar'
                  ? 'يمكّننا فريقنا المتنوع والشامل من دمج الخبرات والمنظورات المختلفة لخلق قيمة حقيقية لعملائنا.'
                  : 'Our diverse and inclusive team enables us to combine different experiences and perspectives to create meaningful value for our customers.'}
              </p>
            </div>
          </div>

          <div className="bg-brand-secondary text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-lg space-y-6">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
              {locale === 'ar' ? 'المبادئ' : 'PRINCIPLES'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {locale === 'ar' ? 'التميز التشغيلي والشفافية' : 'Operational Excellence & Transparency'}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {locale === 'ar'
                ? 'توجه هذه المبادئ كل مرحلة من مراحل علاقتنا بالعملاء - بدءاً من الاستفسار الأول وتطوير الحلول وصولاً إلى التسليم والدعم المستمر.'
                : 'These principles guide every stage of our customer relationship—from the first enquiry and solution development to delivery and continued support.'}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Vision & Mission Section */}
      <section id="vision-mission" className="py-24 bg-white px-4 border-t border-b border-slate-100 font-sans">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[340px] flex flex-col justify-end p-8 sm:p-10 group border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-brand-secondary/40 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-20 space-y-3 text-start">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
                {locale === 'ar' ? 'الرؤية' : 'VISION'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {locale === 'ar' ? 'رؤيتنا' : 'Our Vision'}
              </h3>
              <p className="text-slate-200 leading-relaxed text-sm max-w-xl">
                {locale === 'ar'
                  ? 'أن نضع المعيار ونصبح رواداً في خدمة ودعم العملاء من خلال توفير الوصول إلى مجموعة واسعة من المنتجات والخدمات عالمية المستوى التي تمثل الجودة والابتكار.'
                  : 'To set the benchmark and become a leader in customer service and support by providing access to a wide range of world-class products and services representing quality and innovation.'}
              </p>
            </div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Mission Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[340px] flex flex-col justify-end p-8 sm:p-10 group border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-brand-secondary/40 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-20 space-y-3 text-start">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
                {locale === 'ar' ? 'الرسالة' : 'MISSION'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {locale === 'ar' ? 'رسالتنا' : 'Our Mission'}
              </h3>
              <p className="text-slate-200 leading-relaxed text-sm max-w-xl">
                {locale === 'ar'
                  ? 'خلق قيمة لعملائنا من خلال تقديم حلول هندسية عالمية المستوى وخدمات دعم استثنائية تتميز بالموثوقية والاستدامة والجدوى الاقتصادية.'
                  : 'To create value for our customers by offering world-class engineering solutions and outstanding support services that are reliable, sustainable and cost-effective.'}
              </p>
            </div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

        </div>
      </section>

      {/* 6. Our Culture Section */}
      <section id="culture" className="py-24 px-4 max-w-[1360px] mx-auto text-start">
        <div className="space-y-12 mb-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'موظفونا وثقافتنا' : 'OUR PEOPLE & CULTURE'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              {locale === 'ar' ? 'نحن أقوى معاً' : 'Stronger Together'}
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              {locale === 'ar'
                ? 'تشكل ثقافتنا الطريقة التي نفكر بها، ونتعاون، ونخدم بها عملائنا. إنها تخلق بيئة يتم فيها تمكين الأفراد لتحمل المسؤولية، والعمل معاً، والسعي نحو التميز.'
                : 'Our culture shapes the way we think, collaborate and serve our customers. It creates an environment where people are empowered to take responsibility, work together and pursue excellence.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cultureCards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-4 group cursor-pointer"
            >
              <div className="text-brand-accent p-3 bg-slate-55/50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-950 group-hover:text-brand-primary transition-colors">
                {card.title[locale]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {card.desc[locale]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Brand Identity Section (Clean solid background) */}
      <section id="identity" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden font-sans">

        <div className="max-w-[1360px] mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Logo Display inside drafting board */}
          <div className="lg:col-span-5 space-y-6 text-start">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'هويتنا البصرية' : 'OUR IDENTITY'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {locale === 'ar' ? 'هوية مبنية حول القيمة والنمو' : 'An Identity Built Around Value & Growth'}
            </h2>
            
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-md flex items-center justify-center max-w-sm mx-auto lg:mx-0 relative overflow-hidden group">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative z-10">
                <img 
                  src="/LOGO/3T-Saudi.jpg" 
                  alt="3T Logo" 
                  className="max-h-24 w-auto object-contain transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>

          {/* Right Column: Brand Elements explanation (Clean high-contrast cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-start">
            {brandElements.map((el, idx) => (
              <div 
                key={idx}
                className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-brand-primary hover:bg-white transition-all duration-300 group cursor-pointer space-y-4"
              >
                <div className="text-brand-primary group-hover:text-brand-accent transition-colors p-2.5 bg-white border border-slate-100 rounded-xl w-fit shadow-xs">
                  {el.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-brand-primary transition-colors">
                    {el.title[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {el.desc[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustrialChallengeCTA bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" />

    </div>
  )
}
