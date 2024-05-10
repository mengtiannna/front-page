import {Action, AppState} from "../type.ts";

export const main: AppState = {
  loading: false,
  name: '',
  brandModal: false,
  showMoreBrand: false,
  goodsModal: false,
  showMoreGoods: false,
};


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