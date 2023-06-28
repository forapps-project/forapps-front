import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 251px;
  color: var(--gray-2, #777);
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.2px;
`;

const Footer = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <StyledDiv>
        <span>
          로그인 시 몽글 서비스의{" "}
          <span onClick={() => setShow(true)}>
            이용약관 및 개인정보 보호정책
          </span>
          에 동의하게 됩니다.
        </span>
      </StyledDiv>

      <Modal show={show}>
        <Modal.Body>이용약관 및 개인정보 보호정책</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setShow(false);
            }}
          >
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Footer;
