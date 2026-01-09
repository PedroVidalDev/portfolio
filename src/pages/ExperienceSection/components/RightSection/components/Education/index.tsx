import { useLanguageContext } from 'contexts/LanguageContext'

import { EDUCATION_ITEMS } from './consts'

import {
  ExperienceItemDetails,
  ExperienceItemDetailsLeft,
  ExperienceItemsContainer,
  IconScrap,
} from '../../styles'
import { Icon } from 'components/Icon'

export const Education = () => {
  const { currentLang } = useLanguageContext()
  const lang = currentLang as 'en' | 'pt'

  return (
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
  )
}
