export interface EventItem {
  id: string
  title: {
    en: string
    ar: string
  }
  date: {
    en: string
    ar: string
  }
  location: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  image: string
}

export const eventsData: EventItem[] = [
  {
    id: 'sabic-exhibition-2026',
    title: {
      en: 'SABIC Technical Conference 2026',
      ar: 'مؤتمر سابك الفني 2026'
    },
    date: {
      en: 'February 15, 2026',
      ar: '١٥ فبراير ٢٠٢٦'
    },
    location: {
      en: 'Jubail, Saudi Arabia',
      ar: 'الجبيل، المملكة العربية السعودية'
    },
    description: {
      en: 'Showcasing our latest industrial automation and gas compression technologies directly to engineering and procurement teams.',
      ar: 'عرض أحدث تقنياتنا في الأتمتة الصناعية وضغط الغاز مباشرة لفرق الهندسة والمشتريات.'
    },
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'saudi-water-forum',
    title: {
      en: 'Saudi Water Forum',
      ar: 'منتدى المياه السعودي'
    },
    date: {
      en: 'April 22, 2026',
      ar: '٢٢ أبريل ٢٠٢٦'
    },
    location: {
      en: 'Riyadh, Saudi Arabia',
      ar: 'الرياض، المملكة العربية السعودية'
    },
    description: {
      en: 'Demonstrating energy-efficient pumping systems and water treatment solutions catering to municipal and agricultural requirements.',
      ar: 'استعراض أنظمة الضخ الموفرة للطاقة وحلول معالجة المياه التي تلبي الاحتياجات البلدية والزراعية.'
    },
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80'
  }
]
