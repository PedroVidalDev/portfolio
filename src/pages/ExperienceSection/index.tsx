import { useState } from 'react'

import { LeftSection } from './components/LeftSection'

import { ExperienceContainer } from './styles'
import { RightSection } from './components/RightSection'

export const ExperienceSection = () => {
  const [selectedExperienceItem, setSelectedExperienceItem] = useState<
    string | null
  >('experience')

  return (
    <ExperienceContainer id='experience'>
      <LeftSection
        selectedExperienceItem={selectedExperienceItem}
        setSelectedExperienceItem={setSelectedExperienceItem}
      />
      <RightSection selectedExperienceItem={selectedExperienceItem} />
    </ExperienceContainer>
  )
}
