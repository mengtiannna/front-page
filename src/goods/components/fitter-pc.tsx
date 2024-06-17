import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context.ts";
import { UpOutline, DownOutline } from "antd-mobile-icons";

export default function FitterPC(props) {
  const { state, dispatch } = useContext(Context);
  const { brandModal, goodsModal } = state;
  return (
    <div className="fitter-pc">
      <div>
        <span>品牌</span>
      </div>
      <div>
        <span>产品</span>
      </div>
    </div>
  );
}
