import React, { useEffect, useState } from "react";
import { Card } from "../../UI/Card/Card";
import { JoinCommunityCard } from "./JoinCommunityCard/JoinCommunityCard";

import styles from "./LandingPage.module.scss";
import { LecturerCard } from "./LecturerCard/LecturerCard";

export const LandingPage = () => {
  // const words = ["developer", "designer"];
  // // const [WordCount, setWordCount] = useState(0)
  // let count = 0

  // const [Word, setWord] = useState(words[count])

  // useEffect(() => {
  //   const wordChangeTimer = setInterval(() => {
  //     console.log("change word");
  //     count = count + 1
  //     if (count > words.length -1){
  //       count = 0
  //     }
  //     setWord(words[count])
  //   }, 5000);

  //   return () => {
  //     clearInterval(wordChangeTimer);
  //   }
  // }, [])

  return (
    <>
      <div className={styles.landing_page}>
        <section className={styles.call_to_action}>
          <JoinCommunityCard />
          <LecturerCard />
        </section>
        <section className={styles.sentence_animation}>
          {/* <h2>
          Every <span>{Word}</span> <span className={styles.sentence_animation_word}>{Word}</span> has a tab open to
          Open stack
        </h2> */}
          <br />
          <h2>Stuck with your project ask questions and find answers</h2>
          <br />
          <br />
          <div className={styles.brake}></div>
          <br />
          <br />
        </section>
      </div>
      <div className={styles.tag_cards_container}>
      <div className={styles.question_catagories}>
          <div className={styles.category_card}>
            <ion-icon name="logo-css3"></ion-icon>
          </div>
          <div className={styles.category_card}>awd</div>
          <div className={styles.category_card}>awd</div>
          <div className={styles.category_card}>awd</div>
          <div className={styles.category_card}>awd</div>
        </div>
      </div>
        
    </>
  );
};
