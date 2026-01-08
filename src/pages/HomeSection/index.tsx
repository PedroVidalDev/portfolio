import { useTranslation } from 'react-i18next'

import { Button } from 'components/Button'
import { Title } from 'components/Title/styles'
import { GitOverview } from './components/GitOverview'
import { ImageContainer } from './components/ImageContainer'

import { HomeSectionContainer, TextsContainer } from './styles'

export const HomeSection = () => {
  const { t } = useTranslation()

  return (
    <HomeSectionContainer id='home'>
      <TextsContainer>
        <span>{t('home.currentJob')}</span>
        <Title>
          <span> {t('home.welcomeTitle.part1')} </span>
          {t('home.welcomeTitle.part2')} <br /> {t('home.welcomeTitle.part3')}
        </Title>
        <p>{t('home.welcomeText')}</p>

        <Button
          icon='FaFile'
          label='Download CV'
          type='primary'
          onClick={() => {}}
        />

        <GitOverview />
      </TextsContainer>

      <ImageContainer />
    </HomeSectionContainer>
  )
}
