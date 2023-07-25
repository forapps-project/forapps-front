import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import WelcomeMsg from "../../components/login/welcomeMsg";
import Footer from "../../components/login/footer";
import { StyledDiv } from "../../components/login/emailForm";
import { StyledGridDiv } from "./loginPage";
import Button from "../../components/button.component";
import { useModal } from "../../hooks/useModal";

import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  width: 100%;
  text-align: end;
  color: var(--gray-3, #c4c4c4);
  cursor: pointer;
`;

const PasswordPageLogin = () => {
  const { Modal, isModalOpen, openModal, closeModal } = useModal();

  const [modalOpen2, setModalOpen2] = useState<boolean>(false);
  const openModal2 = () => {
    setModalOpen2(true);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };

  const [password, setPassword] = useState<string>("");
  const gotoMain = useNavigate();

  const handleClick = async (e: any) => {
    e.preventDefault();
    if (password === "") return;

    /* 서버로 password post */
    try {
      const res = await axios.post("/", {
        password: password,
      });
      gotoMain("/main");
      /*
      server: 
      앞에서 작성한 이메일에 해당하는 패스워드를 찾기

      if 찾았다면 
      gotoMain("/main"); //메인으로 이동

      else
      openModal(); //비밀번호 틀렸다는 모달창 띄우기
      */
    } catch {
      console.log("error occurred");
    }
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

      {/* <Modal success={false} isModalOpen={isModalOpen} close={closeModal} label="잘못된 비밀번호입니다!" />
      <Modal success={false} isModalOpen={modalOpen2} close={closeModal2} label={"입력하신 이메일로\n 임시 비밀번호를 전송했습니다:)"} /> */}
    </>
  );
};

export default PasswordPageLogin;
