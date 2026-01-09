import { useLanguageContext } from 'contexts/LanguageContext'

import { EXPERIENCE_ITEMS } from './consts'

import {
  ExperienceItemDetails,
  ExperienceItemDetailsLeft,
  ExperienceItemsContainer,
} from '../../styles'

export const Experience = () => {
  const { currentLang } = useLanguageContext()
  const lang = currentLang as 'en' | 'pt'

  return (
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
  )
}
