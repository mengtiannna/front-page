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
import './index.css';

dayjs.locale('zh-cn');

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/*" element={<BlogApp />} />
          <Route path="/users/*" element={<UserApp />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        Check out the <Link to="/blog">blog</Link> or the{" "}
        <Link to="users">users</Link> section
      </p>
    </>
  );
}

function BlogApp() {
  return (
    <Routes>
      <Route index element={<h1>Blog Index</h1>} />
      <Route path="posts" element={<h1>Blog Posts</h1>} />
    </Routes>
  );
}

function UserApp() {
  return (
    <Routes>
      <Route index element={<h1>Users Index</h1>} />
    </Routes>
  );
}

createRoot(document.getElementById('root')).render(<App />);