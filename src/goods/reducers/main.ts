import { Action, AppState } from "../type.ts";

export const main: AppState = {
  loading: false,
  name: "",
  brandModal: true,
  showMoreBrand: false,
  goodsModal: false,
  showMoreGoods: false,
  productList: [
    {
      name: "内蒙古自治区内蒙古自治区内蒙古自治区Product A",
      id: 1001,
    },
    {
      name: "Product B",
      id: 1002,
    },
    {
      name: "Product C",
      id: 1003,
    },
    {
      name: "Product D",
      id: 1004,
    },
    {
      name: "Product E",
      id: 1005,
    },
    {
      name: "Product F",
      id: 1006,
    },
    {
      name: "Product G",
      id: 1007,
    },
    {
      name: "Product H",
      id: 1008,
    },
    {
      name: "Product I",
      id: 1009,
    },
    {
      name: "Product J",
      id: 1010,
    },
  ],
  brandList: [],
};

export const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "set":
      return { ...state, ...action.payload };
    case "clean":
      return { ...main, ...action.payload };
    default:
      return state;
  }
};
