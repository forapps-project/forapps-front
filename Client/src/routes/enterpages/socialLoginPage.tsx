import EmailForm from "../../components/emailForm";
import styled from "styled-components";
import WelcomeMsg from "../../components/welcomeMsg";
import Footer from "../../components/footer";
import KakaoLogin from "../../components/KakaoLogin";

export const StyledGridDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(3, minmax(200px, auto));
`;

const SocialLoginPage = () => {

  return (
    <StyledGridDiv>
      <WelcomeMsg />
      <KakaoLogin />
      <Footer />
    </StyledGridDiv>
  );
};

export default SocialLoginPage;