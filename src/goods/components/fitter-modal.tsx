import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context.ts";
import { UpOutline, DownOutline } from "antd-mobile-icons";

export default function FitterModal(props) {
  const { state, dispatch } = useContext(Context);
  const { brandModal, goodsModal, productList, brandList } = state;
  return (
    <div
      className="fitter-modal-bg"
      onClick={() => {
        dispatch({
          type: "set",
          payload: {
            goodsModal: false,
            brandModal: false,
          },
        });
      }}
    >
      <div className="fitter-modal">
        <div className="fitter-content">
          {productList.map((item) => {
            return (
              <div className="fitter-content-item" key={item.id}>
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="fitter-btn">
          <div
            className="fitter-btn-reset"
            onClick={() => {
              dispatch({
                type: "set",
                payload: {
                  brandModal: !brandModal,
                },
              });
            }}
          >
            重置
          </div>
          <div
            className="fitter-btn-submit"
            onClick={() => {
              dispatch({
                type: "set",
                payload: {
                  goodsModal: !goodsModal,
                },
              });
            }}
          >
            确定
          </div>
        </div>
      </div>
    </div>
  );
}
