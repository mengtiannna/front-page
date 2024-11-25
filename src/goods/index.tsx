import * as React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "./context";
import { main, reducer } from "./reducers/main.ts";
import Header from "../common/header";
import Bottom from "../common/bottom.tsx";
import "./index.less";
import goodsTU from "../assets/goods-tu.png";
import Fitter from "./components/fitter.tsx";
import GoodsList from "./components/goods-list.tsx";
import H5GoodsList from "./components/h5-goods-list.tsx";
import FitterPC from "./components/fitter-pc.tsx";
import InquiryModal from "./components/inquiry-modal.tsx";
import { get } from "../axios";

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

  const init = async () => {
    try {
      // const response = await get("/public/type/brand",{});
      // const res = await get("/public/type/product_category",{});

      const response = await get("/public/type/owb", {});
      const res = await get("/public/type/owc", {});
      dispatch({
        type: "set",
        payload: {
          brandList: response.data,
          productList: res.data,
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
  const { inquiryModal, isMobile, platform } = state;

  useEffect(() => {
    const handleResize = () => {
      let platform = "";
      if (window.innerWidth < 768) {
        platform = "mobile";
      }
      if (window.innerWidth >= 768) {
        platform = "pc";
      }
      dispatch({
        type: "set",
        payload: {
          isMobile: window.innerWidth < 768 ? true : false,
        },
      });
      dispatch({
        type: "set",
        payload: {
          platform,
        },
      });
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
      {platform === "mobile" && <H5GoodsList />}
      {platform === "pc" && <GoodsList />}
      {inquiryModal && <InquiryModal />}
      <Bottom />
    </div>
  );
}
