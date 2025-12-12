import { useTranslation } from 'react-i18next'

import {
  TechBadge,
  TechBadgeWrapper,
} from 'components/TechBadgeComponents/styles'
import { Title } from 'components/Title/styles'

import { PROJECTS_ITEMS } from './consts'

import {
  ProjectsHeader,
  ProjectsContent,
  ProjectsContainer,
  ProjectItem,
  ProjectImage,
  ProjectInfo,
} from './styles'
import { useLanguageContext } from 'contexts/LanguageContext'

export const ProjectsSection = () => {
  const { t } = useTranslation()

  const { currentLang } = useLanguageContext()
  const lang = currentLang as 'en' | 'pt'

  return (
    <ProjectsContainer id='projects'>
      <ProjectsHeader>
        <Title style={{ textAlign: 'center' }}>
          <span> {t('project.projectTitle.part1')} </span>
          {t('project.projectTitle.part2')}
        </Title>
      </ProjectsHeader>
      <ProjectsContent>
        {PROJECTS_ITEMS.map((item, index) => (
          <ProjectItem
            key={index}
            onClick={() => window.open(item.link, '_blank')}
          >
            <ProjectImage image={item.image} />
            <ProjectInfo>
              <TechBadgeWrapper>
                {item.technologies.map((tech, techIndex) => (
                  <TechBadge key={techIndex}>{tech}</TechBadge>
                ))}
              </TechBadgeWrapper>
              <h2>{item.name}</h2>
              <p>{item.description[lang]}</p>
            </ProjectInfo>
          </ProjectItem>
        ))}
      </ProjectsContent>
    </ProjectsContainer>
  )
}
