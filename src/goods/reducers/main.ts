import { Action, AppState } from "../type.ts";

export const main: AppState = {
  loading: false,
  name: "",
  brandModal: false,
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
    {
      name: "内蒙古自治区内蒙古自治区内蒙古自治区Product A",
      id: 1001111,
    },
    {
      name: "Product B",
      id: 1001002,
    },
    {
      name: "Product C",
      id: 1001003,
    },
    {
      name: "Product D",
      id: 1001004,
    },
    {
      name: "Product E",
      id: 1001005,
    },
    {
      name: "Product F",
      id: 1001006,
    },
    {
      name: "Product G",
      id: 1001007,
    },
    {
      name: "Product H",
      id: 1001008,
    },
    {
      name: "Product I",
      id: 1001009,
    },
    {
      name: "Product J",
      id: 1011110,
    },
  ],
  brandList: [
    {
      url: "https://image.baidu.com/search/detail?ct=503316",
      id: 1001,
    },
    {
      url: "https://image.baidu.com/search/detail?ct=503316",
      id: 1002,
    },
    {
      url: "https://image.baidu.com/search/detail?ct=503316",
      id: 1003,
    },
    {
      url: "https://image.baidu.com/search/detail?ct=503316",
      id: 1004,
    },
    {
      url: "https://image.baidu.com/search/detail?ct=503316",
      id: 1005,
    },
    {
      url: "https://image.baidu.com/search/detail?ct=503316",
      id: 1006,
    },
    {
      url: "https://image.baidu.com/search/detail?ct=503316",
      id: 1007,
    },
    {
      url: "https://image.baidu.com/search/detail?ct=503316",
      id: 1008,
    },
    {
      url: "https://image.baidu.com/search/detail?ct=503316",
      id: 1009,
    },
    {
      url: "https://image.baidu.com/search/detail?ct=503316",
      id: 1010,
    },
    {
      url: "https://image.baidu.com/search/detail?ct=503316",
      id: 1011,
    },
    {
      url: "https://image.baidu.com/search/detail?ct=503316",
      id: 1012,
    },
  ],
  productIds: [],
  brandIds: [],
  goodsList: [
    {
      goodsId: "",
      goodsImg: "",
      goodsName: "",
      goodsNo: "",
    },
  ],
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
