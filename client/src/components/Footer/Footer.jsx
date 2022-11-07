import React from "react";

import styles from "./Footer.module.scss";
import openStackLogo from "../../assets/OpenStackLogo-white.svg";
import facebook from "../../assets/Facebook.svg";
import twitter from "../../assets/Twitter.svg";
import instagram from "../../assets/Instagram.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={`${styles.footer_container}`}>
          <img className={`${styles.logo}`} src={openStackLogo} />
          <div>
            <h4>Open Stack</h4>
            <Link to="/questions">Questions</Link>
          </div>
          <div className={styles.external_links}>
            <Link to="/questions">Github</Link>
            <Link to="/questions">Youtube</Link>
          </div>
          <div className={styles.copywrite}>
            &copy; <em id="date"></em>OpenStack 2022
          </div>
        </div>
      </div>
    </footer>
  );
};
