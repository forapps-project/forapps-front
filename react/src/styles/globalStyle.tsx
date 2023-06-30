import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }
`

export default GlobalStyle;