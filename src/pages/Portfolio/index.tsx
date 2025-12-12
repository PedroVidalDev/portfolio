import { HomeSection } from './components/HomeSection'
import { FooterSection } from './components/FooterSection'
import { SkillsSection } from './components/SkillsSection'
import { ContactSection } from './components/ContactSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ExperienceSection } from './components/ExperienceSection'

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
