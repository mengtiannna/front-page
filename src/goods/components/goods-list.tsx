import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context.ts";
import { UpOutline, DownOutline } from "antd-mobile-icons";
import "./goods-list.less";
import {Pagination, PaginationProps} from "antd";

export default function GoodsList(props) {
  const { state, dispatch } = useContext(Context);
  const { goodsList, formData  } = state;
  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    console.log('Page: ', pageNumber);
  };
  return (
    <div className="goodsBox">
      <div className="goods-list">
        {goodsList.map((item) => {
          return (
            <div className="goods-item" key={item.goodsId} onClick={()=>{
              dispatch({
                type: "set",
                payload: {
                  inquiryModal: true,
                  formData: {
                    ...formData,
                    goodsName: item.goodsName,
                  },
                },
              });
            }}>
              <img className="img" src={item.goodsImg} alt="" />
              <div className="goods-content">
                <div className="goodsName">{item.goodsName}</div>
                <div className="goodsNoBox">
                  <span className="goodsNo">型号：{item.goodsNo}</span>
                  <div className="btn">立即询价</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination showQuickJumper defaultCurrent={1} total={500} onChange={onChange} />
    </div>
  );
}
