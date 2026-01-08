import { useTranslation } from 'react-i18next'
import { GitOverviewContainer, GitOverviewItem } from './styles'

export const GitOverview = () => {
  const { t } = useTranslation()

  return (
    <GitOverviewContainer>
      <GitOverviewItem>
        <strong>3</strong>
        <span>{t('home.gitOverview.experienceYears')}</span>
      </GitOverviewItem>
      <GitOverviewItem>
        <strong>10+</strong>
        <span>{t('home.gitOverview.projects')}</span>
      </GitOverviewItem>
      <GitOverviewItem>
        <strong>3000+</strong>
        <span>{t('home.gitOverview.commits')}</span>
      </GitOverviewItem>
    </GitOverviewContainer>
  )
}
