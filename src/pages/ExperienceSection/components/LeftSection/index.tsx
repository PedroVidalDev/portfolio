import { useTranslation } from 'react-i18next'

import { Icon } from 'components/Icon'
import { Button } from 'components/Button'
import { Title } from 'components/Title/styles'

import { EXPERIENCE_ITEMS } from './consts'

import { useLanguageContext } from 'contexts/LanguageContext'

import type { LeftSectionProps } from './types'

import File from 'assets/docs/Pedro Vidal.pdf'

import {
  ExperienceItem,
  ExperienceItemLabel,
  ExperienceItemLeftSide,
  ExperienceLeftSection,
} from './styles'

export const LeftSection = (props: LeftSectionProps) => {
  const { selectedExperienceItem, setSelectedExperienceItem } = props

  const { t } = useTranslation()

  const { currentLang } = useLanguageContext()
  const lang = currentLang as 'en' | 'pt'

  return (
    <ExperienceLeftSection>
      <Title>
        {t('experience.experienceTitle.part1')}{' '}
        <span>{t('experience.experienceTitle.part2')}</span>
      </Title>
      {EXPERIENCE_ITEMS.map((item, index) => (
        <ExperienceItem
          key={index}
          selected={selectedExperienceItem === item.value}
          onClick={() => setSelectedExperienceItem(item.value)}
        >
          <ExperienceItemLeftSide>
            <Icon name={item.icon} size={32} />
            <ExperienceItemLabel>{item.title[lang]}</ExperienceItemLabel>
          </ExperienceItemLeftSide>
          <Icon name='FaAngleRight' size={16} />
        </ExperienceItem>
      ))}

      <li />

      <Button
        icon='FaFile'
        type='primary'
        label='Download CV'
        color='LIGHT_PRIMARY'
        onClick={() => window.open(File, '_blank')}
      />
    </ExperienceLeftSection>
  )
}
