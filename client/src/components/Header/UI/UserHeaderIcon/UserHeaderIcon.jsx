import React from "react";

import styles from "./UserHeaderIcon.module.scss";

import userIcon from "../../../../assets/profilePicture.jpg";

export const UserHeaderIcon = (props) => {
  return (
    <div className={styles.user_buttons}>
      <div className={styles.notification_badge}>
        <ion-icon name="notifications-outline"></ion-icon>
        <p>+99</p>
      </div>
      {/* <img src={userIcon}/> */}
      {/* <a>notifications</a> */}
      {/* <a>usericon</a> */}
    </div>
  );
};
