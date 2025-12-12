import { useTranslation } from 'react-i18next'

import { EXPERIENCE_ITEMS } from './consts'

import {
  TechBadge,
  TechBadgeWrapper,
} from 'components/TechBadgeComponents/styles'
import { Icon } from 'components/Icon'
import { Title } from 'components/Title/styles'

import {
  ExperienceIcon,
  ExperienceItem,
  ExperienceHeader,
  ExperienceContent,
  ExperienceDetails,
  ExperienceContainer,
} from './styles'
import { useLanguageContext } from 'contexts/LanguageContext'

export const ExperienceSection = () => {
  const { t } = useTranslation()

  const { currentLang } = useLanguageContext()
  console.log('Current Language:', currentLang)
  const lang = currentLang as 'en' | 'pt'

  const handleClickItem = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <ExperienceContainer id='experience'>
      <ExperienceHeader>
        <Title style={{ textAlign: 'center' }}>
          <span> {t('experience.experienceTitle.part1')} </span>
          {t('experience.experienceTitle.part2')}
        </Title>
      </ExperienceHeader>
      <ExperienceContent>
        {EXPERIENCE_ITEMS.map((item, index) => (
          <ExperienceItem
            key={index}
            onClick={() => handleClickItem(item.link)}
          >
            <ExperienceIcon>
              <Icon name='FaNewspaper' color='GRAY_0' size={24} />
            </ExperienceIcon>
            <ExperienceDetails>
              <div>
                <h3>
                  {item.company} | {item.role[lang]}
                </h3>
                <TechBadgeWrapper>
                  {item.skills.map((skill, skillIndex) => (
                    <TechBadge key={skillIndex}>{skill}</TechBadge>
                  ))}
                </TechBadgeWrapper>
              </div>
              <div>
                <p>{item.period[lang]}</p>
              </div>
            </ExperienceDetails>
          </ExperienceItem>
        ))}
      </ExperienceContent>
    </ExperienceContainer>
  )
}
