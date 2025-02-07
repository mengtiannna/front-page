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

// demo
import Progress from "./progress";
import Waterfall1 from "./waterfall/demo1";
import Waterfall2 from "./waterfall/demo2";
import Waterfall3 from "./waterfall/demo3";

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

          {/*demo*/}
          {/*瀑布流* 圆环滚动示例*/}
          <Route path="/progress" element={<Progress />} />
          {/*瀑布流* demo*/}
          <Route path="/waterfall/demo1" element={<Waterfall1 />} />
          <Route path="/waterfall/demo2" element={<Waterfall2 />} />
          <Route path="/waterfall/demo3" element={<Waterfall3 />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

createRoot(document.getElementById("root")).render(<App />);
