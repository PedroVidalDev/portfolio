import { ThemeProvider } from 'styled-components'
import { Bounce, ToastContainer } from 'react-toastify'

import { themes } from './themes'
import { GlobalStyle } from 'themes/globalStyle'

import { LanguageContextProvider } from 'contexts/LanguageContext'
import { AppRoutes } from './Routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes}>
        <LanguageContextProvider>
          <GlobalStyle />
          <ToastContainer
            position='top-center'
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            theme='dark'
            transition={Bounce}
          />
          <AppRoutes />
        </LanguageContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
