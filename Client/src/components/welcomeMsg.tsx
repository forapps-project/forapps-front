import styled from "styled-components";

const StyledDiv = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: 5%;
  position: relative;
  top: 7.12rem;

  h3 {
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.035rem;
    color: #202020;
  }

  span {
    color: var(--sleeper-blue-2, #6b85f7);
  }
`;

const WelcomeMsg = () => {
  return (
    <StyledDiv>
      <h3>
        안녕하세요!<br></br>숙면 여행을 위한 가이드
        <br></br>
        <span>몽글</span>입니다
      </h3>
    </StyledDiv>
  );
};

export default WelcomeMsg;
