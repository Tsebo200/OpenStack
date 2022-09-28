import React from "react";
import { JoinCommunityCard } from "./JoinCommunityCard/JoinCommunityCard";

import styles from "./LandingPage.module.scss";
import { LecturerCard } from "./LecturerCard/LecturerCard";

export const LandingPage = () => {
  const words = ["developer", "designer"];
  

  return (
    <div className={styles.landing_page}>
      <section className={styles.call_to_action}>
        <JoinCommunityCard />
        <LecturerCard />
      </section>
      <section className={styles.sentence_animation}>
        <h2>
          Every _____ has a tab open to
          Open stack
        </h2>
      </section>
    </div>
    
  );
};
