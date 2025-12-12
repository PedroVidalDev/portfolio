import { ThemeProvider } from 'styled-components'
import { Bounce, ToastContainer } from 'react-toastify'

import { themes } from './themes'
import { GlobalStyle } from 'themes/globalStyle'

import { Portfolio } from 'pages/Portfolio'

import { LanguageContextProvider } from 'contexts/LanguageContext'

function App() {
  return (
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
        <Portfolio />
      </LanguageContextProvider>
    </ThemeProvider>
  )
}

export default App
