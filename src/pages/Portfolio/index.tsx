import { HomeSection } from './components/HomeSection'
import { FooterSection } from './components/FooterSection'
import { SkillsSection } from './components/SkillsSection'
import { ContactSection } from './components/ContactSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ExperienceSection } from './components/ExperienceSection'

import { PortfolioContainer } from './styles'
import { HeaderSection } from './components/HeaderSection'

export const Portfolio = () => {
  return (
    <PortfolioContainer>
      <HeaderSection />
      <HomeSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </PortfolioContainer>
  )
}
