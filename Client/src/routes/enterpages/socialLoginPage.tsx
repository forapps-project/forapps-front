import styled from "styled-components";
import WelcomeMsg from "../../components/welcomeMsg";
import Footer from "../../components/footer";
import KakaoLogin from "../../components/KakaoLogin";

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