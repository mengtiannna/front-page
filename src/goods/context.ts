import {createContext} from "react";
import {ContextType, AppState, Action} from "./type.ts";
import {main} from "./reducers/main.ts";


// 创建上下文
export const Context = createContext<ContextType | undefined>(undefined);

export const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "set":
      return { ...state, ...action.payload };
    case "clean":
      return {...main, ...action.payload};
    default:
      return state;
  }
};