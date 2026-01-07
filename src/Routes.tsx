import { HeaderSection } from 'components/HeaderSection'
import { HomeSection } from 'pages/HomeSection'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

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
      </Routes>
    </PortfolioContainer>
  )
}
