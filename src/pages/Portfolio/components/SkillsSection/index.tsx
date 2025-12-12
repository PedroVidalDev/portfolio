import { useState } from 'react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  const [isHoveringLanguages, setIsHoveringLanguages] = useState(false)
  const [isHoveringTools, setIsHoveringTools] = useState(false)

  return (
    <SkillsSectionContainer id='skills'>
      <Title style={{ textAlign: 'center' }}>
        <span>{t('skill.skillTitle.part1')}</span> {t('skill.skillTitle.part2')}
      </Title>
      <SkillsSubtitle side='left'>
        {t('skill.skillLanguageTitle.part1')}{' '}
        <span>{t('skill.skillLanguageTitle.part2')}</span>{' '}
        {t('skill.skillLanguageTitle.part3')}
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
        {t('skill.skillTollsTitle.part1')}{' '}
        <span>{t('skill.skillTollsTitle.part2')}</span>{' '}
        {t('skill.skillTollsTitle.part3')}
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
