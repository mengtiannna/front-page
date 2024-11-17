import React, { useState, useEffect } from "react";
import "./index.less";

const ProgressCircle = ({ targetProgress = 150, duration = 3, imgSrc }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const normalizedTarget = Math.min(Math.max(targetProgress, 0), 200); // 限制目标进度在 0-200
    const totalFrames = duration * 60; // 假设 60fps
    const step = normalizedTarget / totalFrames; // 每帧增加的进度值

    let currentProgress = 0;
    let frame = 0;

    const animate = () => {
      frame++;
      currentProgress = Math.min(frame * step, normalizedTarget); // 计算当前进度
      setProgress(currentProgress);

      if (currentProgress < normalizedTarget) {
        requestAnimationFrame(animate); // 如果未达到目标进度，继续下一帧
      }
    };

    requestAnimationFrame(animate);

    return () => {
      frame = totalFrames; // 防止多次触发动画
    };
  }, [targetProgress, duration]);

  // 计算 `moving-icon` 的旋转角度
  const iconRotation = (progress) => {
    // 如果进度小于等于 100，继续同步运动
    if (progress <= 100) {
      return progress * 3.6 - 90; // 进度范围 0-100 映射到 0-360 度
    }
    // 如果进度大于 100，保持沿圆边继续旋转
    return 360 * ((progress - 100) / 100) - 90; // 100-200 映射到 360-720 度
  };

  return (
    <div className="progress-container">
      <div
        className="progress-circle"
        style={{
          "--progress": Math.min(progress, 100), // 进度条只处理 0-100 范围
        }}
      ></div>
      <div className="progress-inner"></div>
      <img
        src={imgSrc}
        alt="Moving Icon"
        className="moving-icon"
        style={{
          transform: `rotate(${iconRotation(progress)}deg) translate(75px) rotate(${-(iconRotation(progress))}deg)`,
        }}
      />
    </div>
  );
};

export default ProgressCircle;
