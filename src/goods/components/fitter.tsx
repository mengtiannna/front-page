import * as React from "react";
import {Fragment, useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {Context} from "../context.ts";
import { UpOutline, DownOutline } from 'antd-mobile-icons'

export default function Fitter(props) {
  const { state, dispatch } = useContext(Context);
  console.log('fitter state',state);
  return (
    <div className="fitter">
      <div className="fitter-item">
        <span>品牌</span>
        <UpOutline className="arrow"/>
        <DownOutline className="arrow" />
      </div>
      <div className="fitter-item">
        <span>产品</span>
        <UpOutline className="arrow"/>
        <DownOutline className="arrow" />
      </div>
    </div>
  );
}
