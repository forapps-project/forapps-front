import Button from "./button.component";
import { ReactComponent as Kakao } from "../icons/kakao2.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  position: relative;
  top: 17rem;
`;

const KakaoButton = styled(Button)`
  display: flex;
  display: inline-block;
  width: 21.875rem;
  height: 3rem;
  padding: 0.75rem 2.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.75rem;
  background: #fee500;
  border: none;

  color: #3a3a3a;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.02rem;
`;



const KakaoLogin = () => {
  const link = "http://43.200.203.22:8080/oauth2/authorization/kakao";

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <Wrapper>
      <KakaoButton onClick={loginHandler}>
        <Kakao />
        카카오 로그인
      </KakaoButton>
    </Wrapper>
  );
};

export default KakaoLogin;
