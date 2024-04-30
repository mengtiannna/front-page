import * as React from "react";
import { Tabs } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, createContext, useContext, Dispatch } from "react";
import logo from "../assets/logo.png";
import "./header.less";

// 定义AppState接口
interface AppState {
  name: string;
  // 添加其他你需要的属性
}

// 定义Action类型，如果你的reducer需要处理不同类型的action
// 你可以在这里定义所有可能action的类型
type Action = {
  type: string;
  payload?: any;
};

// 定义上下文类型
interface HeaderContextType {
  state: AppState;
  dispatch: Dispatch<Action>;
}

// 创建上下文
const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "set":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};


export default function HeaderProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, {
    name: "default",
  });

  useEffect(() => {

  }, []);

  return (
    <HeaderContext.Provider value={{ state, dispatch }}>
      <Header {...props} />
    </HeaderContext.Provider>
  );
}

 function Header(props) {
  const { state, dispatch } = useContext(HeaderContext);
  // console.log(123123123,state)
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
      {/*<Son />*/}
      {/*<div onClick={()=>{*/}
      {/*  dispatch({*/}
      {/*    type: "set",*/}
      {/*    payload: {*/}
      {/*      name: "123123123"*/}
      {/*    }*/}
      {/*  })*/}
      {/*}}>{state.name}</div>*/}
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

const Son = (props) => {
  const { state, dispatch } = useContext(HeaderContext);
  // console.log('state',state);
  return <div onClick={()=>{
    dispatch({
      type: "set",
      payload: {
        name: "123123123"
      }
    })
  }}>click</div>
}

