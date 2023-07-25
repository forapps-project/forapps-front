import styled from "styled-components";
import WelcomeMsg from "../../components/login/welcomeMsg";
import Footer from "../../components/login/footer";
import KakaoLogin from "../../components/login/KakaoLogin";

export const StyledGridDiv = styled.div`
  
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