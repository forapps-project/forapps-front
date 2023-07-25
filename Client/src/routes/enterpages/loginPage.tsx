import EmailForm from "../../components/login/emailForm";
import styled from "styled-components";
import WelcomeMsg from "../../components/login/welcomeMsg";
import Footer from "../../components/login/footer";

export const StyledGridDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(2, minmax(200px, auto));
`;

const Statusbar = styled.div`
  background-color: grey;
  position: fixed;
  top: 0;
  width: 390px;
  height: 44px;
  text-align: center;
`;
const LoginPage = () => {
  return (
    <StyledGridDiv>
      <Statusbar>STATUS BAR</Statusbar>
      <WelcomeMsg />
      <EmailForm />
      <Footer />
    </StyledGridDiv>
  );
};

export default LoginPage;
