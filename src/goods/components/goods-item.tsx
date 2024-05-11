import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context.ts";
import { UpOutline, DownOutline } from "antd-mobile-icons";

export default function GoodsItem(props) {
  const { state, dispatch } = useContext(Context);
  const { goodsList } = state;
  return <div className="goods-item"></div>;
}
