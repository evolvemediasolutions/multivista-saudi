export interface EventItem {
  id: string
  slug: string
  title: {
    en: string
    ar: string
  }
  date: {
    en: string
    ar: string
  }
  time?: {
    en: string
    ar: string
  }
  location: {
    en: string
    ar: string
  }
  eventType?: {
    en: string
    ar: string
  }
  status?: string
  description: {
    en: string
    ar: string
  }
  content?: {
    en: string
    ar: string
  }
  image: string
  registrationUrl?: string
}

export const eventsData: EventItem[] = [
  {
    id: 'sabic-technical-conference-2026',
    slug: 'sabic-technical-conference-2026',
    title: {
      en: 'SABIC Technical Conference 2026',
      ar: 'مؤتمر سابك الفني 2026'
    },
    date: {
      en: 'February 15, 2026',
      ar: '١٥ فبراير ٢٠٢٦'
    },
    time: {
      en: '09:00 AM – 05:00 PM (AST)',
      ar: '٠٩:٠٠ ص – ٠٥:٠٠ م (توقيت السعودية)'
    },
    location: {
      en: 'King Abdullah Cultural Center, Jubail Industrial City, Saudi Arabia',
      ar: 'مركز الملك عبد الله الثقافي، مدينة الجبيل الصناعية، المملكة العربية السعودية'
    },
    eventType: {
      en: 'Technical Exhibition & Conference',
      ar: 'مؤتمر ومعرض تقني'
    },
    status: 'upcoming',
    description: {
      en: 'Showcasing our latest industrial automation, gas compression packages, and high-efficiency pumping technologies directly to SABIC engineering and procurement leadership.',
      ar: 'عرض أحدث تقنياتنا في الأتمتة الصناعية، وحزم ضغط الغاز، ومضخات العمليات فائقة الكفاءة مباشرة لقيادات الهندسة والمشتريات في سابك.'
    },
    content: {
      en: `
        <h2>Connecting Technology Leaders in Petrochemical Innovation</h2>
        <p>The SABIC Technical Conference & Exhibition brings together over 12,000 global experts, engineers, and supply chain partners in Jubail Industrial City. MVGL Saudi is proud to present cutting-edge solutions tailored to downstream petrochemical refining and gas processing.</p>
        
        <h3>Key Highlights & Live Demonstrations:</h3>
        <ul>
          <li><strong>Kirloskar Pneumatic:</strong> High-pressure reciprocating and API 619 screw gas compressors engineered for harsh hydrogen and hydrocarbon services.</li>
          <li><strong>Rockwell Automation:</strong> PlantPAx distributed control systems, Allen-Bradley smart motor control, and industrial cybersecurity architectures.</li>
          <li><strong>SPP Pumps:</strong> FM-approved, UL-listed split case fire protection pump packages meeting stringent Royal Commission and NFPA specifications.</li>
          <li><strong>EPP Composites:</strong> Dual-laminate corrosion-resistant chemical storage vessels and pultruded structural profiles.</li>
        </ul>
        
        <p>Join our senior engineering team at Booth #B-14 to explore custom skid packaging, digital twin integration, and localized spare parts programs.</p>
      `,
      ar: `
        <h2>تواصل قادة التكنولوجيا في الابتكار البتروكيماوي</h2>
        <p>يجمع مؤتمر ومعرض سابك الفني أكثر من 12,000 خبير ومهندس ومورد في مدينة الجبيل الصناعية. وتفخر إم في جي إل السعودية بتقديم حلول هندسية متقدمة مصممة خصيصاً لعمليات التكرير والبتروكيماويات ومعالجة الغاز.</p>
        
        <h3>أبرز المعروضات والعروض التوضيحية:</h3>
        <ul>
          <li><strong>كيرلوسكار نيوماتيك:</strong> ضواغط الغاز اللولبية والترددية المصممة لخدمات الهيدروجين والغازات الهيدروكربونية الصعبة.</li>
          <li><strong>روكويل أوتوميشن:</strong> أنظمة التحكم الموزعة PlantPAx ومراكز التحكم الذكية في المحركات ومعمارية الأمن السيبراني.</li>
          <li><strong>مضخات إس بي بي:</strong> مجموعات مضخات الحريق المعتمدة من FM/UL والمطابقة لمواصفات الهيئة الملكية وNFPA.</li>
          <li><strong>إي بي بي كومبوزيتس:</strong> خزانات التخزين الكيميائي المقاومة للتآكل والمقاطع الهيكلية غير المعدنية.</li>
        </ul>
        
        <p>يسعدنا الترحيب بكم في جناحنا رقم B-14 للاطلاع على الحلول المتكاملة وبرامج الدعم الهندسي المحلي.</p>
      `
    },
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    registrationUrl: 'https://www.sabic.com'
  },
  {
    id: 'saudi-water-forum',
    slug: 'saudi-water-forum',
    title: {
      en: 'Saudi Water Forum',
      ar: 'منتدى المياه السعودي'
    },
    date: {
      en: 'April 22, 2026',
      ar: '٢٢ أبريل ٢٠٢٦'
    },
    time: {
      en: '08:30 AM – 04:30 PM (AST)',
      ar: '٠٨:٣٠ ص – ٠٤:٣٠ م (توقيت السعودية)'
    },
    location: {
      en: 'Riyadh International Convention & Exhibition Center, Riyadh, Saudi Arabia',
      ar: 'مركز الرياض الدولي للمؤتمرات والمعارض، الرياض، المملكة العربية السعودية'
    },
    eventType: {
      en: 'Industry Forum & Expo',
      ar: 'منتدى ومعرض صناعي'
    },
    status: 'upcoming',
    description: {
      en: 'Demonstrating energy-efficient pumping systems, desalination booster packages, and composite piping solutions catering to municipal and industrial mega-projects.',
      ar: 'استعراض أنظمة الضخ الموفرة للطاقة، وحزم تعزيز الضغط لمحطات التحلية، وحلول الأنابيب المركبة للمشاريع الكبرى والبلدية.'
    },
    content: {
      en: `
        <h2>Sustainable Water Infrastructure for the Kingdom's Future</h2>
        <p>As Saudi Arabia leads global investments in desalination and sustainable water management, the Saudi Water Forum stands as the preeminent gathering for municipal leaders, SWCC engineers, and industrial technology developers.</p>
        
        <h3>MVGL Showcase:</h3>
        <ul>
          <li>Large-capacity split case water transmission pumps with premium hydraulic efficiency.</li>
          <li>FRP/GRP seawater intake pipes and brine-resistant chemical dosing tanks.</li>
          <li>Smart variable speed drives that optimize pump curves, minimizing electrical power demand.</li>
        </ul>
        
        <p>Visit our booth to consult with our fluid dynamics specialists on life-cycle cost reduction and energy conservation.</p>
      `,
      ar: `
        <h2>بنية تحتية مائية مستدامة لمستقبل المملكة</h2>
        <p>مع تصدر المملكة العربية السعودية الاستثمارات العالمية في تحلية المياه وإدارتها المستدامة، يمثل منتدى المياه السعودي الملتقى الأبرز للمهندسين والمطورين في قطاع المياه والتحلية.</p>
        
        <h3>معروضات إم في جي إل:</h3>
        <ul>
          <li>مضخات نقل المياه الكبيرة ذات الانشطار المحوري فائقة الكفاءة الهيدروليكية.</li>
          <li>أنابيب سحب مياه البحر وخزانات حقن الكيماويات المقاومة للملوحة العالية المصنوعة من الألياف الزجاجية.</li>
          <li>مغيرات السرعة الذكية للتحكم الأمثل في منحنيات الضخ وتوفير استهلاك الكهرباء.</li>
        </ul>
      `
    },
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
    registrationUrl: 'https://www.swfc.gov.sa'
  }
]
