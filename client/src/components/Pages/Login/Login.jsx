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
      <div className={styles.logo}> <img src= {logo} width={130}/></div>
      </div>
      <div className={styles.main_container_child}>
        <h1>Log In</h1>
        <h5 className={styles.login_welcome_msg}>
          Welcome back! Please enter your details
        </h5>
        <Input type="text" label="Email" name="username" />
        <Input type="password" label="password" name="password" />
        <br />
        <div className={styles.button_container}>
          <Button>Login</Button>
        </div>
      </div>
    </form>
    </>
  );
};
