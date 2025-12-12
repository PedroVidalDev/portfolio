import { Icon } from 'components/Icon'
import { Title } from 'components/Title/styles'

import { SKILLS_LANGUAGES, SKILLS_TOOLS } from './consts'

import {
  IconContainer,
  SkillItem,
  SkillsContent,
  SkillsSectionContainer,
  SkillsSubtitle,
  SkillsWrapper,
  TechType,
} from './styles'

export const SkillsSection = () => {
  return (
    <SkillsSectionContainer>
      <Title style={{ textAlign: 'center' }}>
        <span>My</span> Skills
      </Title>
      <SkillsSubtitle side='left'>
        Languages <span>&</span> Frameworks
      </SkillsSubtitle>
      <SkillsContent>
        <SkillsWrapper>
          {SKILLS_LANGUAGES.map((skill, index) => (
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
          {SKILLS_LANGUAGES.map((skill, index) => (
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

      <SkillsSubtitle side='right'>
        Tools <span>&</span> Platforms
      </SkillsSubtitle>
      <SkillsContent>
        <SkillsWrapper reverse={true}>
          {SKILLS_TOOLS.map((skill, index) => (
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
          {SKILLS_TOOLS.map((skill, index) => (
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
