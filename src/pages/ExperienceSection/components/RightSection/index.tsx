import { useLanguageContext } from 'contexts/LanguageContext'

import { EDUCATION_ITEMS, EXPERIENCE_ITEMS, ExperienceTitleMap } from './consts'

import type { RightSectionProps } from './types'

import {
  ExperienceItemDetails,
  RightSectionContainer,
  ExperienceItemsContainer,
  ExperienceItemDetailsLeft,
  RightSectionContainerTitle,
  IconScrap,
} from './styles'
import { Icon } from 'components/Icon'

export const RightSection = (props: RightSectionProps) => {
  const { selectedExperienceItem } = props

  const { currentLang } = useLanguageContext()
  const lang = currentLang as 'en' | 'pt'

  return (
    <RightSectionContainer>
      <RightSectionContainerTitle>
        {
          ExperienceTitleMap[
            selectedExperienceItem as keyof typeof ExperienceTitleMap
          ][lang]
        }
      </RightSectionContainerTitle>
      {selectedExperienceItem === 'experience' && (
        <ExperienceItemsContainer>
          {EXPERIENCE_ITEMS.map((item, index) => (
            <ExperienceItemDetails key={index}>
              <ExperienceItemDetailsLeft>
                <span> {item.date[lang]} </span>
                <h3> {item.title[lang]} </h3>
                <h4> {item.company} </h4>
                {item.skills && <p> {item.skills.join(' | ')} </p>}
                <ul>
                  {item.description &&
                    item.description.map((skill, index) => (
                      <li key={index}> {skill[lang]} </li>
                    ))}
                </ul>
              </ExperienceItemDetailsLeft>
            </ExperienceItemDetails>
          ))}
        </ExperienceItemsContainer>
      )}

      {selectedExperienceItem === 'education' && (
        <ExperienceItemsContainer>
          {EDUCATION_ITEMS.map((item, index) => (
            <ExperienceItemDetails key={index}>
              <ExperienceItemDetailsLeft>
                <span> {item.date[lang]} </span>
                <h3> {item.title[lang]} </h3>
                <h4> {item.company} </h4>
              </ExperienceItemDetailsLeft>
              {item.link && (
                <IconScrap onClick={() => window.open(item.link, '_blank')}>
                  <Icon name='FaUpRightFromSquare' color='GRAY_0' size={18} />
                </IconScrap>
              )}
            </ExperienceItemDetails>
          ))}
        </ExperienceItemsContainer>
      )}
    </RightSectionContainer>
  )
}
