import { ReactComponent as Up } from "../icons/Expand_Up.svg";
import { ReactComponent as Down } from "../icons/Expand_Down.svg";
import { ReactNode, useContext, useEffect, useState } from "react";
import {
  DispatchContext,
  WakeUpTimeContext,
} from "../contexts/wakeupTime.context";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`;

interface MiniButtonProps {
  type: ReactNode;
  onClick(): void;
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
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error("dispatch is null");

  const { hour, minute, md } = useContext(WakeUpTimeContext);

  useEffect(() => {
    console.log("re-rendered");
  }, [hour, minute, md]);

  return (
    <Wrapper>
      <ButtonBox>
        <MiniButton
          name="up"
          type={<Up />}
          onClick={() => dispatch({ type: "HOUR_INCREASE" })}
        />
        <div>{hour}</div>
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
        <div>{minute}</div>
        <MiniButton
          name="down"
          type={<Down />}
          onClick={() => dispatch({ type: "MINUTE_DECREASE" })}
        />
      </ButtonBox>

      <ButtonBox>
        <MiniButton
          name="up"
          type={<Up />}
          onClick={() => dispatch({ type: "MD_CHANGE" })}
        />
        <div>{md}</div>
        <MiniButton
          name="down"
          type={<Down />}
          onClick={() => dispatch({ type: "MD_CHANGE" })}
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default WakeupTimeSetting;
