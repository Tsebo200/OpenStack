import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../UI/Button/Button";
import { Card } from "../../../UI/Card/Card";
import styles from './JoinCommunityCard.module.scss'

export const JoinCommunityCard = () => {
  return (
    <div
      className={`${styles.join_community_card} ${styles.call_to_action_card}`}
    >
      <Card>
        <ion-icon name="help-outline"></ion-icon>
        <h4>
          Can’t figure out this imposable problem, find the answer on OpenStack
        </h4>
        <Button>Join the Open Stack community</Button>
        <h5>
          or <Link>search now</Link>
        </h5>
      </Card>
      <span className={styles.card_shaper_negative}></span>
      <span className={styles.card_shaper}></span>
    </div>
  );
};
