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
        <Title style={{ textAlign: 'center' }}>
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
              <Icon name='FaNewspaper' color='GRAY_0' size={24} />
            </ExperienceIcon>
            <ExperienceDetails>
              <div>
                <h3>
                  {item.company} | {item.role}
                </h3>
                <span> {item.skills.join(', ')} </span>
              </div>
              <div>
                <span>{item.period}</span>
              </div>
            </ExperienceDetails>
          </ExperienceItem>
        ))}
      </ExperienceContent>
    </ExperienceContainer>
  )
}
