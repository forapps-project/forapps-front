import EmailForm from "../../components/emailForm";
import styled from "styled-components";
import WelcomeMsg from "../../components/welcomeMsg";
import Footer from "../../components/footer";

export const StyledGridDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(3, minmax(200px, auto));
`;

const LoginPage = () => {
  return (
    <StyledGridDiv>
      <WelcomeMsg />
      <EmailForm />
      <Footer />
    </StyledGridDiv>
  );
};

export default LoginPage;
