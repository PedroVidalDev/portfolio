import { Button } from 'components/Button'
import {
  ButtonsContainer,
  HomeSectionContainer,
  ImagesContainer,
  ProfileImage,
  Social,
  SocialContainer,
  TextsContainer,
} from './styles'
import { Icon } from 'components/Icon'
import { Title } from 'components/Title/styles'

export const HomeSection = () => {
  return (
    <HomeSectionContainer>
      <TextsContainer>
        <span>Fullstack Software Developer</span>
        <Title>
          <span> Hey! </span> I'm <br /> Pedro Vidal
        </Title>
        <p>
          I am a passionate software developer with experience in building web
          applications using the MERN stack, always eager to learn new
          technologies and improve my skills.
        </p>

        <ButtonsContainer>
          <Button label='See my projects' type='primary' onClick={() => {}} />
          <Button label='About me' type='secondary' onClick={() => {}} />
        </ButtonsContainer>
      </TextsContainer>
      <ImagesContainer>
        <ProfileImage
          src='https://avatars.githubusercontent.com/u/113215138?v=4'
          alt='Profile Image'
        />
        <SocialContainer>
          <Social>
            <Icon name='IoLogoLinkedin' color='PRIMARY' size={24} />
          </Social>
          <Social>
            <Icon name='IoLogoGithub' color='PRIMARY' size={24} />
          </Social>
          <Social>
            <Icon name='IoLogoInstagram' color='PRIMARY' size={24} />
          </Social>
        </SocialContainer>
      </ImagesContainer>
    </HomeSectionContainer>
  )
}
