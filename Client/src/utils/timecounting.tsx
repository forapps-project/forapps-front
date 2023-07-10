import { useContext, useState } from "react";
import { WakeUpTimeContext } from "../contexts/wakeupTimeReducer.context";

const SleepTimeCount = () => {
  const { hour, minute, md } = useContext(WakeUpTimeContext);
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
  if (hours <= 11) {
    //현재시각이 오전
    if (md === "PM") {
      wakeupTime = new Date(year, month, day, hour + 12, minute);
    } else {
      wakeupTime = new Date(year, month, day, hour + 12, minute);
    }
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

  return {HOUR, MIN}
};

export default SleepTimeCount;