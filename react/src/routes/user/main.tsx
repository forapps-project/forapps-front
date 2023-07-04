import styled from "styled-components";
import WakeupTime from "../../components/wakeupTime.component";
import ContentsBox from "../../components/contentsBox.component";

const StyledHDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(2, minmax(10px, auto));
  height: 100vh;
  background: linear-gradient(
    155deg,
    rgba(41, 41, 41, 1) 60%,
    rgba(162, 136, 255, 1)
  );
`;

const LogoBox = styled.div`
grid-row: 1/2;
`

const LogoText = styled.h4`
  color: var(--white, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
  margin-left: 5%;
  margin-top: 14px;
`;

const Main = () => {
  return (
    <StyledHDiv>
      <LogoBox>
        <LogoText>몽글</LogoText>
      </LogoBox>
      <WakeupTime />
      <ContentsBox />
    </StyledHDiv>
  );
};

export default Main;
