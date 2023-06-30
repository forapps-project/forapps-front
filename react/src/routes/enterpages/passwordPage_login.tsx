import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "react-bootstrap";

import WelcomeMsg from "../../components/welcomeMsg";
import Footer from "../../components/footer";

import styled from "styled-components";
import { StyledDiv } from "../../components/emailForm";
import { StyledGridDiv } from "./loginPage";
import Button from "../../components/button.component";
import ModalAlert from "../../components/modalAlert.component";

const StyledSpan = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  width: 100%;
  text-align: end;
  color: var(--gray-3, #C4C4C4);
  cursor: pointer;
`;

const PasswordPageLogin = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalOpen2, setModalOpen2] = useState<boolean>(false);
  const openModal2 = () => {setModalOpen2(true)}
  const closeModal2 = () => {setModalOpen2(false)}

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [password, setPassword] = useState<string>("");
  const gotoMain = useNavigate();

  const handleClick = async (e: any) => {
    e.preventDefault();
    if (password === "") return;
    
    /* 서버로 password post */
    try {
      const res = await axios.post("url", {
        password: password,
      });
    } catch {

    }

    gotoMain("/main");
  };

  return (
    <>
      <StyledGridDiv>
        <WelcomeMsg />
        <div className="password-login">
          <StyledDiv>
            <label>로그인이 필요해요 :)</label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <Button type="submit" onClick={handleClick}>
              로그인
            </Button>
            <StyledSpan onClick={openModal2}>비밀번호를 잊으셨나요?</StyledSpan>
          </StyledDiv>
        </div>
        <Footer />
      </StyledGridDiv>

      <ModalAlert open={modalOpen} close={closeModal} label="잘못된 비밀번호입니다!" />
      <ModalAlert open={modalOpen2} close={closeModal2} label={"입력하신 이메일로\n 임시 비밀번호를 전송했습니다:)"} />
    </>
  );
};

export default PasswordPageLogin;
