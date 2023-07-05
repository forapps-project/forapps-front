import { useReducer, createContext, Dispatch, ReactNode } from "react";

interface wakeuptimeProviderProps {
  children: ReactNode;
}

interface wakeUpTime {
  hour: number;
  minute: number;
  md: string;
}

const INITIAL_VALUE: wakeUpTime = {
  hour: 8,
  minute: 0,
  md: "AM",
};

interface actionType {
  type: string;
}

export const WakeUpTimeContext = createContext({} as wakeUpTime);

export const DispatchContext = createContext<Dispatch<actionType> | null>(null);

export const TimeSettingReducer = (
  state: wakeUpTime,
  action: actionType
): wakeUpTime => {
  const { type } = action;
  const { hour, minute, md } = state;

  switch (type) {
    case "HOUR_INCREASE":
      return {
        ...state,
        hour: hour + 1,
      };
    case "HOUR_DECREASE":
      return {
        ...state,
        hour: hour - 1,
      };
    case "MINUTE_INCREASE":
      return {
        ...state,
        minute: minute + 1,
      };
    case "MINUTE_DECREASE":
      return {
        ...state,
        minute: minute - 1,
      };
    case "MD_CHANGE":
      if (md==="AM") {
        return {
          ...state,
            md: "PM",
        }
      } else {
        return {
            ...state,
            md: "AM"
        }
      }
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

  return (
    <DispatchContext.Provider value={dispatch}>
      <WakeUpTimeContext.Provider value={value}>
        {children}
      </WakeUpTimeContext.Provider>
    </DispatchContext.Provider>
  );
};

export default WakeUpTimeProvider;
