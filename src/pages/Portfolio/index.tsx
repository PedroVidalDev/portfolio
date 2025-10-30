import { ExperienceSection } from './components/ExperienceSection'
import { FooterSection } from './components/FooterSection'
import { HomeSection } from './components/HomeSection'
import { SkillsSection } from './components/SkillsSection'

import { PortfolioContainer } from './styles'

export const Portfolio = () => {
  return (
    <PortfolioContainer>
      <HomeSection />
      <ExperienceSection />
      <SkillsSection />
      <FooterSection />
    </PortfolioContainer>
  )
}
