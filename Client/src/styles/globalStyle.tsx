import { createGlobalStyle } from "styled-components";

import background from "../images/main-background.png";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        min-height: calc(100% + env(safe-area-inset-top));
        padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    }

    body {
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        height: 100vh;
        background-image: url(${background});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    body::-webkit-scrollbar {
        display: none;
    }
`;

export default GlobalStyle;
