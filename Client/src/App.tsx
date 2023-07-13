import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/enterpages/loginPage";
import UserRouter from "./userRoutes";
import PasswordPageLogin from "./routes/enterpages/passwordPage_login";
import PasswordPageSignup from "./routes/enterpages/passwordPage_signUp";
import SocialLoginPage from "./routes/enterpages/socialLoginPage";

import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/colortheme";
import RedirectionPage from "./routes/enterpages/redirectionPage";



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SocialLoginPage />} />
            {/* <Route path="/oauth2/authorization/kakao" element={<RedirectionPage />} /> */}
            <Route path="/*" element={<UserRouter />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
