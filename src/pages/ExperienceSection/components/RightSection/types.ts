import type { LocalizedString } from 'types/LocalizedString'

export type RightSectionProps = {
  selectedExperienceItem: string | null
}

export type ExperienceItem = {
  date: LocalizedString
  title: LocalizedString
  company: string
  skills?: string[]
  description?: LocalizedString[]
  link?: string
}
