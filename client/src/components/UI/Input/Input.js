import React from "react";
import classes from "./Input.module.css";

export const Input = ({
  type,
  id,
  label,
  onClick,
  onBlur,
  onChange,
  value,
  name,
}) => {
  return (
    <div className={classes.group}>
      <input
        value={value}
        onBlur={onBlur}
        name={name}
        onClick={onClick}
        type={type}
        required
        id={id}
        onChange={onChange}
      />
      <span className={classes.highlight}></span>
      <span className={classes.bar}></span>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
