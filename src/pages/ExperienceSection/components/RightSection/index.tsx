import { useLanguageContext } from 'contexts/LanguageContext'

import { ExperienceTitleMap } from './consts'

import type { RightSectionProps } from './types'

import { RightSectionContainer, RightSectionContainerTitle } from './styles'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Skills } from './components/Skills'

export const RightSection = (props: RightSectionProps) => {
  const { selectedExperienceItem } = props

  const { currentLang } = useLanguageContext()
  const lang = currentLang as 'en' | 'pt'

  return (
    <RightSectionContainer>
      <RightSectionContainerTitle>
        {
          ExperienceTitleMap[
            selectedExperienceItem as keyof typeof ExperienceTitleMap
          ][lang]
        }
      </RightSectionContainerTitle>
      {selectedExperienceItem === 'experience' && <Experience />}

      {selectedExperienceItem === 'skills' && <Skills />}

      {selectedExperienceItem === 'education' && <Education />}
    </RightSectionContainer>
  )
}
