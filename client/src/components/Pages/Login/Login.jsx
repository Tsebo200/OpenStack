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
      <Input type="text" label="Email" name="username" />
      <Input type="password" label="Password" name="password" />
      <br />
      <br />
      <Button>Login</Button>
      <br />
      <h5>
        Don't have an account create one <Link onClick={props.onClick} to="/register">here</Link>
      </h5>

      {/* <div className="test"></div>
    <form onSubmit={loginHandler} className={styles.main_container}>
      <div className="logo_breaker">
      <div className={styles.logo}> <img src={logo}/></div>
      </div>
      <div className={styles.main_container_child}>
        <h1>Log In</h1>
        <h5 className={styles.login_welcome_msg}>
          <center>Welcome Back! Please enter your details to continue</center>
        </h5>
        <br/>
        <Input type="text" label="Email" name="username" />
        <Input type="password" label="Password" name="password" />
        <br />
        <br />

        <div className={styles.button_container}>
          <Button>Login</Button>
        </div>
      </div>
    </form> */}
    </form>
  );
};
