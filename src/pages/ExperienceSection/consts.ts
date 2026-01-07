import type { LocalizedString } from 'types/LocalizedString'

type ExperienceItemType = {
  role: LocalizedString
  company: string
  period: LocalizedString
  link: string
  skills: string[]
}

export const EXPERIENCE_ITEMS: ExperienceItemType[] = [
  {
    role: {
      en: 'Junior Developer',
      pt: 'Desenvolvedor JR',
    },
    company: 'NewCAD',
    period: {
      en: 'Jun 2025 - Present',
      pt: 'Jun 2025 - Presente',
    },
    link: 'https://www.linkedin.com/company/newcad/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BsQ%2FRP864QH2fLvz7dQbS%2BQ%3D%3D',
    skills: ['React', 'TypeScript', 'R3F', 'ThreeJS'],
  },
  {
    role: {
      en: 'Developer Intern',
      pt: 'Estagiário de Desenvolvimento',
    },
    company: 'NewGO Tecnology',
    period: {
      en: 'Jul 2024 - Jun 2025',
      pt: 'Jul 2024 - Jun 2025',
    },
    link: 'https://newgo.com.br/',
    skills: [
      'React',
      'TypeScript',
      'Java',
      'Spring Boot',
      'Laravel',
      'PostgreSQL',
    ],
  },
  {
    role: {
      en: 'Tech Teacher',
      pt: 'Professor de Tecnologia',
    },
    company: 'CTRL+PLAY',
    period: {
      en: 'Jul 2024 - Dec 2024',
      pt: 'Jul 2024 - Dez 2024',
    },
    link: 'https://ctrlplay.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=institucional_online',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS'],
  },
]
