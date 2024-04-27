import * as React from "react";
import { Tabs } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Header(props) {
  let navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState("/");
  let fn = (key) => {
    console.log("fn key", key);
    navigate(key);
  };

  useEffect(() => {
    // 手动设置 activeKey 为当前路由路径
    setActiveKey(location.pathname);
  }, [location]);

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <Tabs
        activeKey={activeKey}
        onTabClick={(key, event) => {
          console.log("key", key);
          fn(key);
        }}
        items={[
          {
            label: "首页",
            key: "/",
          },
          {
            label: "产品展示",
            key: "/goods",
          },
          {
            label: "关于我们",
            key: "/about",
          },
        ]}
      />
    </div>
  );
}
