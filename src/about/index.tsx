import * as React from "react";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "../axios";
import Header from "../common/header";
import Bottom from "../common/bottom.tsx";
import './index.less';
import aboutTU from '../assets/about-tu.png';
import rowIcon from "../assets/row-icon.png";
import tu1 from "../assets/tu1.png";
import tu2 from "../assets/tu2.png";
import tu3 from "../assets/tu3.png";

export default function About(props) {
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
    <div className="about">
      <Header/>
      <div className="commonImg"><img src={aboutTU} alt=""/></div>
      <div className="common-bg">
        <div className="common-title">
          <div>
            <img className="rowIcon rowIconLeft" src={rowIcon} alt=""/>
            <span className="title">关于我们</span>
            <img className="rowIcon" src={rowIcon} alt=""/>
          </div>
          <div className="sub-title">中国电子器件集成供应链服务商</div>
        </div>
        <div className="info-con">
          <div className="info-txt-con left-info-com">
            <div>
              <div className="info-title">上海闰芯科技有限公司</div>
              <div className="info-txt mt20">中国电子器件集成供应链服务商，专业代理经销全球各大优秀品牌的全系列产品。
              </div>
              <div className="info-txt mt20">注册时间：2017年08月31日</div>
              <div className="info-txt">注册地：中国-上海</div>
              <div className="info-txt">注册资金：人民币500万元</div>
              <div className="info-txt mt20">
                上海闰芯科技有限公司是中国电子器件集成供应链服务商。公司成立于2017年，专业代理经销全球各大优秀品牌的全系列产品。公司成立以来，基于市场电子化、智能化的高速发展，公司目前服务客户群体涵盖汽车电子、工控、电机、移动通讯、智能物联、NB-IOT等行业，公司致力成为国内知名的电子器件供应链服务一站式平台。
              </div>
            </div>
          </div>
          <div className="right-info-com ml80">
            <img className="info-img tu2" src={tu2} alt=""/>
          </div>
        </div>
      </div>
      <div>
        <div className="info-con">
          <div className="left-info-com">
            <img className="info-img tu3" src={tu3} alt=""/>
          </div>
          <div className="info-txt-con right-info-com ml80">
            <div>
              <div className="info-title">企业愿景</div>
              <div className="info-txt mt20">与客户共同营造符合全球化电子元器件供应链一站式平台。</div>
              <div className="info-title mt20">企业理念</div>
              <div className="info-txt mt20">专注领域：优质电子元器件；</div>
              <div className="info-txt">服务客户：持续为客户提供高性价比的产品和服务；</div>
              <div className="info-txt">团队合作：同心同德、合作共赢；</div>
              <div className="info-txt">创新进取：保持初心，坚持持续创新，追求卓越；</div>
              <div className="info-txt">回馈社会：为客户和社会创造价值，在过程中成就自我。</div>
            </div>
          </div>
        </div>
      </div>
      <div className="common-bg">
        <div className="common-title">
          <div>
            <img className="rowIcon rowIconLeft" src={rowIcon} alt=""/>
            <span className="title">联系我们</span>
            <img className="rowIcon" src={rowIcon} alt=""/>
          </div>
          <div className="sub-title">您可通过热线电话或QQ与我们联系，我们将很高兴为您服务。</div>
        </div>
        <div className="info-con">
          <div className="info-txt-con">
            <div>
              <div className="info-title">上海闰芯科技有限公司</div>
              <div className="info-txt mt20">中国电子器件集成供应链服务商，专业代理经销全球各大优秀品牌的全系列产品。
              </div>
              <div className="info-txt mt20">联系电话：18721790998</div>
              <div className="info-txt">工作时间：09:00-18:00</div>
              <div className="info-txt">邮箱：Shanghai@global-leapcore.com</div>
              <div className="info-txt">联系QQ：544184032</div>
              <div className="info-txt">联系地址：上海市金山区朱泾镇秀江路280弄80号12幢113室</div>
            </div>
          </div>
          <img className="info-img" src={tu1} alt=""/>
        </div>
      </div>
      <Bottom/>
    </div>
  );
}
