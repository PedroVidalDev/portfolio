import { useTranslation } from 'react-i18next'
import { GitOverviewContainer, GitOverviewItem } from './styles'
import { useCountUp } from 'hooks/useCountUp'

export const GitOverview = () => {
  const { t } = useTranslation()

  const experienceYears = useCountUp(3, 1250, 1)
  const projects = useCountUp(10, 2000, 7)
  const commits = useCountUp(3000, 2500, 2850)

  return (
    <GitOverviewContainer>
      <GitOverviewItem>
        <strong>{experienceYears}</strong>
        <span>{t('home.gitOverview.experienceYears')}</span>
      </GitOverviewItem>
      <GitOverviewItem>
        <strong>{projects}+</strong>
        <span>{t('home.gitOverview.projects')}</span>
      </GitOverviewItem>
      <GitOverviewItem>
        <strong>{commits}+</strong>
        <span>{t('home.gitOverview.commits')}</span>
      </GitOverviewItem>
    </GitOverviewContainer>
  )
}
