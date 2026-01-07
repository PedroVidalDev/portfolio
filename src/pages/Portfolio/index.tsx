import { HomeSection } from '../HomeSection'
import { FooterSection } from '../../components/FooterSection'
import { SkillsSection } from '../SkillsSection'
import { ContactSection } from '../ContactSection'
import { ProjectsSection } from '../ProjectsSection'
import { ExperienceSection } from '../ExperienceSection'

import { PortfolioContainer } from './styles'
import { HeaderSection } from '../../components/HeaderSection'

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
