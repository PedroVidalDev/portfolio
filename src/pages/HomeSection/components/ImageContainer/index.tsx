import { SOCIALS } from './consts'

import Profile from 'assets/profile.png'

import { Icon } from 'components/Icon'

import {
  Social,
  StarItem,
  ImageContainer as ImageContainerStyled,
  ButtonsContainer,
  ImageContainerScrap,
} from './styles'

export const ImageContainer = () => {
  return (
    <ImageContainerScrap>
      <ImageContainerStyled backgroundImage={Profile}>
        {[...Array(10)].map((_, index) => (
          <StarItem key={index}></StarItem>
        ))}
      </ImageContainerStyled>
      <ButtonsContainer>
        {SOCIALS.map((social) => (
          <Social onClick={() => window.open(social.url, '_blank')}>
            <Icon name={social.iconName} color='LIGHT_PRIMARY' size={24} />
          </Social>
        ))}
      </ButtonsContainer>
    </ImageContainerScrap>
  )
}
