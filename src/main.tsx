import * as React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from 'dayjs';

import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import './index.less';
import Home from './home'
import Goods from './goods'
import About from './about'

dayjs.locale('zh-cn');

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goods" element={<Goods />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

createRoot(document.getElementById('root')).render(<App />);