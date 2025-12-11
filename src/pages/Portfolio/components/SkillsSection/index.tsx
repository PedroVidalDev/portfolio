import { Icon } from 'components/Icon'
import { Title } from 'components/Title/styles'

import { SKILLS } from './consts'

import {
  IconContainer,
  SkillItem,
  SkillsContent,
  SkillsSectionContainer,
  SkillsWrapper,
  TechType,
} from './styles'

export const SkillsSection = () => {
  return (
    <SkillsSectionContainer>
      <Title style={{ textAlign: 'center' }}>
        <span>My</span> Skills
      </Title>
      <SkillsContent>
        <SkillsWrapper>
          {[...SKILLS].map((skill, index) => (
            <SkillItem key={index}>
              <IconContainer>
                <Icon name={skill.icon} color='GRAY_0' size={22} />
              </IconContainer>
              <h2>{skill.name}</h2>
              <TechType>{skill.type}</TechType>
              <p>{skill.description}</p>
            </SkillItem>
          ))}
        </SkillsWrapper>
        <SkillsWrapper aria-hidden>
          {[...SKILLS].map((skill, index) => (
            <SkillItem key={index}>
              <IconContainer>
                <Icon name={skill.icon} color='GRAY_0' size={22} />
              </IconContainer>
              <h2>{skill.name}</h2>
              <TechType>{skill.type}</TechType>
              <p>{skill.description}</p>
            </SkillItem>
          ))}
        </SkillsWrapper>
      </SkillsContent>
      <SkillsContent>
        <SkillsWrapper reverse={true}>
          {[...SKILLS].map((skill, index) => (
            <SkillItem key={index}>
              <IconContainer>
                <Icon name={skill.icon} color='GRAY_0' size={22} />
              </IconContainer>
              <h2>{skill.name}</h2>
              <TechType>{skill.type}</TechType>
              <p>{skill.description}</p>
            </SkillItem>
          ))}
        </SkillsWrapper>
        <SkillsWrapper reverse={true} aria-hidden>
          {[...SKILLS].map((skill, index) => (
            <SkillItem key={index}>
              <IconContainer>
                <Icon name={skill.icon} color='GRAY_0' size={22} />
              </IconContainer>
              <h2>{skill.name}</h2>
              <TechType>{skill.type}</TechType>
              <p>{skill.description}</p>
            </SkillItem>
          ))}
        </SkillsWrapper>
      </SkillsContent>
    </SkillsSectionContainer>
  )
}
