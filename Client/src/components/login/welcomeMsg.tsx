import styled from "styled-components";

const StyledDiv = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: 5%;
  position: relative;
  top: 6rem;

  h3 {
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.035rem;
    color: var(--white, #fff);
  }

  span {
    color: var(--sleeper-yellow, #ffd954);
  }

  p {
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.02rem;
    color: #c4c4c4;
    position: relative;
    top: 2rem;
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
      <p>
        숙면 여행의 시작을 위한 모든 것<br></br>꿈을 쓰는 글, 몽글
      </p>
    </StyledDiv>
  );
};

export default WelcomeMsg;
