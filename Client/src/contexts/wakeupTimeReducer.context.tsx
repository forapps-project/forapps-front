import { useReducer, createContext, Dispatch, ReactNode } from "react";

interface wakeuptimeProviderProps {
  children: ReactNode;
}

export interface wakeUpTime {
  hour: number;
  minute: number;
  md: string;
}

export const INITIAL_VALUE: wakeUpTime = {
  hour: 8,
  minute: 0,
  md: "AM",
};

interface actionType {
  type: string;
  payload?: any;
}

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
      return {hour: selectHour, minute: selectMinute, md: selectMd };
    default:
      return state;
  }
};


const WakeUpTimeProvider = ({ children }: wakeuptimeProviderProps) => {
  const [{ hour, minute, md }, dispatch] = useReducer(
    TimeSettingReducer,
    INITIAL_VALUE
  );

  const value: wakeUpTime = { hour, minute, md };

  //localStorage.setItem('user-wakeup-time', JSON.stringify(value))
  

  return (
    <DispatchContext.Provider value={dispatch}>
      <WakeUpTimeContext.Provider value={value}>
        {children}
      </WakeUpTimeContext.Provider>
    </DispatchContext.Provider>
  );
};

export default WakeUpTimeProvider;
