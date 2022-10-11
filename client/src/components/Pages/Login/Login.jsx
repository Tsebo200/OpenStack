import React from "react";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";
import styles from "./Login.module.scss";
import logo from '../../../assets/OpenStackLogo.png';

export const Login = () => {
  const loginHandler = (event) => {
    event.preventDefault();
    console.log("login");
  };

  return (
    <>
    <div className="test"></div>
    <form onSubmit={loginHandler} className={styles.main_container}>
      <div className="logo_breaker">
      <div className={styles.logo}> <img src= {logo} width={190}/></div>
      </div>
      <div className={styles.main_container_child}>
        <h1>Log In</h1>
        <h5 className={styles.login_welcome_msg}>
          <center>Welcome Back! Please enter your details to continue</center>
        </h5>
        <br/>
        <Input type="text" label="Email" name="username" />
        {/* <span class="br"></span>  */}
        <Input type="password" label="Password" name="password" />
        <br />
        <br />

        <div className={styles.button_container}>
          <Button>Login</Button>
        </div>
      </div>
    </form>
    </>
  );
};
