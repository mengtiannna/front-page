import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "../axios";
import Header from "../common/header";
import Bottom from "../common/bottom";
import { Carousel } from "antd";
import banner from "../assets/banner.png";
import rowIcon from "../assets/row-icon.png";
import tu1 from "../assets/tu1.png";
import reactPng from "../assets/react.svg";
import "./index.less";

export default function Home(props) {
  const [data, setData] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const init = async () => {
    try {
      const response = await get("baseConfig", { param1: "value1" });
      // console.log("response", response);
      // let arr = response?.xxx || [];
      // setData(arr)
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    // init();
    const handleResize = () => {
      if(window.innerWidth < 768){
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    // 清理事件监听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 空数组意味着这个 effect 只会在组件挂载时执行一次
  return (
    <div className="home">
      <Header />
      <Carousel rootClassName="slide-banner" autoplay>
        <div>
          <img className="slide-img" src={banner} alt="" />
        </div>
        <div>
          <img className="slide-img" src={banner} alt="" />
        </div>
      </Carousel>
      <div>
        <div className="common-title">
          <div>
            <img className="rowIcon rowIconLeft" src={rowIcon} alt=""/>
            <span className="title">企业简介</span>
            <img className="rowIcon" src={rowIcon} alt=""/>
          </div>
          <div className="sub-title">中国电子器件集成供应链服务商</div>
        </div>
        <div className="info-con">
          <div className="right-info-com">
            <img className="info-img" src={tu1} alt=""/>
          </div>
          <div className="info-txt-con left-info-com">
            <div>
              <div className="info-title">上海闰芯科技有限公司</div>
              <div className="info-txt mt20">注册时间：2017年08月31日</div>
              <div className="info-txt">注册地：中国-上海</div>
              <div className="info-txt">注册资金：人民币500万元</div>
              <div className="info-txt mt20">
                上海闰芯科技有限公司是中国电子器件集成供应链服务商。公司成立于2017年，专业代理经销全球各大优秀品牌的全系列产品。公司成立以来，基于市场电子化、智能化的高速发展，公司目前服务客户群体涵盖汽车电子、工控、电机、移动通讯、智能物联、NB-IOT等行业，公司致力成为国内知名的电子器件供应链服务一站式平台。
              </div>
            </div>
            <div className="info-btn">查看更多</div>
          </div>
        </div>
      </div>

      <div className="brand-list common-bg">
        <div className="common-title">
          <div>
            <img className="rowIcon rowIconLeft" src={rowIcon} alt=""/>
            <span className="title">代理品牌</span>
            <img className="rowIcon" src={rowIcon} alt=""/>
          </div>
          <div className="sub-title">中国电子器件集成供应链服务商</div>
        </div>
        <Carousel
          rootClassName="slide-brand"
          arrows={slidesToShow !== 2}
          infinite={true}
          autoplay={false}
          dots={false}
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          // centerMode={true}
          // centerPadding="40px"
        >
          {[0, 1, 2, 3].map((item) => {
            return (
              <div key={item}>
                <div className="banner-img-box">
                  <img className="banner-img" src={reactPng} alt=""/>
                </div>
                <div className="banner-txt">
                  <p className="brand-name">上海贝岭{item}</p>
                  <p className="brand-info-txt">全国高新技术百强企业全国高新技术百强企业</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <Bottom />
    </div>
  );
}
