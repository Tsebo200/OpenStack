import React from "react";
import classes from "./Button.module.scss";

export const Button = props => {
  return (
    <button
      type={props.type}
      className={classes.button}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
