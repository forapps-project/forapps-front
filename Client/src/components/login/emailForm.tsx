import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";
import Button from "../button.component";
import { theme } from "../../styles/colortheme";
import { useModal } from "../../hooks/useModal";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 89%;
  height: 160px;
  flex-shrink: 0;
  margin-left: 5%;
  margin-right: 5%;
  gap: 12px;

  label {
    color: var(--gray-3, #c4c4c4);
  }

  input {
    margin-bottom: 20px;
    display: flex;
    width: 100%;
    height: 48px;
    padding: 14px 10px;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid var(--gray-3, #c4c4c4);
  }

  input:focus {
    border-color: var(--sleeper-blue-1, #5581f1);
  }

  input::placeholder {
    color: var(--gray-3, #c4c4c4);
  }
`;

const EmailForm = () => {
  const { Modal, isModalOpen, openModal, closeModal } = useModal();

  const [email, setEmail] = useState<string>("");
  const gotoPassword = useNavigate();

  const handleClick = async (e: any) => {
    e.preventDefault();
    if (email === "") return;
    try {
      const res = await axios.post("/", {
        email: email,
      });
      console.log(res.data);
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
    </>
  );
};

export default EmailForm;
