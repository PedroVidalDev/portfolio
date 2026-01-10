import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        position: relative;

        scroll-behavior: smooth;

        scrollbar-width: thin;
    }

    body {
        font-family: "Poppins", sans-serif;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    #root{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        background-color: #010108;
        overflow: hidden;
    }

    *::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #9333ea; 
        border-radius: 4px;
    }

    *::-webkit-scrollbar-button {
        display: none;
        height: 0;
        width: 0;
    }

    *::-webkit-scrollbar-button:start:decrement,
    *::-webkit-scrollbar-button:end:increment {
        display: none;
        height: 0;
        width: 0;
    }

    /* Firefox */
    * {
        scrollbar-width: thin;
        scrollbar-color: #9333ea transparent; /* Changed second color to transparent */
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
