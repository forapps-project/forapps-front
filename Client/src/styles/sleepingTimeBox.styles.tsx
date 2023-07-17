import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  position: absolute;
  top: 7.06rem;
`;

export const WakeupBox = styled.div`
  position: relative;
  display: inline-block;
  height: 6.25rem;
  width: 21.875rem;
  border: 0.8px solid transparent;
  border-radius: 0.75rem;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(#2d293d, #2d293d),
    linear-gradient(to right, #6b85f7 0%, #a288ff 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const Contents = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SleepingComment = styled.div`
  text-align: left;
  margin-left: 0.75rem;
  margin-top: 0.62rem;
  height: fit-content;
`;

export const SleepingHour = styled.span`
  color: #ffd954;
`;

export const NickNameText = styled.span`
  color: #fff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
  margin-top: 10px;
`;

export const Text = styled.span`
  color: #fff;
  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const WakeupSetting = styled.div`
  display: inline-flex;
  justify-content: center;
  gap: 0.25rem;
  width: fit-content;
  height: fit-content;
  margin-left: 14.06rem;

  span {
    color: var(--gray-4, #dbdbdb);
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.24px;
  }
`;
