import { createContext, ReactNode, useReducer, Dispatch } from "react";

interface userContext {
    email: string,
    setCurrentUser: void,
}

interface userProviderProps {
    children: ReactNode,
}

interface actionType {
    'setEmail': string,
    'setPassword': string
}

export const INITIAL_VALUE = {
    email: null,
    password: null,
    nickname: null,
}

export const UserContext = createContext({} as userContext);
export const DispatchContext = createContext<Dispatch<actionType> | null>(null);

export const UserReducer = (state:userContext, action:any) => {
    const { type, payload } = action;

    switch(type) {
        case 'setEmail': 
            return {
            ...state,
            email: payload
        } 
        case 'setPassword':
            return {
                ...state,
                password: payload,
            }
        default:
            throw new Error(`Error ${type} occurred in Reducer!`)
    }
}

export const UserProvider = ({ children }:userProviderProps) => {

}