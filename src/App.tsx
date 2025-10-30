import { ThemeProvider } from 'styled-components'

import { themes } from './themes'
import { GlobalStyle } from 'themes/globalStyle'
import { Portfolio } from 'pages/Portfolio'

function App() {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Portfolio />
    </ThemeProvider>
  )
}

export default App
