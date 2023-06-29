import { useState } from "react";

import { Container, Card, Modal, Button } from "react-bootstrap";

import styled from 'styled-components';

const StyledH4 = styled.h4`

`

const Main = () => {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(true);
  };

  return (
    <>
      <Container fluid className="mt-5">
        <Container>
          <h4>지금 잠에 들면 N시간 잘 수 있어요</h4>
          <span onClick={onClick}>기상시간 변경하기</span>
        </Container>
        <Card>추천 콘텐츠 1</Card>
        <Card>추천 콘텐츠 2</Card>
      </Container>

      <Modal show={show}>
        <Modal.Body>기상시간 변경</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setShow(false);
            }}
          >
            변경하기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Main;