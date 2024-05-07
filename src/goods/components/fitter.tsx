import * as React from "react";
import {Fragment, useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {Context} from "../context.ts";

export default function Fitter(props) {
  const { state, dispatch } = useContext(Context);
  console.log('fitter state',state);
  return (
    <div className="fitter">
      fitter
    </div>
  );
}
