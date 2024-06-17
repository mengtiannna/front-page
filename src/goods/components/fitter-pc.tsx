import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context.ts";
import { UpOutline, DownOutline } from "antd-mobile-icons";
import './fitter-pc.less';

export default function FitterPC(props) {
  const { state, dispatch } = useContext(Context);
  const { brandList, productList } = state;
  return (
    <div className="fitter-pc">
      <div className="fitter-pc-item">
        <span className="f-title">品牌：</span>
        <div className="brandList">
          {brandList.map(item =>{
            return <div className="brandItem" key={item.id}>
              <img src={item.url} alt=""/>
              <span>{item.name}</span>
            </div>
          })}
        </div>
      </div>
      <div className="fitter-pc-item">
        <span className="f-title">产品：</span>
        <div className="productList">
          {productList.map(item =>{
            return <div className="productItem" key={item.id}>
              <span>{item.name}</span>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}
