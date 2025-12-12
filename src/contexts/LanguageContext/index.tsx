import { useTranslation } from 'react-i18next'
import { createContext, useContext, useState } from 'react'

import type {
  LanguageContextDataProps,
  LanguageContextDataProvider,
} from './types'

export const LanguageContext = createContext({} as LanguageContextDataProvider)

export const LanguageContextProvider = ({
  children,
}: LanguageContextDataProps) => {
  const { i18n } = useTranslation()

  const [currentLang, setCurrentLang] = useState(i18n.language)

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    setCurrentLang(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguageContext must be used within a LanguageContextProvider',
    )
  }

  return context
}
