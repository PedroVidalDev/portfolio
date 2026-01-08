import { useTranslation } from 'react-i18next'
import { GitOverviewContainer, GitOverviewItem } from './styles'

export const GitOverview = () => {
  const { t } = useTranslation()

  return (
    <GitOverviewContainer>
      <GitOverviewItem>
        <strong>150+</strong>
        <span>{t('home.gitOverview.projects')}</span>
      </GitOverviewItem>
      <GitOverviewItem>
        <strong>2000+</strong>
        <span>{t('home.gitOverview.commits')}</span>
      </GitOverviewItem>
      <GitOverviewItem>
        <strong>1000+</strong>
        <span>{t('home.gitOverview.stars')}</span>
      </GitOverviewItem>
    </GitOverviewContainer>
  )
}
