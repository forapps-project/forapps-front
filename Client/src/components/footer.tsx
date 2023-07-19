import styled from "styled-components";
import { useModal } from "../hooks/useModal";

const Wrapper = styled.div`
  text-align: center;
  width: 17rem;
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const Span = styled.span`
  display: inline-block;
  color: var(--gray-2, #DBDBDB);
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.015rem;
`;

const StyledSpan = styled.span`
  font-weight: 700;
`;

const Footer = () => {
  const { Modal, isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Wrapper>
        <Span>
          로그인 시 몽글 서비스의 <br></br>
          <StyledSpan onClick={openModal}>
            이용약관 및 개인정보 보호정책
          </StyledSpan>
          에 동의하게 됩니다.
        </Span>
      </Wrapper>

      <Modal
        success={false}
        isModalOpen={isModalOpen}
        close={closeModal}
        label="개인정보 보호정책"
        dimmed={"rgba(32, 32, 32, 0.90)"}
      />
    </>
  );
};

export default Footer;
