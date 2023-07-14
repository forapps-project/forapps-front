import { createGlobalStyle } from "styled-components";

import background from "../images/main-background.png";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
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
