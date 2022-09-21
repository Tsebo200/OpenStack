import React from "react";
import { useRef } from "react";
import classes from "./Button.module.css";

export const Button = props => {
  return (
    <button
      type={props.type}
      className={classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
