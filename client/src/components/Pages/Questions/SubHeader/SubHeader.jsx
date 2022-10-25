import React from "react";
import { Link } from "react-router-dom";

import styles from "./SubHeader.module.scss";

export const SubHeader = () => {
  return (
    <div className={styles.sub_nav_container}>
      <nav className={styles.sub_nav}>
        <Link to="/">Home</Link>
        <br />
        <p>Public</p>
        <Link to="/questions">Questions</Link>
        <Link to="/questions/tags">Tags</Link>
        <Link to="/questions/users">Users</Link>
      </nav>
    </div>
  );
};
