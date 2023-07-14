import { ReactElement, useState } from "react";
/* import styled from "styled-components";
import { ReactComponent as Expand } from "../icons/Expand_Down.svg";
import { hours, minutes } from "../utils/select-options";

const SelectArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
`

const SelectBox = styled.div`
  position: relative;
  background-color: white;
  border-radius: 0.25rem;
  border: 1.4px solid var(--gray-4, #dbdbdb);
  background: #fff;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.4);
  width: 13.75rem;
  height: 2.5rem;
  padding: 0.5rem 1rem;

  label {
    color: var(--gray-1, #4d4d4d);
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.015rem;
  }
`;

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
justify-content: flex-end;
align-items: center;
gap: 8.75rem;
`;

type state = {
  show: boolean;
};

const SelectOptions = styled.ul<state>`
  position: absolute;
  list-style: none;
  top: 3.2rem;
  left: 0;
  width: 13.75rem;
  overflow: hidden;
  padding-left: 0;
  z-index: 3;

  display: ${(props) => (props.show ? "show" : "none")};
  background-color: white;
  border-radius: 0.25rem;
  border: 1.4px solid transparent;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(#FFF, #FFF),
    linear-gradient(to right, #6b85f7 0%, #734ef7 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const Option = styled.li`
  width: 13.75rem;
  height: 2rem;
  font-size: 0.75rem;
  padding: 6px 8px;
  margin-left: 0;
  color: var(--gray-1, #4d4d4d);
  z-index: 3;
`;

const CustomSelect = () => {
  const [currentHour, setCurrentHour] = useState(8);
  const [currentMinute, setCurrentMinute] = useState(0);
  const [showHours, setShowHours] = useState(false);
  const [showMinutes, setShowMinutes] = useState(false);

  const hourOnClick = (e: any) => {
    const { innerText } = e.target;
    setCurrentHour(innerText);
  };

  const minuteOnClick = (e: any) => {
    const { innerText } = e.target;
    setCurrentMinute(innerText);
  };

  return (
    <SelectArea>
      <SelectBox onClick={() => setShowHours((prev) => !prev)}>
        <Wrapper>
          <label>{currentHour}</label>
          <Expand />
        </Wrapper>
        <SelectOptions show={showHours}>
          {hours.map((item: number) => (
            <Option value={item} key={item} onClick={hourOnClick}>
              {`${item}시`}
            </Option>
          ))}
        </SelectOptions>
      </SelectBox>

      <SelectBox onClick={() => setShowMinutes((prev) => !prev)}>
        <Wrapper>
          <label>{currentMinute}</label>
          <Expand />
        </Wrapper>
        <SelectOptions show={showMinutes}>
          {minutes.map((item: number) => (
            <Option value={item} key={item} onClick={minuteOnClick}>
              {`${item}분`}
            </Option>
          ))}
        </SelectOptions>
      </SelectBox>
    </SelectArea>
  );
};

export default CustomSelect; */



{/* <Wrapper>
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
      </Wrapper> */}