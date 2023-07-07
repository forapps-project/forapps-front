import styled from "styled-components";
import Button from "./button.component";
import { useModal } from "../hooks/useModal";

interface modalProps {
  isModalOpen: boolean;
  close(): void;
  label: string;
  additional?: any;
  width: string;
  height: string;
  background: string;
  textColor: string;
}

const InsideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  
`;

const Body = styled.div``;

type TextColor = {
  textColor: string;
};

const Contents = styled.h6<TextColor>`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: center;
  position: relative;
  top: 1.2px;
  margin-bottom: 0;
  white-space: pre-wrap;
  color: ${(props) => props.textColor};
  height: width;
`;

const ModalButton = styled(Button)`
  display: flex;
  width: 300px;
  height: 52px;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-size: 16px;
`;

const Modal = ({
  isModalOpen,
  additional,
  label,
  close,
  width,
  height,
  background,
  textColor,
}: modalProps) => {
  return (
    <div>
      {isModalOpen && (
        <Wrapper width={width} height={height} background={background}>
          <InsideBox>
            <Body>
              <Contents textColor={textColor}>
                {label.split("\n").map((letter, index) => (
                  <div key={index}>
                    {letter}
                    <br />
                  </div>
                ))}
              </Contents>
              {additional ? (
                <Contents textColor={textColor}>{additional}</Contents>
              ) : null}
            </Body>
            <ModalButton className="close" onClick={close}>
              확인
            </ModalButton>
          </InsideBox>
        </Wrapper>
      )}
    </div>
  );
};

interface defaultPropsType {
  width: string;
  height: string;
  background: string;
}

Modal.defaultProps = {
  width: "330px",
  height: "180px",
  background: "#FFF",
  textColor: "#4D4D4D",
};

const Wrapper = styled.div<defaultPropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
  border: 1px solid grey;
  border-radius: 20px;
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Modal;
