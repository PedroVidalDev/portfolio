import { useState } from 'react'

import { Icon } from 'components/Icon'
import { Title } from 'components/Title/styles'
import { TechBadge } from 'components/TechBadgeComponents/styles'

import { SKILLS_LANGUAGES, SKILLS_TOOLS } from './consts'

import {
  IconContainer,
  SkillItem,
  SkillsContent,
  SkillsSectionContainer,
  SkillsSubtitle,
  SkillsWrapper,
} from './styles'

export const SkillsSection = () => {
  const [isHoveringLanguages, setIsHoveringLanguages] = useState(false)
  const [isHoveringTools, setIsHoveringTools] = useState(false)

  return (
    <SkillsSectionContainer>
      <Title style={{ textAlign: 'center' }}>
        <span>My</span> Skills
      </Title>
      <SkillsSubtitle side='left'>
        Languages <span>&</span> Frameworks
      </SkillsSubtitle>
      <SkillsContent
        onMouseEnter={() => setIsHoveringLanguages(true)}
        onMouseLeave={() => setIsHoveringLanguages(false)}
      >
        <SkillsWrapper isPaused={isHoveringLanguages}>
          {SKILLS_LANGUAGES.map((skill, index) => (
            <SkillItem key={index}>
              <IconContainer>
                <Icon name={skill.icon} color='GRAY_0' size={22} />
              </IconContainer>
              <h2>{skill.name}</h2>
              <TechBadge>{skill.type}</TechBadge>
              <p>{skill.description}</p>
            </SkillItem>
          ))}
        </SkillsWrapper>
        <SkillsWrapper aria-hidden isPaused={isHoveringLanguages}>
          {SKILLS_LANGUAGES.map((skill, index) => (
            <SkillItem key={index}>
              <IconContainer>
                <Icon name={skill.icon} color='GRAY_0' size={22} />
              </IconContainer>
              <h2>{skill.name}</h2>
              <TechBadge>{skill.type}</TechBadge>
              <p>{skill.description}</p>
            </SkillItem>
          ))}
        </SkillsWrapper>
      </SkillsContent>

      <SkillsSubtitle side='right'>
        Tools <span>&</span> Platforms
      </SkillsSubtitle>
      <SkillsContent
        onMouseEnter={() => setIsHoveringTools(true)}
        onMouseLeave={() => setIsHoveringTools(false)}
      >
        <SkillsWrapper reverse={true} isPaused={isHoveringTools}>
          {SKILLS_TOOLS.map((skill, index) => (
            <SkillItem key={index}>
              <IconContainer>
                <Icon name={skill.icon} color='GRAY_0' size={22} />
              </IconContainer>
              <h2>{skill.name}</h2>
              <TechBadge>{skill.type}</TechBadge>
              <p>{skill.description}</p>
            </SkillItem>
          ))}
        </SkillsWrapper>
        <SkillsWrapper reverse={true} aria-hidden isPaused={isHoveringTools}>
          {SKILLS_TOOLS.map((skill, index) => (
            <SkillItem key={index}>
              <IconContainer>
                <Icon name={skill.icon} color='GRAY_0' size={22} />
              </IconContainer>
              <h2>{skill.name}</h2>
              <TechBadge>{skill.type}</TechBadge>
              <p>{skill.description}</p>
            </SkillItem>
          ))}
        </SkillsWrapper>
      </SkillsContent>
    </SkillsSectionContainer>
  )
}
