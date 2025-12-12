import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { FooterSection } from './components/FooterSection'
import { HomeSection } from './components/HomeSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'

import { PortfolioContainer } from './styles'

export const Portfolio = () => {
  return (
    <PortfolioContainer>
      <HomeSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </PortfolioContainer>
  )
}
