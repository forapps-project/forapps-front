import styled from "styled-components";

const StyledDiv = styled.div`
  width: 270px;
  height: 105px;
  margin-left: 20px;
  margin-top: 70px;
  margin-right: 100px;
  margin-bottom: 113px;
  
  h3 {
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: -0.56px;
    color: #202020;
  }
  span {
    color: var(--sleeper-blue-2, #6b85f7);
  }
`;

const WelcomeMsg = () => {
  return (
    <StyledDiv>
      <h3>안녕하세요!</h3>
      <h3>숙면 여행을 위한 가이드</h3>
      <h3>
        <span>몽글</span>입니다
      </h3>
    </StyledDiv>
  );
};

export default WelcomeMsg;
