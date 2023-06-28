import { useState } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeMsg from "../../components/welcomeMsg";
import Footer from "../../components/footer";

import { StyledDiv } from "../../components/emailForm";
import { StyledGridDiv } from "./loginPage";
import Button from "../../components/button.component";

const PasswordPageSignup = () => {
  const [password, setPassword] = useState<string>("");
  const gotoMain = useNavigate();

  const handleClick = (e: any) => {
    if (password === "") return;
    e.preventDefault();
    gotoMain("/main");
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
