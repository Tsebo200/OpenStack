import React from "react";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";
import styles from "./Login.module.scss";
// import logo from '/client/src/assests/Backround.png';

export const Login = () => {
  const loginHandler = (event) => {
    event.preventDefault();
    console.log("login");
  };

  return (
    <form onSubmit={loginHandler} className={styles.main_container}>
      <div className={styles.logo}>ahb</div>
      <div className={styles.main_container_child}>
        <h1>Log In</h1>
        <h5 className={styles.login_welcome_msg}>
          Welcome back! Please enter your details
        </h5>
        <Input type="text" label="username" name="username" />
        <Input type="password" label="password" name="password" />
        <br />
        <div className={styles.button_container}>
          <Button>Login</Button>
        </div>
      </div>
    </form>
  );
};
