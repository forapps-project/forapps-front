import { useState, useContext, useEffect } from "react";

import { hours, minutes } from "../utils/select-options";
import { DispatchContext, WakeUpTimeContext } from "../contexts/wakeupTimeReducer.context";

import styled from "styled-components";

const ContentsBox = styled.div`
  display: flex;
  gap: 10px;
`;

const SelectBox = styled.select`
  display: flex;
  width: 120px;
  height: 40px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 240px;
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


const WakeupSetting2 = () => {
    const dispatch = useContext(DispatchContext);
    if (!dispatch) throw new Error("dispatch is null");

    const [selected, setSelected] = useState({selectHour:8, selectMinute:0, selectMd: "AM"});
    const { selectHour, selectMinute, selectMd } = selected;

    const handleSelect = (e:any) => {
        setSelected({...selected, [e.target.name]:e.target.value});
    }

    useEffect(()=>{
        dispatch({type:"update", payload:selected})
    },[selected])

  return (
    <ContentsBox>
      <div>
        <SelectBox onChange={handleSelect} name="selectHour" value={selectHour}>
          {hours.map((item) => (
            <option value={item} key={item}>
              {`${item}시`}
            </option>
          ))}
        </SelectBox>
      </div>

      <div>
        <SelectBox onChange={handleSelect} name="selectMinute" value={selectMinute}>
          {minutes.map((item) => (
            <option value={item} key={item}>
              {`${item}분`}
            </option>
          ))}
        </SelectBox>
      </div>

      <ButtonBox>
        <MDbox className="am" onClick={()=> setSelected({...selected, selectMd:"AM"})}>AM</MDbox>
        <MDbox className="pm" onClick={() => setSelected({...selected, selectMd:"PM"})}>PM</MDbox>
      </ButtonBox>
    </ContentsBox>
  );
};

export default WakeupSetting2;
