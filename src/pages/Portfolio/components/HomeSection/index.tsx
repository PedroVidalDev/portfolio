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
  return (
    <HomeSectionContainer>
      <TextsContainer>
        <span>Fullstack Software Developer</span>
        <Title>
          <span> Hey! </span> I'm <br /> Pedro Vidal
        </Title>
        <p>
          I am a passionate software developer with experience in building
          fullstack applications with a large number of stacks, always eager to
          learn new technologies and improve my skills.
        </p>

        <ButtonsContainer>
          {SOCIALS.map((social) => (
            <Social>
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
