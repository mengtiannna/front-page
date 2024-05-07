import * as React from "react";
import {Fragment, useContext, useEffect} from "react";
import { Link } from "react-router-dom";

import {reducer, Context} from "./context";
import {init} from "./actions";
import {main} from "./reducers/main.ts";
import Header from "../common/header";
import Bottom from "../common/bottom.tsx";
import './index.less';
import goodsTU from "../assets/goods-tu.png";
import Fitter from "./components/fitter.tsx";


export default function Goods(props) {
  const [state, dispatch] = React.useReducer(reducer, main);

  useEffect(() => {
    // 页面初始化
    init(dispatch);
    // 返回一个清理函数
    return () => {
      dispatch({
        type: "clean",
      });
    };
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <GoodsItem {...props} />
    </Context.Provider>
  );
}

 function GoodsItem(props) {
   const { state,dispatch } = useContext(Context);
   console.log('state',state);
  return (
    <div className="goods">
      <Header/>
      <div className="commonImg" onClick={()=>init(dispatch)}><img src={goodsTU} alt=""/></div>
      <div onClick={()=>{
        dispatch({
          type: "clean",
        });
      }}>
        goods
      </div>
      <Fitter />
      <Bottom/>
    </div>
  );
}
