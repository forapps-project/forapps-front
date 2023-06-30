import Modal from "react-bootstrap/Modal";
import Button from "./button.component";

import styled from "styled-components";
import "./modalAlert.styles.css";

interface modalProps {
  open: boolean;
  close(): void;
  label: string;
}

const ModalButton = styled(Button)`
  border-radius: 12px;
  width: 320px;
  height: 52px;
`;

const Contents = styled.h6`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
  text-align: center;
  margin-top: 36px;
  white-space: pre-wrap;
`;

const ModalAlert = ({ open, close, label }: modalProps) => {
  return (
    <Modal
      centered
      show={open}
      dialogClassName="border-radius-2"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Modal.Body className="modal-header border-0 d-flex flex-column justify-content-center align-items-center">
        <Contents>{label.split("\n").map((letter)=>(<>{letter}<br /></>))}</Contents>
      </Modal.Body>
      <Modal.Footer className="modal-header border-0">
        <ModalButton className="close" onClick={close}>
          확인
        </ModalButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAlert;
