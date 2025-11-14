export interface NavItem {
  label: string
  path?: string
  children?: {
    label: string
    path: string
  }[]
}

export const navbarMenu = [
  {
    label: 'Ekotizim',
    children: [
      { label: 'Startaplar', path: '/startups' },
      { label: 'Startaplar xaritasi', path: '/startups/map' },
      { label: 'Investorlar', path: '/investors' },
      { label: 'Hamkorlar', path: '/partners' },
      { label: 'Mentorlar', path: '/mentors' },
      { label: 'Akseleratorlar', path: '/accelerators' },
    ],
  },
  {
    label: 'Dasturlar',
    children: [
      { label: 'IT Park Dasturlari', path: '/programs/itpark' },
      { label: 'Xalqaro Dasturlar', path: '/programs/international' },
    ],
  },
  {
    label: 'Bilimlar',
    children: [
      { label: 'O‘quv kurslari', path: '/education/courses' },
      { label: 'Bootcamplar', path: '/education/bootcamps' },
    ],
  },
  {
    label: 'Tadbirlar',
    children: [
      { label: 'IT Park Tadbirlari', path: '/events/itpark' },
      { label: 'Xalqaro Tadbirlar', path: '/events/international' },
    ],
  },
  {
    label: 'Yangiliklar',
    path: '/news',
  },
]
