import { useContext } from "react";
import axios from "axios";

import { WakeUpTimeContext } from "../contexts/wakeupTimeReducer.context";
import { useModal } from "../hooks/useModal";
import { ReactComponent as Expand } from "../icons/Expand.svg";

import {
  WakeupBox,
  WakeupSetting,
  SleepingComent,
  SleepingHour,
  NickNameText,
  Text,
} from "../styles/sleepingTimeBox.styles";
import WakeupTime from "./wakeupTime.component";

const SleepingTimeBox = () => {
  const { Modal, isModalOpen, openModal, successFunc } = useModal();
  let { hour, minute, md } = useContext(WakeUpTimeContext);

  let USER_NAME = "꿈꾸는 여행자";
  //유저 닉네임 GET
  /* useEffect(() => {
    async function getUserName() {
      const res = await axios.get("")
    }
    getUserName();
  },[]) */

  //현재시간
  let HOUR = 0;
  let MIN = 0;

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
  if (hours <= 11) {
    //현재시각이 오전
    wakeupTime = new Date(year, month, day, hour + 12, minute);
  } else {
    //현재가 오후
    if (md === "PM") {
      wakeupTime = new Date(year, month, day + 1, hour + 12, minute);
    } else {
      wakeupTime = new Date(year, month, day + 1, hour, minute);
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

      <Modal
        success={true}
        width="330px"
        height="332px"
        background="#373543"
        textColor="#FFF"
        isModalOpen={isModalOpen}
        successFunc={successFunc}
        label="기상 시간 선택"
        additional={<WakeupTime />}
        fontSize="20px"
      />
    </>
  );
};

export default SleepingTimeBox;
