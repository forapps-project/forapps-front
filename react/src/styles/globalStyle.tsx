import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }

    body::-webkit-scrollbar {
        display: none;
    }
`;

export default GlobalStyle;
