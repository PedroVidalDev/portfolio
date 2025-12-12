import i18n, { type InitOptions, type Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'

import enUS from './translations/en-US.json'
import ptBR from './translations/pt-BR.json'

const resources: Resource = {
  en: { translation: enUS },
  pt: { translation: ptBR },
}

const options: InitOptions = {
  resources,
  compatibilityJSON: 'v4',
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: localStorage.getItem('language') || 'en',
  interpolation: {
    escapeValue: false,
  },
}

i18n.use(initReactI18next).init(options)

export default i18n
