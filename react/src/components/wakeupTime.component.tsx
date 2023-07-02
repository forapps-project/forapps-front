import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useModal } from "../hooks/useModal";
import right from "../icons/right.png";

const WakeupBox = styled.div`
  height: 105px;
  width: 90%;
  display: flex;
  flex-direction: column;
  border-image: linear-gradient(rgba(107, 133, 247, 1), rgba(162, 136, 255, 1))30;
  border: 3px solid ;
  border-radius: 12px;
  border-image-slice: 1;
  margin-left: 20px;
  position: absolute;
  top: 70px;

`;


const SleepingComent = styled.div`
  margin-left: 12px;
`;

const SleepingHour = styled.span`
  color: #ffd954;
`;

const WakeupSetting = styled.div`
  margin-left: 225px;
  margin-top: 14px;
  margin-bottom: 13px;
  span {
    color: var(--gray-4, #dbdbdb);
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.24px;
  }
`;

const NickNameText = styled.span`
  color: #fff;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  margin-top: 10px;
`;

const Text = styled.span`
  color: #fff;
  font-size: 16px;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 4px;
`;

const WakeupTime = () => {
  const { ModalAlert, isModalOpen, openModal, closeModal } = useModal();

  let USER_NAME = "꿈꾸는 여행자";
  /* useEffect(() => {
    async function getUserName() {
      const res = await axios.get("")
    }
    getUserName();
  },[]) */

  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  const [wakeupTime, setWakeupTime] = useState(8);
  const [sleepingTime, setSleepingTime] = useState(0);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <>
      <WakeupBox>
        <SleepingComent>
          <NickNameText>{`${USER_NAME}님,`}</NickNameText>
          <br></br>
          <Text>
            지금 잠들면 <SleepingHour>{`${sleepingTime}`}시간</SleepingHour>{" "}
            여행할 수 있어요:)
          </Text>
        </SleepingComent>
        <WakeupSetting>
          <span onClick={openModal}>
            기상시간 설정하기
            <Icon src={right} />
          </span>
        </WakeupSetting>
      </WakeupBox>

      <ModalAlert
        isModalOpen={isModalOpen}
        close={closeModal}
        label=""
        additional={
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="h aa"
          />
        }
      />
    </>
  );
};

export default WakeupTime;
