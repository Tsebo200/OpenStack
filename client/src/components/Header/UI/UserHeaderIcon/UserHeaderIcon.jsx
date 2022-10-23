import React from "react";

import styles from "./UserHeaderIcon.module.scss";

import userIcon from "../../../../assets/profilePicture.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Hooks/useAuth";

export const UserHeaderIcon = (props) => {
  const { Auth } = useAuth();
  return (
    <div className={styles.user_buttons}>
      {Auth?.roles?.find((role) => role === 5150) && <Link className={styles.admin_button} to='/admin'>Admin</Link>}
      
      <div
        className={styles.notification_badge}
        onClick={console.log("Show notifications ")}
      >
        <ion-icon name="notifications-outline"></ion-icon>
        <p>+99</p>
      </div>
      <div className={styles.user_icon}>
        <img src={userIcon} />
        {/* <ion-icon name="caret-down-outline"></ion-icon> */}
      </div>
      <a onClick={props.onClick}>Logout</a>
    </div>
  );
};
