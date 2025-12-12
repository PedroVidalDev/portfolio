import { useTranslation } from 'react-i18next'

import {
  HeaderSectionContainer,
  LanguageSelector,
  Option,
  Options,
  TitleHeader,
} from './styles'
import { useLanguageContext } from 'contexts/LanguageContext'

export const HeaderSection = () => {
  const { t } = useTranslation()

  const { currentLang, changeLanguage } = useLanguageContext()

  return (
    <HeaderSectionContainer>
      <TitleHeader>
        <span>{t('header.headerTitle.part1')}</span>
        {t('header.headerTitle.part2')}
      </TitleHeader>
      <Options>
        <Option href='#home'>{t('header.option1')}</Option>
        <Option href='#experience'>{t('header.option2')}</Option>
        <Option href='#skills'>{t('header.option3')}</Option>
        <Option href='#projects'>{t('header.option4')}</Option>
        <Option href='#contact'>{t('header.option5')}</Option>
        <LanguageSelector
          language={currentLang}
          onClick={() => changeLanguage(currentLang === 'en' ? 'pt' : 'en')}
        />
      </Options>
    </HeaderSectionContainer>
  )
}
