import React, { useState } from "react";
import ProgressCircle from "./progressCircle";
import reactPng from "../assets/react.svg";

const App = () => {

  return (
    <div>
      <ProgressCircle targetProgress={150} duration={1.5} imgSrc={reactPng} />
    </div>
  );
};

export default App;
