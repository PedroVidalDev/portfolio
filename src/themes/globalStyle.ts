import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        position: relative;
    }

    body {
        font-family: "Poppins", sans-serif;
    }

    #root{
        position: relative;
        display: flex;
        width: 100%;
        height: 100vh;
        background-color: #FFF;
    }
`
