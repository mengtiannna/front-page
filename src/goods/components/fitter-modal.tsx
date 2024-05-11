import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context.ts";
import { CheckOutlined } from "@ant-design/icons";
// import { CheckOutline } from "antd-mobile-icons";

export default function FitterModal(props) {
  const { state, dispatch } = useContext(Context);
  const {
    brandModal,
    goodsModal,
    productList,
    brandList,
    productIds,
    brandIds,
  } = state;
  console.log("state", state);
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
      style={{ display: brandModal || goodsModal ? "block" : "none" }}
    >
      <div className="fitter-modal">
        <div className="fitter-content">
          {/*品牌*/}
          {brandList.map((item) => {
            return (
              <div
                className={
                  brandIds.includes(item.id)
                    ? "fitter-content-item fitter-content-brand fitter-content-item-checked"
                    : "fitter-content-item fitter-content-brand"
                }
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  if (brandIds.includes(item.id)) {
                    dispatch({
                      type: "set",
                      payload: {
                        brandIds: brandIds.filter((ids) => ids !== item.id),
                      },
                    });
                  } else {
                    dispatch({
                      type: "set",
                      payload: {
                        brandIds: brandIds.concat([item.id]),
                      },
                    });
                  }
                }}
              >
                <img src={item.url} alt="" />
              </div>
            );
          })}
          {/*产品*/}
          {goodsModal &&
            productList.map((item) => {
              return (
                <div
                  className={
                    productIds.includes(item.id)
                      ? "fitter-content-item fitter-content-item-checked"
                      : "fitter-content-item"
                  }
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (productIds.includes(item.id)) {
                      dispatch({
                        type: "set",
                        payload: {
                          productIds: productIds.filter(
                            (ids) => ids !== item.id,
                          ),
                        },
                      });
                    } else {
                      dispatch({
                        type: "set",
                        payload: {
                          productIds: productIds.concat([item.id]),
                        },
                      });
                    }
                  }}
                >
                  {productIds.includes(item.id) && (
                    <CheckOutlined className="checked-icon" />
                  )}
                  {item.name}
                </div>
              );
            })}
        </div>

        <div className="fitter-btn">
          <div
            className="fitter-btn-reset"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({
                type: "set",
                payload: goodsModal
                  ? {
                      productIds: [],
                    }
                  : {
                      brandIds: [],
                    },
              });
            }}
          >
            重置
          </div>

          <div
            className="fitter-btn-submit"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({
                type: "set",
                payload: {
                  goodsModal: false,
                  brandModal: false,
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
