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
import { SOCIALS } from './consts'

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
          <Button
            label='See my projects'
            type='primary'
            onClick={() =>
              window.open('https://github.com/PedroVidalDev', '_blank')
            }
          />
          <Button
            label='Contact me'
            type='secondary'
            onClick={() =>
              window.open('mailto:pedrohvidals@gmail.com', '_blank')
            }
          />
        </ButtonsContainer>
      </TextsContainer>
      <ImagesContainer>
        <ProfileImage
          src='https://avatars.githubusercontent.com/u/113215138?v=4'
          alt='Profile Image'
        />
        <SocialContainer>
          {SOCIALS.map((social) => (
            <Social
              key={social.url}
              onClick={() => window.open(social.url, '_blank')}
            >
              <Icon name={social.iconName} color='PRIMARY' size={24} />
            </Social>
          ))}
        </SocialContainer>
      </ImagesContainer>
    </HomeSectionContainer>
  )
}
