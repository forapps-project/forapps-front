import styled from "styled-components";
import { useModal } from "../hooks/useModal";

const StyledDiv = styled.div`
  margin-top: 251px;
  color: var(--gray-2, #777);
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.2px;
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;

const Footer = () => {
  const { ModalAlert, isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <StyledDiv>
        <span>
          로그인 시 몽글 서비스의{" "}
          <StyledSpan onClick={openModal}>
            이용약관 및 개인정보 보호정책
          </StyledSpan>
          에 동의하게 됩니다.
        </span>
      </StyledDiv>

      <ModalAlert
        isModalOpen={isModalOpen}
        close={closeModal}
        label="개인정보 보호정책"
      />
    </>
  );
};

export default Footer;
