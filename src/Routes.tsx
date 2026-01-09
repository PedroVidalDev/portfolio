import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'

import { HomeSection } from 'pages/HomeSection'
import { ContactSection } from 'pages/ContactSection'
import { ProjectsSection } from 'pages/ProjectsSection'
import { HeaderSection } from 'components/HeaderSection'
import { ExperienceSection } from 'pages/ExperienceSection'

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`

export const AppRoutes = () => {
  return (
    <PortfolioContainer>
      <HeaderSection />
      <Routes>
        <Route path='/' element={<HomeSection />} />
        <Route path='/experience' element={<ExperienceSection />} />
        <Route path='/projects' element={<ProjectsSection />} />
        <Route path='contact' element={<ContactSection />} />
      </Routes>
    </PortfolioContainer>
  )
}
