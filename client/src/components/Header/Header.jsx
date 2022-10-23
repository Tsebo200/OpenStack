import React, { useEffect } from "react";

import styles from "./Header.module.scss";
import openStackLogo from "../../assets/OpenStackLogo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { SearchForm } from "./UI/SearchForm/SearchForm";
import { Login } from "../Pages/Login/Login";
import { useAuth } from "../../Hooks/useAuth";
import { UserHeaderIcon } from "./UI/UserHeaderIcon/UserHeaderIcon";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Header = () => {
  let query = useQuery();
  const { Auth } = useAuth();

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
    if (query.get('action') === "login") {
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
        {Auth?.userData?.UserInfo?.username ? (
          <UserHeaderIcon/>
        ) : (
          <a className={styles.login} onClick={showLoginHandler}>
            Login
          </a>
        )}
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
