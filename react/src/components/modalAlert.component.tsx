import Modal from "react-bootstrap/Modal";
import Button from "./button.component";

import styled from "styled-components";

interface modalProps {
  open: boolean;
  close(): void;
}

const ModalButton = styled(Button)`
  border-radius: 12px;
`

const ModalAlert = ({ open, close }: modalProps) => {
  return (
    <Modal centered show={open}>
      <Modal.Body>잘못된 이메일입니다!</Modal.Body>
      <Modal.Footer>
        <ModalButton className="close" onClick={close}>
          확인
        </ModalButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAlert;
