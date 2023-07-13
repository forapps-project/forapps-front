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
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  height: fit-content;
  background: #fff;
  border-radius: 0.25rem;
  border: 1.4px solid var(--gray-4, #dbdbdb);
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.75rem;
`;

const SelectBox = styled.select`
  display: flex;
  width: 13.75rem;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 15rem;
  font-size: 12px;
  border-radius: 0.25rem;
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
  gap: 1rem;
  position: relative;
`;

type isactive = {
  active: boolean;
};

const MDbox = styled.div<isactive>`
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
  background: ${(props) => (props.active === true ? "#734EF7" : "#C4C4C4")};
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

  //버튼 색을 동적으로 제어하기 위한 변수
  let [active, setActive] = useState(true);
  if (md === "AM") {
    active = true;
  } else {
    active = false;
  }

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
