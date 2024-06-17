import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "./context";
import { main, reducer } from "./reducers/main.ts";
import Header from "../common/header";
import Bottom from "../common/bottom.tsx";
import "./index.less";
import goodsTU from "../assets/goods-tu.png";
import Fitter from "./components/fitter.tsx";
import FitterModal from "./components/fitter-modal.tsx";
import GoodsList from "./components/goods-list.tsx";
import FitterPC from "./components/fitter-pc.tsx";

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

  const init = () => {
    try {
      // const response = await get("baseConfig", { param1: "value1" });
      // console.log("response", response);
      dispatch({
        type: "set",
        payload: {
          name: "123123123",
        },
      });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <Context.Provider value={{ state, dispatch }}>
      <GoodsContent {...props} />
    </Context.Provider>
  );
}

function GoodsContent(props) {
  const { state, dispatch } = useContext(Context);
  const { brandModal, goodsModal } = state;
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // init();
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // 清理事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 空数组意味着这个 effect 只会在组件挂载时执行一次

  return (
    <div className="goods">
      <Header />
      <div className="commonImg">
        <img src={goodsTU} alt="" />
      </div>
      <div></div>
      {isMobile ? <Fitter /> : <FitterPC />}
      {isMobile && <FitterModal />}
      <GoodsList />
      <Bottom />
      <div className="aaaaaa"></div>
    </div>
  );
}
