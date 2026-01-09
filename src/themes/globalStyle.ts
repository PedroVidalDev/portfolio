import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        position: relative;

        scroll-behavior: smooth;
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

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #9333ea;
        border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #7e22ce;
    }

    /* Firefox */
    * {
        scrollbar-width: thin;
        scrollbar-color: #9333ea #f1f1f1;
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
