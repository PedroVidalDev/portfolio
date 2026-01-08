import { useTranslation } from 'react-i18next'

import { Button } from 'components/Button'
import { Title } from 'components/Title/styles'
import { GitOverview } from './components/GitOverview'
import { ImageContainer } from './components/ImageContainer'

import {
  SubTitle,
  TextsContainer,
  ApresentationText,
  HomeSectionContainer,
} from './styles'

export const HomeSection = () => {
  const { t } = useTranslation()

  return (
    <HomeSectionContainer id='home'>
      <TextsContainer>
        <SubTitle>{t('home.currentJob')}</SubTitle>
        <Title>
          <span> {t('home.welcomeTitle.part1')} </span>
          {t('home.welcomeTitle.part2')} <br /> {t('home.welcomeTitle.part3')}
        </Title>
        <ApresentationText>{t('home.welcomeText')}</ApresentationText>

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
