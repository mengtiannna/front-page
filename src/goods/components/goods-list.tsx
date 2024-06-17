import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context.ts";
import { UpOutline, DownOutline } from "antd-mobile-icons";
import "./goods-list.less";

export default function GoodsList(props) {
  const { state, dispatch } = useContext(Context);
  const { goodsList } = state;
  return (
    <div className="goods-list">
      {goodsList.map((item) => {
        return (
          <div className="goods-item" key={item.goodsId}>
            <img className="img" src={item.goodsImg} alt="" />
            <div>
              <div>{item.goodsName}</div>
              <div>型号：{item.goodsNo}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
