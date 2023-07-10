import styled from "styled-components";
import Button from "./button.component";
import { useModal } from "../hooks/useModal";

interface modalProps {
  success: boolean;
  isModalOpen: boolean;
  close?(): void;
  successFunc?(): void;
  label: string;
  additional?: any;
  width: string;
  height: string;
  background: string;
  textColor: string;
  dimmed: string;
}

interface defaultPropsType {
  width: string;
  height: string;
  background: string;
}


const Wrapper = styled.div<defaultPropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
  border: none;
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

type dimmedProp = {
  dimmed: string;
}

export const ModalBackdrop = styled.div<dimmedProp>`
  //딤처리
  z-index: 3;
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: ${(props)=>props.dimmed};
  border-radius: 10px;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

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
  success,
  isModalOpen,
  additional,
  label,
  close,
  successFunc,
  width,
  height,
  background,
  textColor,
  dimmed,
}: modalProps) => {
  return (
    <div>
      {isModalOpen && (
        <ModalBackdrop dimmed={dimmed}>
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
            <ModalButton className="close" onClick={success? successFunc : close}>
              확인
            </ModalButton>
          </InsideBox>
        </Wrapper>
        </ModalBackdrop>
      )}
    </div>
  );
};

Modal.defaultProps = {
  width: "330px",
  height: "180px",
  background: "#FFF",
  textColor: "#4D4D4D",
  dimmed:"rgba(0, 0, 0, 0.60);"
};


export default Modal;
