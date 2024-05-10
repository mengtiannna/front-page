import {createContext} from "react";
import {ContextType} from "./type.ts";

// 创建上下文
export const Context = createContext<ContextType | undefined>(undefined);