import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context.ts";
import "./fitter-pc.less";

export default function FitterPC(props) {
  const { state, dispatch } = useContext(Context);
  const { brandModal, goodsModal, productList, brandList, product, brand } =
    state;
  return (
    <div className="fitter-pc">
      <div className="fitter-pc-item">
        <span className="f-title">品牌：</span>
        <div className="productList" key="brandList">
          {brandList.map((item) => {
            return (
              <div
                className={brand === item.dictValue ? "productItem checked" : "productItem"}
                key={item.dictValue}
                onClick={() => {
                  if (brand === item.dictValue) {
                    dispatch({
                      type: "set",
                      payload: {
                        brand: "",
                        searchBrand: "",
                      },
                    });
                  } else {
                    dispatch({
                      type: "set",
                      payload: {
                        brand: item.dictValue,
                        searchBrand: item.dictValue,
                      },
                    });
                  }
                }}
              >
                <span>{item.dictLabel}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="fitter-pc-item">
        <span className="f-title">产品：</span>
        <div className="productList" key="productList">
          {productList.map((item) => {
            return (
              <div
                className={product === item.dictValue ? "productItem checked" : "productItem"}
                key={item.dictValue}
                onClick={() => {
                  if (product === item.dictValue) {
                    dispatch({
                      type: "set",
                      payload: {
                        product: "",
                        searchProduct: "",
                      },
                    });
                  } else {
                    dispatch({
                      type: "set",
                      payload: {
                        product: item.dictValue,
                        searchProduct: item.dictValue,
                      },
                    });
                  }
                }}
              >
                <span>{item.dictLabel}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
