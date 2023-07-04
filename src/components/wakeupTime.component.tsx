import { useEffect, useState, useContext } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { WakeUpTimeContext } from "./TimesettingReducer";
import { useModal } from "../hooks/useModal";
import { ReactComponent as Expand } from "../icons/Expand.svg";

import { WakeupBox, WakeupSetting, SleepingComent, SleepingHour, NickNameText, Text } from "./wakeupTime.styles";
import TimeSetting from "./timesetting.component";

const WakeupTime = () => {
  const { ModalAlert, isModalOpen, openModal, closeModal } = useModal();
  const { hour, minute, md } = useContext(WakeUpTimeContext);

  let USER_NAME = "꿈꾸는 여행자";
  //유저 닉네임 GET
  /* useEffect(() => {
    async function getUserName() {
      const res = await axios.get("")
    }
    getUserName();
  },[]) */

  useEffect(()=>{
    console.log("rere")
  })

  //현재시간
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth()+1;
  let day = today.getDate();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let currentTime = new Date(year,month,day,hours,minutes)

  //기상시간
  let wakeupTime = new Date()


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
        label="목표 기상 시간"
        additional={
          <TimeSetting />
        }
      />
    </>
  );
};

export default WakeupTime;
