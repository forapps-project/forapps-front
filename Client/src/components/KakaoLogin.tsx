import { useNavigate } from "react-router-dom";

const KakaoLogin = () => {
  const navigate = useNavigate();
  const REST_API_KEY = "백엔드";
  const REDIRECT_URI = "백엔드";
  const link = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <button onClick={loginHandler}>카카오 로그인</button>
  )
};

export default KakaoLogin;
