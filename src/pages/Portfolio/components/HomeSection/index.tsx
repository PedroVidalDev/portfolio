import { useTranslation } from 'react-i18next'

import { Icon } from 'components/Icon'
import { Title } from 'components/Title/styles'

import { SOCIALS } from './consts'

import Profile from 'assets/profile.png'

import {
  ButtonsContainer,
  HomeSectionContainer,
  ImageContainer,
  Social,
  StarItem,
  TextsContainer,
} from './styles'

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

        <ButtonsContainer>
          {SOCIALS.map((social) => (
            <Social onClick={() => window.open(social.url, '_blank')}>
              <Icon name={social.iconName} color='PRIMARY' size={32} />
            </Social>
          ))}
        </ButtonsContainer>
      </TextsContainer>
      <ImageContainer backgroundImage={Profile}>
        {[...Array(10)].map((_, index) => (
          <StarItem key={index}></StarItem>
        ))}
      </ImageContainer>
    </HomeSectionContainer>
  )
}
