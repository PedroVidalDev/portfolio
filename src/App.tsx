import { ThemeProvider } from 'styled-components'

import { themes } from './themes'
import { GlobalStyle } from 'themes/globalStyle'
import { Portfolio } from 'pages/Portfolio'
import { Bounce, ToastContainer } from 'react-toastify'

function App() {
  return (
    <ThemeProvider theme={themes}>
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
    </ThemeProvider>
  )
}

export default App
