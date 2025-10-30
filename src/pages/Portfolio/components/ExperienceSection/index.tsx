import { Title } from 'components/Title/styles'
import {
  ExperienceIcon,
  ExperienceItem,
  ExperienceHeader,
  ExperienceContent,
  ExperienceDetails,
  ExperienceContainer,
} from './styles'
import { EXPERIENCE_ITEMS } from './consts'
import { Icon } from 'components/Icon'

export const ExperienceSection = () => {
  const handleClickItem = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <ExperienceContainer>
      <ExperienceHeader>
        <Title>
          <span> My </span> Experience
        </Title>
      </ExperienceHeader>
      <ExperienceContent>
        {EXPERIENCE_ITEMS.map((item, index) => (
          <ExperienceItem
            key={index}
            onClick={() => handleClickItem(item.link)}
          >
            <ExperienceIcon>
              <Icon name='IoNewspaperSharp' color='GRAY_0' size={24} />
            </ExperienceIcon>
            <ExperienceDetails>
              <span>
                {item.period} ({item.role})
              </span>
              <h3>{item.company}</h3>
            </ExperienceDetails>
          </ExperienceItem>
        ))}
      </ExperienceContent>
    </ExperienceContainer>
  )
}
