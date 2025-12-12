import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  HeaderSectionContainer,
  LanguageSelector,
  Option,
  Options,
  TitleHeader,
} from './styles'

export const HeaderSection = () => {
  const { t, i18n } = useTranslation()

  const [currentLang, setCurrentLang] = useState(i18n.language)

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    setCurrentLang(lang)
    localStorage.setItem('language', lang)
  }

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
