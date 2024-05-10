import * as React from "react";
import {Fragment, useContext, useEffect} from "react";
import { Link } from "react-router-dom";

import {Context} from "./context";
import {main, reducer} from "./reducers/main.ts";
import Header from "../common/header";
import Bottom from "../common/bottom.tsx";
import './index.less';
import goodsTU from "../assets/goods-tu.png";
import Fitter from "./components/fitter.tsx";


export default function Goods(props) {
  const [state, dispatch] = React.useReducer(reducer, main);

  useEffect(() => {
    // 页面初始化
    init();
    // 返回一个清理函数
    return () => {
      dispatch({
        type: "clean",
      });
    };
  }, []);

  const init=()=>{
    try {
      // const response = await get("baseConfig", { param1: "value1" });
      // console.log("response", response);
      dispatch({
        type: "set",
        payload: {
          name: "123123123"
        }
      });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  return (
    <Context.Provider value={{ state, dispatch }}>
      <GoodsItem {...props} />
    </Context.Provider>
  );
}

 function GoodsItem(props) {
   const { state,dispatch } = useContext(Context);
  return (
    <div className="goods">
      <Header/>
      <div className="commonImg"><img src={goodsTU} alt=""/></div>
      <Fitter />
      <Bottom/>
    </div>
  );
}
