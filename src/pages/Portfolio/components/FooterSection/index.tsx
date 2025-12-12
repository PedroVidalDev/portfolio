import { useTranslation } from 'react-i18next'
import { FooterSectionContainer } from './styles'

export const FooterSection = () => {
  const { t } = useTranslation()

  return (
    <FooterSectionContainer>
      <p>© 2025 Pedro Vidal. {t('footer.footerText')}</p>
    </FooterSectionContainer>
  )
}
