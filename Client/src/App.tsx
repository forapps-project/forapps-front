import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/enterpages/loginPage";
import UserRouter from "./userRoutes";
import PasswordPageLogin from "./routes/enterpages/passwordPage_login";
import PasswordPageSignup from "./routes/enterpages/passwordPage_signUp";
import { useModal } from "./hooks/useModal";

import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/colortheme";

import styled from "styled-components";


function App() {
  const { isModalOpen } = useModal();
  console.log(isModalOpen)

  return (
    <Dimmed isDimmed={isModalOpen}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/password-login" element={<PasswordPageLogin />} />
              <Route path="/password-signup" element={<PasswordPageSignup />} />
              <Route path="/*" element={<UserRouter />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
    </Dimmed>
  );
}

interface dimmedprops {
  isDimmed: boolean;
}

const Dimmed = styled.div<dimmedprops>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  box-sizing: border-box;
  z-index: 1000000;
  background-color: ${(props) =>
    props.isDimmed ? "rgba(32, 32, 32, 0.90)" : "none"};
`;

export default App;
