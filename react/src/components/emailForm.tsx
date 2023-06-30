import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";
import Button from "./button.component";
import { theme } from "../styles/colortheme";
import ModalAlert from "./modalAlert.component";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 160px;
  flex-shrink: 0;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  gap: 12px;

  label {
    color: var(--gray-3, #C4C4C4);
  }

  input {
    margin-bottom: 20px;
    display: flex;
    width: 350px;
    height: 48px;
    padding: 14px 10px;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid var(--gray-3, #C4C4C4);
  }

  input::placeholder {
    color:var(--gray-3, #C4C4C4);
  }
`;

const EmailForm = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [email, setEmail] = useState<string>("");
  const gotoPassword = useNavigate();


  const handleClick = async (e: any) => {
    e.preventDefault();
    if (email === "") return;
    try {
      const res = await axios.post("http://localhost:8080", {
        email: email,
      });
      console.log(res.data)
      gotoPassword("/password-login");
      /* 
      if email already exists in DB
      gotoPassword("/password-login"); //패스워드 로그인 페이지로 이동

      else if email does not exist in DB
      gotoPassword("/password-signup"); //패스워드 회원가입 페이지로 이동

      else something similar exists
      openModal(true) //잘못된 이메일입니다! 모달 show
      */
    } catch {
      console.log("error occurred");
      gotoPassword("/password-login");
    }
  };

  return (
    <>
      <StyledDiv>
        <label>로그인이 필요해요 :)</label>
        <input
          type="email"
          placeholder="이메일 주소를 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <Button type="submit" onClick={handleClick}>
          계속
        </Button>
      </StyledDiv>
      <ModalAlert open={modalOpen} close={closeModal} label="잘못된 이메일입니다!" />
    </>
  );
};

export default EmailForm;
