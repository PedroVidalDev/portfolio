import * as IoIcons from 'react-icons/io5'

type SocialType = {
  iconName: keyof typeof IoIcons
  url: string
}

export const SOCIALS: SocialType[] = [
  {
    iconName: 'IoLogoGithub',
    url: 'https://github.com/PedroVidalDev',
  },
  {
    iconName: 'IoLogoLinkedin',
    url: 'https://www.linkedin.com/in/pedro-vidal-5a4509255/',
  },
  {
    iconName: 'IoLogoInstagram',
    url: 'https://www.instagram.com/vidal_pdr?igsh=MXh1c2t3ZTFta2lmdg==',
  },
]
