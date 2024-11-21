import * as React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from "dayjs";

import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";
import "./index.less";
import Home from "./home";
import Goods from "./goods";
import About from "./about";
import Demo from "./demo";

dayjs.locale("zh-cn");

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0); // 跳转路由时将页面滚动到顶部
  }, [pathname]);

  return null; // 该组件只用来触发副作用
};

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <ScrollToTop /> {/* 确保每次切换路由时重置滚动 */}
        <Routes>
          <Route key="home" path="/" element={<Home />} />
          <Route key="goods" path="/goods" element={<Goods />} />
          <Route key="about" path="/about" element={<About />} />
          {/*<Route path="/demo" element={<Demo />} />*/}
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

createRoot(document.getElementById("root")).render(<App />);
