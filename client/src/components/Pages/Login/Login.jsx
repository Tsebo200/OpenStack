import React from "react";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";
import styles from "./Login.module.scss";
import logo from "../../../assets/OpenStackLogo.png";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const loginHandler = (event) => {
    event.preventDefault();
    console.log("login");
  };

  return (
    <form className={styles.main_container}>
      <img src={logo} className={styles.logo} />
      <h1>Log In</h1>
      <h4>
        Welcome Back! <br /> Please enter your details
      </h4>
      <br />
      {/* <Input type="text" label="Email" name="username" />
      <Input type="password" label="Password" name="password" /> */}
      <br />
      <br />
      <Button>Login</Button>
      <br />
      <h5>
        Don't have an account create one <Link onClick={props.onClick} to="/register">here</Link>
      </h5>
    </form>
  );
};
