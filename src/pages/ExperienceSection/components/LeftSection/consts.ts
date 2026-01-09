import * as IoIcons from 'react-icons/fa6'
import * as DiIcons from 'react-icons/di'
import type { LocalizedString } from 'types/LocalizedString'

type ExperienceItemType = {
  icon: keyof typeof IoIcons | keyof typeof DiIcons
  title: LocalizedString
  value: string
}

export const EXPERIENCE_ITEMS: ExperienceItemType[] = [
  {
    icon: 'FaBagShopping',
    title: {
      en: 'Experience',
      pt: 'Experiência',
    },
    value: 'experience',
  },
  {
    icon: 'FaCode',
    title: {
      en: 'Skills',
      pt: 'Habilidades',
    },
    value: 'skills',
  },
  {
    icon: 'FaSchool',
    title: {
      en: 'Education',
      pt: 'Formação',
    },
    value: 'education',
  },
]
