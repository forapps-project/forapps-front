import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useModal } from "../hooks/useModal";
import { ReactComponent as Expand } from "../icons/Expand.svg";

import { WakeupBox, WakeupSetting, SleepingComent, SleepingHour, NickNameText, Text } from "./wakeupTime.styles";

const WakeupTime = () => {
  const { ModalAlert, isModalOpen, openModal, closeModal } = useModal();

  let USER_NAME = "꿈꾸는 여행자";
  //유저 닉네임 GET
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
          <span onClick={openModal}>기상시간 설정하기</span>
          <Expand />
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
