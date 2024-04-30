import * as React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./bottom.less";

export default function Bottom(props) {
  // let navigate = useNavigate();
  // const location = useLocation();
  // const [activeKey, setActiveKey] = useState("/");
  // let fn = (key) => {
  //   console.log("fn key", key);
  //   navigate(key);
  // };
  //
  // useEffect(() => {
  //   // 手动设置 activeKey 为当前路由路径
  //   setActiveKey(location.pathname);
  // }, [location]);

  return (
    <div className="bottom">
      <div className="item">
        <div className="txt">国内电子器件供应链服务一站式平台</div>
        <div className="txt">地址：上海市金山区朱泾镇秀江路280弄80号12幢113室</div>
      </div>
      <div className="item">
        <div className="txt">中国电子器件集成供应链服务商</div>
        <div className="txt">邮箱：shanghai@ global-leapcore.com</div>
      </div>
      <div className="item">
        <div className="txt">上海闰芯科技有限公司</div>
        <div className="txt">工作时间：09:00-18:00</div>
      </div>
      <div className="txt copy-right">©2017 - 上海闰芯科技有限公司 版权所有</div>
    </div>
  );
}
