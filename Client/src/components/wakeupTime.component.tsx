import { useState, useContext, useEffect } from "react";

import { hours, minutes } from "../utils/select-options";
import {
  DispatchContext,
  WakeUpTimeContext,
} from "../contexts/wakeupTimeReducer.context";
import { ReactComponent as Expand } from "../icons/Expand.svg";

import styled, { css } from "styled-components";

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  height: fit-content;
  background: #fff;
  border-radius: 4px;
  border: 1.4px solid var(--gray-4, #dbdbdb);
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.4);
`;

const SelectBox = styled.select`
  display: flex;
  width: 220px;
  height: 40px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  gap: 240px;
  border-radius: 4px;
  border: none;
  background: transparent;
  -webkit-appearance: none;
  appearance: none;
  z-index: 4;

`;

const ButtonBox = styled.div`
  display: flex;
  width: fit-content;
  text-align: center;
  gap: 16px;
  top: 20px;
`;

const MDbox = styled.div`
  width: 50px;
  height: 31px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--sleeper-purple-1, #734ef7);
`;

const WakeupTime = () => {
  const { hour, minute, md } = useContext(WakeUpTimeContext);
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error("dispatch is null");

  const [selected, setSelected] = useState({
    selectHour: hour,
    selectMinute: minute,
    selectMd: md,
  });
  const { selectHour, selectMinute, selectMd } = selected;

  const handleSelect = (e: any) => {
    setSelected({ ...selected, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch({ type: "update", payload: selected });
  }, [selected]);

  return (
    <ContentsBox>
      <Wrapper>
        <SelectBox onChange={handleSelect} name="selectHour" value={selectHour}>
          {hours.map((item) => (
            <option value={item} key={item}>
              {`${item}시`}
            </option>
          ))}
        </SelectBox>
        <Expand />
      </Wrapper>

      <Wrapper>
        <SelectBox
          onChange={handleSelect}
          name="selectMinute"
          value={selectMinute}
        >
          {minutes.map((item) => (
            <option value={item} key={item}>
              {`${item}분`}
            </option>
          ))}
        </SelectBox>
        <Expand />
      </Wrapper>

      <ButtonBox>
        <MDbox
          className="am"
          onClick={() => setSelected({ ...selected, selectMd: "AM" })}
        >
          AM
        </MDbox>
        <MDbox
          className="pm"
          onClick={() => setSelected({ ...selected, selectMd: "PM" })}
        >
          PM
        </MDbox>
      </ButtonBox>
    </ContentsBox>
  );
};

export default WakeupTime;
