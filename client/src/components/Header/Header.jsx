import React, { useEffect } from "react";

import styles from "./Header.module.scss";
import openStackLogo from "../../assets/OpenStackLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SearchForm } from "./UI/SearchForm";
import { Login } from "../Pages/Login/Login";

export const Header = (props) => {
  console.log(props.action === "login");
  const [LoginContainerCss, setLoginContainerCss] = useState(
    `${styles.login_container}`
  );
  const [LoginContainerBackgroundCss, setLoginContainerBackgroundCss] =
    useState(`${styles.login_container_background}`);

  const showLoginHandler = () => {
    if (
      LoginContainerCss === `${styles.login_container} ${styles.show_login}`
    ) {
      setLoginContainerCss(`${styles.login_container}`);
      setLoginContainerBackgroundCss(`${styles.login_container_background}`);
    } else {
      setLoginContainerCss(`${styles.login_container} ${styles.show_login}`);
      setLoginContainerBackgroundCss(
        `${styles.login_container_background} ${styles.show_login}`
      );
    }
  };
  useEffect(() => {
    if (props.action === "login") {
      showLoginHandler();
    }
  }, []);
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <Link to="/">
          <img className={`${styles.logo}`} src={openStackLogo} />
        </Link>

        <Link to="/questions">Questions</Link>
        <SearchForm />
        <a className={styles.login} onClick={showLoginHandler}>
          Login
        </a>
      </nav>
      <div
        onClick={showLoginHandler}
        className={LoginContainerBackgroundCss}
      ></div>
      <div className={LoginContainerCss}>
        <Login onClick={showLoginHandler} />
      </div>
    </header>
  );
};
