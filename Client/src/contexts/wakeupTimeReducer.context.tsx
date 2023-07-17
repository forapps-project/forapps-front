import { useReducer, createContext, Dispatch, ReactNode } from "react";

interface wakeuptimeProviderProps {
  children: ReactNode;
}

export interface wakeUpTime {
  hour: number;
  minute: number;
  md: string;
}

interface actionType {
  type: string;
  payload?: any;
}

export let INITIAL_VALUE: wakeUpTime = {
  hour: 8,
  minute: 0,
  md: "AM",
};

export const WakeUpTimeContext = createContext({} as wakeUpTime);

export const DispatchContext = createContext<Dispatch<actionType> | null>(null);

export const TimeSettingReducer = (
  state: wakeUpTime,
  action: actionType
): wakeUpTime => {
  const { type, payload } = action;

  switch (type) {
    case "update":
      const { selectHour, selectMinute, selectMd } = payload;
      return {
        hour: parseInt(selectHour),
        minute: parseInt(selectMinute),
        md: selectMd,
      };
    default:
      return state;
  }
};

const WakeUpTimeProvider = ({ children }: wakeuptimeProviderProps) => {
  let Data = JSON.parse(localStorage.getItem("user-wakeup-time") || "{}");
  if (Object.keys(Data).length === 0) {
    Data = {...INITIAL_VALUE}
  }

  const [{ hour, minute, md }, dispatch] = useReducer(TimeSettingReducer, Data);

  const value: wakeUpTime = { hour, minute, md };

  return (
    <DispatchContext.Provider value={dispatch}>
      <WakeUpTimeContext.Provider value={value}>
        {children}
      </WakeUpTimeContext.Provider>
    </DispatchContext.Provider>
  );
};

export default WakeUpTimeProvider;
