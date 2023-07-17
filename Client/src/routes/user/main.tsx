import styled from "styled-components";
import ContentsBox from "../../components/contentsBox.component";
import SleepingTimeBox from "../../components/sleepingTimeBox.component";
import { useLocation } from "react-router-dom";



const StyledHDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(2, minmax(10px, auto));
  height: 100vh;
  /* background: linear-gradient(
    155deg,
    rgba(41, 41, 41, 1) 60%,
    rgba(162, 136, 255, 1)
  ); */

`;

const LogoBox = styled.div`
  grid-row: 1/2;
`;

const LogoText = styled.h4`
  color: var(--white, #fff);
  font-family: "yg-jalnan";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.03rem;
  margin-left: 1.25rem;
  margin-top: 3.81rem;
`;

const Main = () => {
  return (
    <StyledHDiv>
      <LogoBox>
        <LogoText>몽글</LogoText>
      </LogoBox>
      <SleepingTimeBox />
      <ContentsBox />
    </StyledHDiv>
  );
};

export default Main;
