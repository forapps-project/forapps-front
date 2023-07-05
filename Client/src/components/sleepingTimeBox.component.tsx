import { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
//import "react-datepicker/dist/react-datepicker.css";

import { WakeUpTimeContext } from "../contexts/wakeupTime.context";
import { useModal } from "../hooks/useModal";
import { ReactComponent as Expand } from "../icons/Expand.svg";

import {
  WakeupBox,
  WakeupSetting,
  SleepingComent,
  SleepingHour,
  NickNameText,
  Text,
} from "./sleepingTimeBox.styles";
import WakeupTimeSetting from "./wakeupTimeSetting.component";

const SleepingTimeBox = () => {
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

  //현재시간
  const [elapsedTime, setElapsedTime] = useState({ HOUR: 0, MIN: 0 });
  let { HOUR, MIN } = elapsedTime;

  let currentTime = null;
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  currentTime = new Date(year, month, day, hours, minutes);

  //기상시간
  let wakeupTime = null;
  if (hours <= 11) { //현재시각이 오전
    if (md === "PM") {
      wakeupTime = new Date(year, month, day, hour + 12, minute);
    } else {
      wakeupTime = new Date(year, month, day, hour + 12, minute);
    }
  } else { //현재가 오후
    if (md === "PM") {
      wakeupTime = new Date(year, month, day+1, hour + 12, minute);
    } else {
      wakeupTime = new Date(year, month, day+1, hour, minute);
    }
  }

  //시간차 계산
  const elapsedMSec = wakeupTime.getTime() - currentTime.getTime();
  const elapsedMin = elapsedMSec / (1000 * 60);
  const elapsedHour = Math.floor(elapsedMSec / 1000 / 60 / 60);

  HOUR = Math.floor(elapsedMSec / 1000 / 60 / 60);
  MIN = elapsedMin - elapsedHour * 60;

  return (
    <>
      <WakeupBox>
        <SleepingComent>
          <NickNameText>{`${USER_NAME}님,`}</NickNameText>
          <br></br>
          <Text>
            지금 잠들면{" "}
            <SleepingHour>
              {`${HOUR}`}시간 {`${MIN}`}분
            </SleepingHour>{" "}
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
        additional={<WakeupTimeSetting />}
      />
    </>
  );
};

export default SleepingTimeBox;
