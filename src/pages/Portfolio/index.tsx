import { ExperienceSection } from './components/ExperienceSection'
import { HomeSection } from './components/HomeSection'
import { SkillsSection } from './components/SkillsSection'

import { PortfolioContainer } from './styles'

export const Portfolio = () => {
  return (
    <PortfolioContainer>
      <HomeSection />
      <ExperienceSection />
      <SkillsSection />
    </PortfolioContainer>
  )
}
