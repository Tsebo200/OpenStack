import React from "react";
import { Button } from "../../../UI/Button/Button";
import { Card } from "../../../UI/Card/Card";
import styles from './LecturerCard.module.scss'
export const LecturerCard = () => {
  return (
    <div
      className={`${styles.join_community_card} ${styles.call_to_action_card}`}
    >
      <Card>
        <ion-icon name="people-outline"></ion-icon>
        <h4>
          Are you a lecturer? Create an account and monitor students questions and administrate user profiles 
        </h4>
        <Button>Get Lecture Account</Button>
        <p>
          or <a>Login now</a>
        </p>
      </Card>
      <span className={styles.card_shaper_negative}></span>
      <span className={styles.card_shaper}></span>
    </div>
  );
};
