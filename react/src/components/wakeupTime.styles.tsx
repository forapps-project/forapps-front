import styled from 'styled-components';

export const WakeupBox = styled.div`
  height: 105px;
  width: 90%;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 12px;
  margin-left: 5%;
  margin-right: 5%;
  position: absolute;
  top: 70px;
  background: linear-gradient(to right, #6b85f7, #a288ff);
`;

export const WakeupSetting = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: 113px;
  height: auto;
  position: absolute;
  right: 12px;
  bottom:11px;

  span {
    color: var(--gray-4, #dbdbdb);
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.24px;
  }
`;

export const SleepingComent = styled.div`
  margin-left: 12px;
  margin-top: 10px;
`;

export const SleepingHour = styled.span`
  color: #ffd954;
`;

export const NickNameText = styled.span`
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  margin-top: 10px;
`;

export const Text = styled.span`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`;