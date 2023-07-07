import { ReactComponent as Up } from "../icons/Expand_Up.svg";
import { ReactComponent as Down } from "../icons/Expand_Down.svg";
import { ReactNode, useContext, useEffect, useState, useRef } from "react";
import {
  DispatchContext,
  INITIAL_VALUE,
  WakeUpTimeContext,
  wakeUpTime,
} from "../contexts/wakeupTimeReducer.context";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 56px;
  }
`;

const MDbox = styled.div`
  background-color: white;
  color: #4d4d4d;
  display: flex;
  width: 56px;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 0.4px solid var(--gray-1, #4d4d4d);
`;

interface MiniButtonProps {
  type: ReactNode;
  onClick(e: any): void;
  name: string;
}

const MiniButton = ({ name, type, onClick }: MiniButtonProps) => {
  return (
    <button name={name} onClick={onClick}>
      {type}
    </button>
  );
};

const WakeupTimeSetting = () => {
  const Data = JSON.parse(localStorage.getItem('user-wakeup-time') || '{}')

  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error("dispatch is null");
  const { hour, minute, md } = useContext(WakeUpTimeContext);

  const [time, setTime] = useState(Data);


  const onChange = (e: any) => {
    const { name, value } = e.target;
    setTime({
      ...time,
      [name]: value,
    });
    if (name === "hour") {
      dispatch({ type: "HOUR_INPUT_CHANGE", payload: e.target.value });
    } else {
      dispatch({ type: "MINUTE_INPUT_CHANGE", payload: e.target.value });
    }
  };

  return (
    <Wrapper>
      <ButtonBox>
        <MiniButton
          name="up"
          type={<Up />}
          onClick={() => dispatch({ type: "HOUR_INCREASE" })}
        />
        <input
          name="hour"
          defaultValue="number"
          value={hour}
          onChange={onChange}
        ></input>
        <MiniButton
          name="down"
          type={<Down />}
          onClick={() => dispatch({ type: "HOUR_DECREASE" })}
        />
      </ButtonBox>

      <ButtonBox>
        <MiniButton
          name="up"
          type={<Up />}
          onClick={() => dispatch({ type: "MINUTE_INCREASE" })}
        />
        <input
          name="minute"
          type="number"
          defaultValue={minute}
          onChange={onChange}
        ></input>
        <MiniButton
          name="down"
          type={<Down />}
          onClick={() => dispatch({ type: "MINUTE_DECREASE" })}
        />
      </ButtonBox>

      <ButtonBox>
        <MDbox onClick={() => dispatch({ type: "CHANGE_TO_AM" })}>AM</MDbox>
        <MDbox onClick={() => dispatch({ type: "CHANGE_TO_PM" })}>PM</MDbox>
      </ButtonBox>
    </Wrapper>
  );
};

export default WakeupTimeSetting;
