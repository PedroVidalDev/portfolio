import { Icon } from 'components/Icon'
import { Title } from 'components/Title/styles'

import { SKILLS } from './consts'

import {
  IconContainer,
  SkillItem,
  SkillsContent,
  SkillsSectionContainer,
} from './styles'

export const SkillsSection = () => {
  return (
    <SkillsSectionContainer>
      <Title style={{ textAlign: 'center' }}>
        <span>My</span> Skills
      </Title>
      <SkillsContent>
        {SKILLS.map((skill, index) => (
          <SkillItem key={index}>
            <IconContainer>
              <Icon name={skill.icon} color='GRAY_0' size={22} />
            </IconContainer>
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
          </SkillItem>
        ))}
      </SkillsContent>
    </SkillsSectionContainer>
  )
}
