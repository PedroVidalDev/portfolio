export type LanguageContextDataProps = {
  children: React.ReactNode
}

export type LanguageContextDataProvider = {
  currentLang: string
  changeLanguage: (lang: string) => void
}
