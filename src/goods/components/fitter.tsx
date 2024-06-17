import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context.ts";
import { UpOutline, DownOutline } from "antd-mobile-icons";
import "./fitter.less";
export default function Fitter(props) {
  const { state, dispatch } = useContext(Context);
  const { brandModal, goodsModal } = state;
  return (
    <div className="fitter">
      <div
        className={
          brandModal ? "fitter-item fitter-item-selected" : "fitter-item"
        }
        onClick={() => {
          dispatch({
            type: "set",
            payload: {
              brandModal: !brandModal,
            },
          });
        }}
      >
        <span>品牌</span>
        {brandModal ? (
          <UpOutline className="arrow" />
        ) : (
          <DownOutline className="arrow" />
        )}
      </div>
      <div
        className={
          goodsModal ? "fitter-item fitter-item-selected" : "fitter-item"
        }
        onClick={() => {
          dispatch({
            type: "set",
            payload: {
              goodsModal: !goodsModal,
            },
          });
        }}
      >
        <span>产品</span>
        {goodsModal ? (
          <UpOutline className="arrow" />
        ) : (
          <DownOutline className="arrow" />
        )}
      </div>
    </div>
  );
}
