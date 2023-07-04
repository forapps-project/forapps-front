import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import WelcomeMsg from "../../components/welcomeMsg";
import Footer from "../../components/footer";

import { StyledDiv } from "../../components/emailForm";
import { StyledGridDiv } from "./loginPage";
import Button from "../../components/button.component";

const PasswordPageSignup = () => {
  const [password, setPassword] = useState<string>("");
  const gotoMain = useNavigate();

  const handleClick = async (e: any) => {
    e.preventDefault();
    if (password === "") return;
    try {
      const res = await axios.post("/", {
        password: password,
      });
      /* 
      server:
      패스워드 받아서 DB에 저장(이메일과 함께 키 쌍으로)
      그리고 닉네임 랜덤 생성
      gotoMain("/main"); //메인으로 이동
      */
    } catch {
      console.log('error occurred')
    }
    
  };

  return (
    <StyledGridDiv>
      <WelcomeMsg />
      <div className="password-login">
        <StyledDiv>
          <label>회원가입이 필요해요 :)</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <Button type="submit" onClick={handleClick}>
            회원가입
          </Button>
        </StyledDiv>
      </div>
      <Footer />
    </StyledGridDiv>
  );
};
export default PasswordPageSignup;
