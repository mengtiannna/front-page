import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../axios";
import Header from "../common/header";
import Bottom from "../common/bottom";
import { Carousel } from "antd";
import banner from "../assets/banner.png";
import rowIcon from "../assets/row-icon.png";
import tu1 from "../assets/tu1.png";

// 动态导入图片
const images: Record<string, { default: string } | string> = import.meta.glob('/src/assets/img/*.{png,jpg,jpeg,svg}', { eager: true });
const mapImages = {};
for (const path in images) {
  // 提取文件名作为 key，比如 "/src/assets/img/img1.png" => "img1"
  const fileName = path.split('/').pop().split('.')[0];
  mapImages[fileName] = (images[path] as { default: string }).default || images[path];
}

import "./index.less";

export default function Home(props) {
  const navigate = useNavigate();
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const init = async () => {
    try {
      // const response = await get("baseConfig", { param1: "value1" });
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
      if (window.innerWidth < 768) {
        setSlidesToShow(2);
        setIsMobile(true);
      } else {
        setSlidesToShow(4);
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // 清理事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
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
            <img className="rowIcon rowIconLeft" src={rowIcon} alt="" />
            <span className="title">企业简介</span>
            <img className="rowIcon" src={rowIcon} alt="" />
          </div>
          <div className="sub-title">中国电子器件集成供应链服务商</div>
        </div>
        <div className="info-con">
          <div className="right-info-com">
            <img className="info-img" src={tu1} alt="" />
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
            <div
              className="info-btn"
              onClick={() => {
                navigate("/about");
              }}
            >
              查看更多
            </div>
          </div>
        </div>
      </div>

      <div className="brand-list common-bg">
        <div className="common-title">
          <div>
            <img className="rowIcon rowIconLeft" src={rowIcon} alt="" />
            <span className="title">代理品牌</span>
            <img className="rowIcon" src={rowIcon} alt="" />
          </div>
          <div className="sub-title">中国电子器件集成供应链服务商</div>
        </div>
        <Carousel
          rootClassName="slide-brand"
          arrows={slidesToShow !== 2}
          infinite={true}
          autoplay={true}
          dots={false}
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          // centerMode={true}
          // centerPadding="40px"
        >
          {bannerList.map((banner, index) => (
            <div key={index}>
              <div className="banner-img-box">
                <img
                  className="banner-img"
                  src={mapImages[banner.img]}
                  alt={banner.name}
                />
              </div>
              <div className="banner-txt">
                <p className="brand-name">{banner.name}</p>
                <p className="brand-info-txt">{banner.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <Bottom />
    </div>
  );
}

const bannerList = [
  {
    img: "img1",
    name: "DUNGS",
    text: "汽车调光电机芯片，主推12V-24V调光电机，可替代TI，英飞凌，PIN-IN对应，尾灯模组芯片（MEDS92630），完全对标TI,NXP的92630",
    remark: "代理",
  },
  {
    img: "img2",
    name: "TAIYO",
    text: "大封装高容、电感、滤波器等",
    remark: "代理",
  },
  {
    img: "img3",
    name: "松下",
    text: "连接器、开关、继电器、电感、SP、超级电容、薄膜电容、可调电阻、共模滤波器、钮扣电池",
    remark: "代理",
  },
  {
    img: "img4",
    name: "RALEC",
    text: "普通厚膜电阻，功率厚膜电阻，电流检测电阻（合金电阻），汽车电阻",
    remark: "代理",
  },
  {
    img: "img5",
    name: "TAI-TECH",
    text: "功率电感，磁珠，滤波器",
    remark: "代理",
  },
  {
    img: "img6",
    name: "KOA",
    text: "功率电阻，厚膜电阻，宽极电阻，电流检测电阻，薄膜电阻，预充电阻等",
    remark: "代理",
  },
  {
    img: "img7",
    name: "Epson",
    text: "晶振，有源晶体，无缘晶体，时钟模块，传感器",
    remark: "代理",
  },
  {
    img: "img8",
    name: "微盟",
    text: "电源类管子产品，主要涉及LDO\\DC-DC\\AC-DC\\LED\\锂电保护等",
    remark: "代理",
  },
  {
    img: "img9",
    name: "BELLING",
    text: "LDO/DC-DC、AC-DC/PMU、EEPROM存储器等",
    remark: "代理",
  },
  { img: "img10", name: "迦美", text: "射频开关", remark: "代理" },
  {
    img: "img11",
    name: "磁立方",
    text: "功率电感，一体成型电感，滤波器",
    remark: "代理",
  },
  { img: "img12", name: "雷卯", text: "TVS,ESD，二三极管", remark: "代理" },
  {
    img: "img13",
    name: "英迈尔",
    text: "变压器，磁环，各类定制滤波器",
    remark: "代理",
  },
  {
    img: "img14",
    name: "YinT",
    text: "二极管 三极管 LDO NTC MOSFET",
    remark: "代理",
  },
  {
    img: "img15",
    name: "思必驰",
    text: "人工智能语音芯片(TH1520)",
    remark: "代理",
  },
  {
    img: "img16",
    name: "应能微",
    text: "超结（SJ）高压MOSFET、屏蔽栅沟槽型（SGT）MOSFET、SiC MOSFET系列，TVS，ESD等",
    remark: "代理",
  },
  {
    img: "img17",
    name: "优耐",
    text: "电感，变压器，磁环，滤波器等",
    remark: "代理",
  },
  {
    img: "img18",
    name: "VPSC",
    text: "电源芯片，电源模块、隔离芯片",
    remark: "分销",
  },
  { img: "img19", name: "长电科技", text: "二极管 三极管 LDO", remark: "代理" },
  {
    img: "img20",
    name: "顺络",
    text: "功率电感，磁珠，滤波器，钽电容，热敏电阻",
    remark: "分销",
  },
  {
    img: "img21",
    name: "麦歌恩微",
    text: "磁性编码芯片、磁性电流/线性检测芯片、磁性位置开关检测芯片、背磁速度检测芯片等",
    remark: "代理",
  },
  {
    img: "img22",
    name: "固锝",
    text: "汽车级二极管，整流桥二极管，MOSFET，TVS,小信号整流管，光伏二极管模块",
    remark: "代理",
  },
  { img: "img23", name: "晶松", text: "各类CBB薄膜电容", remark: "代理" },
  {
    img: "img24",
    name: "旭程",
    text: "保险丝管、插片式保险丝、保险丝座、KSD系列温控开关、汽车温控器等",
    remark: "代理",
  },
  {
    img: "img25",
    name: "光宝",
    text: "光耦、发光二极管、光感SENSOR、红外对管",
    remark: "分销",
  },
  {
    img: "img26",
    name: "TDK",
    text: "电容、电感、磁珠、热敏电阻、LC滤波器、射频滤波器、分频器、BALUN、天线、VCM、NFC、三端子电容、穿心电容、特高压电容",
    remark: "分销",
  },
  {
    img: "img27",
    name: "EPCOS",
    text: "铝电解、压敏电阻、热敏电阻、薄膜电容、电感、放电管",
    remark: "分销",
  },
  {
    img: "img28",
    name: "国巨",
    text: "贴片电阻、电容、插件电阻、采样电阻、天线",
    remark: "分销",
  },
  { img: "img29", name: "三星", text: "电容、电感、钽电容", remark: "分销" },
  {
    img: "img30",
    name: "华科",
    text: "电阻、电容、分频器、滤波器、Balun、耦合器、SAW、天线开关、双工",
    remark: "分销",
  },
  { img: "img31", name: "风华", text: "MLCC、电阻", remark: "分销" },
  { img: "img32", name: "禾伸堂", text: "高压电容、安规电容", remark: "分销" },
  {
    img: "img33",
    name: "NICHICON",
    text: "贴片铝电解、插件铝电解、牛角铝电解、螺栓铝电解、电容",
    remark: "分销",
  },
  {
    img: "img34",
    name: "奇力新",
    text: "电感、磁珠、共模滤波器",
    remark: "分销",
  },
  {
    img: "img35",
    name: "ROHM",
    text: "电阻、二三极管、碳化硅、MEMS SENSOR、DRIVE IC.",
    remark: "分销",
  },
  {
    img: "img36",
    name: "英飞凌",
    text: "MOS、Sensor、LNA、射频开关、射频二三极管、IGBT、ESD器件",
    remark: "分销",
  },
  { img: "img37", name: "TI", text: "芯片，LDO等分立器件", remark: "分销" },
  {
    img: "img38",
    name: "LRC",
    text: "二极管、三极管、ESD保护、MOSFET",
    remark: "分销",
  },
  {
    img: "img39",
    name: "强茂",
    text: "功率二极管、FRED、TVS、整流桥、MOSFET",
    remark: "分销",
  },
  {
    img: "img40",
    name: "Littelfuse",
    text: "光伏保险丝、光伏保险丝座、新能源汽车保险丝、保护继电器、方体保险丝",
    remark: "分销",
  },
  { img: "img41", name: "萨特", text: "保险丝", remark: "分销" },
  { img: "img42", name: "聚鼎", text: "可恢复保险丝", remark: "分销" },
  { img: "img43", name: "亿光", text: "贴片LED,光耦", remark: "分销" },
  {
    img: "img44",
    name: "经纬达",
    text: "网络变压器、网络滤波器、电源变压器、电感器、RJ45连接器、RF射频滤波器等磁性器件",
    remark: "代理",
  },
  {
    img: "img45",
    name: "南瑞",
    text: "大数据、云计算、物联网、移动互联、人工智能、区块链",
    remark: "代理",
  },
  {
    img: "img46",
    name: "类比",
    text: "信号链、电源管理、MCU/DSP",
    remark: "代理",
  },
  { img: "img47", name: "CCTC", text: "精密陶瓷结构件、电容", remark: "分销" },
  {
    img: "img48",
    name: "瞬雷",
    text: "TVS/瞬态抑制二极管、ASS/汽车浪涌抑制器、BPSS/蓝宝宝浪涌抑制器、ESD/静电保护器、AESD/汽车静电保护器、MOSFET/场效应管",
    remark: "代理",
  },
];
