import * as React from "react";
import { Fragment, useContext } from "react";
import { Context } from "../context.ts";
import { CheckOutlined } from "@ant-design/icons";

export default function FitterModal(props) {
  const { state, dispatch } = useContext(Context);
  const { brandModal, goodsModal, productList, brandList, product, brand } =
    state;
  console.log("123123 state", state);
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
          {brandModal &&
            brandList.map((item) => {
              return (
                <div
                  className={
                    brand === item.dictValue
                      ? "fitter-content-item fitter-content-brand fitter-content-item-checked"
                      : "fitter-content-item fitter-content-brand"
                  }
                  key={item.dictValue}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (brand === item.dictValue) {
                      dispatch({
                        type: "set",
                        payload: {
                          brand: "",
                        },
                      });
                    } else {
                      dispatch({
                        type: "set",
                        payload: {
                          brand: item.dictValue,
                        },
                      });
                    }
                  }}
                >
                  {brand === item.dictValue && (
                    <CheckOutlined className="checked-icon" />
                  )}
                  {item.dictLabel}
                </div>
              );
            })}
          {/*产品*/}
          {goodsModal &&
            productList.map((item) => {
              return (
                <div
                  className={
                    product === item.dictValue
                      ? "fitter-content-item fitter-content-item-checked"
                      : "fitter-content-item"
                  }
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (product === item.dictValue) {
                      dispatch({
                        type: "set",
                        payload: {
                          product: "",
                        },
                      });
                    } else {
                      dispatch({
                        type: "set",
                        payload: {
                          product: item.dictValue,
                        },
                      });
                    }
                  }}
                >
                  {product === item.dictValue && (
                    <CheckOutlined className="checked-icon" />
                  )}
                  {item.dictLabel}
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
                      product: "",
                      searchProduct: "",
                      goodsModal: false,
                      brandModal: false,
                    }
                  : {
                      brand: "",
                      searchBrand: "",
                      goodsModal: false,
                      brandModal: false,
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
                  searchProduct: product,
                  searchBrand: brand,
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
