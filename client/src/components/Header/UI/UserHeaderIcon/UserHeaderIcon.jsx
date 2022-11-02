import React from "react";

import styles from "./UserHeaderIcon.module.scss";

import userIcon from "../../../../assets/profilePicture.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Hooks/useAuth";

export const UserHeaderIcon = (props) => {
  const { Auth } = useAuth();

  const navigate = useNavigate();

  const navigateUserSettingsHandler = () => {
    navigate("/questions/UserSettings");
  }

  return (
    <div className={styles.user_buttons}>
      {Auth?.roles?.find((role) => role === 5150) && (
        <Link className={styles.admin_button} to="/admin">
          Admin
        </Link>
      )}

      <div
        className={styles.notification_badge}
        onClick={console.log("Show notifications ")}
      >
        <ion-icon name="notifications-outline"></ion-icon>
        <p>+99</p>
      </div>
      
      <img className={styles.user_img} onClick={navigateUserSettingsHandler} src={userIcon} />
      <h5>{Auth.userData.UserInfo.username}</h5>
      <a onClick={props.onClick}>Logout</a>
    </div>
  );
};
