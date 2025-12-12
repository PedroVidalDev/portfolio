import { useTranslation } from 'react-i18next'

import {
  HeaderSectionContainer,
  LanguageSelector,
  MobileMenuIcon,
  Option,
  Options,
  TitleHeader,
} from './styles'
import { useLanguageContext } from 'contexts/LanguageContext'
import { FaBars } from 'react-icons/fa6'
import { useState } from 'react'

export const HeaderSection = () => {
  const { t } = useTranslation()

  const { currentLang, changeLanguage } = useLanguageContext()

  const [menuExpanded, setMenuExpanded] = useState(false)

  const handleMenu = () => {
    if (menuExpanded) {
      setMenuExpanded(false)
    }
  }

  return (
    <HeaderSectionContainer>
      <TitleHeader>
        <span>{t('header.headerTitle.part1')}</span>
        {t('header.headerTitle.part2')}
      </TitleHeader>
      <MobileMenuIcon onClick={() => setMenuExpanded(!menuExpanded)}>
        <FaBars size={24} color='#FFFFFF' />
      </MobileMenuIcon>
      <Options expanded={menuExpanded}>
        <Option href='#home' onClick={handleMenu}>
          {t('header.option1')}
        </Option>
        <Option href='#experience' onClick={handleMenu}>
          {t('header.option2')}
        </Option>
        <Option href='#skills' onClick={handleMenu}>
          {t('header.option3')}
        </Option>
        <Option href='#projects' onClick={handleMenu}>
          {t('header.option4')}
        </Option>
        <Option href='#contact' onClick={handleMenu}>
          {t('header.option5')}
        </Option>
        <LanguageSelector
          language={currentLang}
          onClick={() => {
            changeLanguage(currentLang === 'en' ? 'pt' : 'en')
            handleMenu()
          }}
        />
      </Options>
    </HeaderSectionContainer>
  )
}
