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
      if (hour <= 11) {
        return {
          ...state,
          hour: hour + 1,
        };
      } else {
        return {
          ...state,
        };
      }
    case "HOUR_DECREASE":
      if (hour >= 2) {
        return {
          ...state,
          hour: hour - 1,
        };
      } else {
        return {
          ...state,
        };
      }

    case "MINUTE_INCREASE":
      if (minute<=58) {
        return {
          ...state,
          minute: minute + 1,
        };
      } else {
        return {
          ...state
        }
      }
      
    case "MINUTE_DECREASE":
      if (minute>=1) {
        return {
          ...state,
          minute: minute - 1,
        };
      } else {
        return {
          ...state
        }
      }
      
    case "MD_CHANGE":
      if (md === "AM") {
        return {
          ...state,
          md: "PM",
        };
      } else {
        return {
          ...state,
          md: "AM",
        };
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
