import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/enterpages/loginPage";
import UserRouter from "./userRoutes";
import PasswordPageLogin from "./routes/enterpages/passwordPage_login";
import PasswordPageSignup from "./routes/enterpages/passwordPage_signUp";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/colortheme";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
