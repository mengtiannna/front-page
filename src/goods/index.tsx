import * as React from "react";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "../axios";
import Header from "../common/header";
import Bottom from "../common/bottom.tsx";
import './index.less';
import aboutTU from "../assets/about-tu.png";

export default function Goods(props) {
  const [checkedIndex, setCheckedIndex] = useState(null);
  const [reasons, setReasons] = useState([]);
  // 其它原因
  const [reasonText, setReasonText] = useState("");

  const init = async () => {
    try {
      const response = await get("baseConfig", { param1: "value1" });
      console.log("response", response);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
    // let arr = res.cancellationReasonVOList;
    // arr.push({id: '-1', reason: '其他原因'});
    // setReasons(arr);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div className="goods">
      <Header/>
      <div className="commonImg"><img src={aboutTU} alt=""/></div>
      goods
      <Bottom/>
    </div>
  );
}
