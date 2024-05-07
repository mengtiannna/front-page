import {Dispatch} from "react";

// 定义AppState接口
export interface AppState {
  loading: boolean;
  name: string;
  // 添加其他你需要的属性
}

// 定义Action类型，如果你的reducer需要处理不同类型的action
// 你可以在这里定义所有可能action的类型
export type Action = {
  type: string;
  payload?: object;
};

// 定义上下文类型
export interface ContextType {
  state: AppState;
  dispatch: Dispatch<Action>;
}