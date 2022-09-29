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
          Can’t figure out this imposible problem, find the answer on open stack
        </h4>
        <Button>Join the Open Stack community</Button>
        <p>
          or<a>search now</a>
        </p>
      </Card>
      <span className={styles.card_shaper_negative}></span>
      <span className={styles.card_shaper}></span>
    </div>
  );
};
