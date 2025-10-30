import * as IoIcons from 'react-icons/fa6'

type SocialType = {
  iconName: keyof typeof IoIcons
  url: string
}

export const SOCIALS: SocialType[] = [
  {
    iconName: 'FaGithub',
    url: 'https://github.com/PedroVidalDev',
  },
  {
    iconName: 'FaLinkedinIn',
    url: 'https://www.linkedin.com/in/pedro-vidal-5a4509255/',
  },
  {
    iconName: 'FaInstagram',
    url: 'https://www.instagram.com/vidal_pdr?igsh=MXh1c2t3ZTFta2lmdg==',
  },
]
