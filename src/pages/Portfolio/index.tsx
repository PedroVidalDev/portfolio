import { ExperienceSection } from './components/ExperienceSection'
import { HomeSection } from './components/HomeSection'

import { PortfolioContainer } from './styles'

export const Portfolio = () => {
  return (
    <PortfolioContainer>
      <HomeSection />
      <ExperienceSection />
    </PortfolioContainer>
  )
}
