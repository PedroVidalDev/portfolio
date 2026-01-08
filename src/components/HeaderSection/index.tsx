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
import { useNavigate } from 'react-router-dom'

export const HeaderSection = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const endpoint = window.location.pathname.replaceAll('/', '')

  const { currentLang, changeLanguage } = useLanguageContext()

  const [menuExpanded, setMenuExpanded] = useState(false)

  const handleMenu = (path?: string) => {
    if (path) {
      navigate(path)
    }
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
        <Option selected={endpoint === ''} onClick={() => handleMenu('/')}>
          {t('header.option1')}
        </Option>
        <Option
          selected={endpoint === 'experience'}
          onClick={() => handleMenu('/experience')}
        >
          {t('header.option2')}
        </Option>
        <Option
          selected={endpoint === 'skills'}
          onClick={() => handleMenu('/skills')}
        >
          {t('header.option3')}
        </Option>
        <Option
          selected={endpoint === 'projects'}
          onClick={() => handleMenu('/projects')}
        >
          {t('header.option4')}
        </Option>
        <Option
          selected={endpoint === 'contact'}
          onClick={() => handleMenu('/contact')}
        >
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
