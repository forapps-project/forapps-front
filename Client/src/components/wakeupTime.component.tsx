import { useState, useContext, useEffect, useRef } from "react";

import {
  DispatchContext,
  WakeUpTimeContext,
} from "../contexts/wakeupTimeReducer.context";
import { hours, minutes } from "../utils/select-options";
import { ReactComponent as Expand } from "../icons/Expand_Down.svg";

import {
  ContentsBox,
  SelectArea,
  SelectBox,
  SelectOptions,
  Wrapper,
  Option,
  ButtonBox,
  MDbox,
} from "../styles/wakeupTime.component.styles";

const WakeupTime = () => {
  const hourSelectRef = useRef() as React.MutableRefObject<HTMLLIElement>;
  const minuteSelectRef = useRef() as React.MutableRefObject<HTMLLIElement>;

  const { hour, minute, md } = useContext(WakeUpTimeContext);
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error("dispatch is null");

  const [currentHour, setCurrentHour] = useState(`${hour}시`);
  const [currentMinute, setCurrentMinute] = useState(
    `${minute.toString().padStart(2, "0")}분`
  );

  const [selected, setSelected] = useState({
    selectHour: hour,
    selectMinute: minute,
    selectMd: md,
  });

  useEffect(() => {
    dispatch({ type: "update", payload: selected });
  }, [selected]);

  const [showHours, setShowHours] = useState(false);
  const [showMinutes, setShowMinutes] = useState(false);

  const handleOnClick = (e: any) => {
    const { innerText, id } = e.target;
    if (id === "hour") {
      setCurrentHour(innerText);
      setSelected({ ...selected, selectHour: innerText });
    } else {
      setCurrentMinute(innerText);
      setSelected({ ...selected, selectMinute: innerText });
    }
    setShowHours(false);
    setShowMinutes(false);
  };

  useEffect(() => {
      document.addEventListener("click", touchOutside);

    return () => {
      document.removeEventListener("click", touchOutside);
    };
  });

  const touchOutside = (e: any) => {
    if (showHours && !hourSelectRef.current.contains(e.target)) {
      setShowHours(false);
    }
    if (showMinutes && !minuteSelectRef.current.contains(e.target)) {
      setShowMinutes(false);
    }
  };

  //버튼 색을 동적으로 제어
  let [active, setActive] = useState(true);
  if (md === "AM") {
    active = true;
  } else {
    active = false;
  }

  return (
    <ContentsBox>
      <SelectArea>
        <SelectBox ref={hourSelectRef}>
          <Wrapper onClick={() => setShowHours((prev) => !prev)}>
            <label>{currentHour}</label>
            <Expand />
          </Wrapper>
          <SelectOptions show={showHours} height="12.3rem" >
            {hours.map((item: number) => (
              <Option
                value={item}
                key={item}
                onClick={handleOnClick}
                id="hour"
              >
                {`${item}시`}
              </Option>
            ))}
          </SelectOptions>
        </SelectBox>

        <SelectBox ref={minuteSelectRef}>
          <Wrapper onClick={() => setShowMinutes((prev) => !prev)}>
            <label>{currentMinute}</label>
            <Expand />
          </Wrapper>
          <SelectOptions show={showMinutes}>
            {minutes.map((item: number) => (
              <Option
                value={item}
                key={item}
                onClick={handleOnClick}
                id="minute"
              >
                {`${item.toString().padStart(2, "0")}분`}
              </Option>
            ))}
          </SelectOptions>
        </SelectBox>
      </SelectArea>

      <ButtonBox>
        <MDbox
          active={active}
          className="am"
          onClick={() => {
            setSelected({ ...selected, selectMd: "AM" });
            setActive((prev) => !prev);
          }}
        >
          AM
        </MDbox>
        <MDbox
          active={!active}
          className="pm"
          onClick={() => {
            setSelected({ ...selected, selectMd: "PM" });
            setActive((prev) => !prev);
          }}
        >
          PM
        </MDbox>
      </ButtonBox>
    </ContentsBox>
  );
};

export default WakeupTime;
