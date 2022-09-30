import React, { useEffect, useState } from "react";
import { JoinCommunityCard } from "./JoinCommunityCard/JoinCommunityCard";

import styles from "./LandingPage.module.scss";
import { LecturerCard } from "./LecturerCard/LecturerCard";

export const LandingPage = () => {
  const words = ["developer", "designer"];
  // const [WordCount, setWordCount] = useState(0)
  let count = 0

  const [Word, setWord] = useState(words[count])
  
  useEffect(() => {
    const wordChangeTimer = setInterval(() => {
      console.log("change word");
      count = count + 1
      if (count > words.length -1){
        count = 0
      }
      setWord(words[count])
    }, 5000);
  
    return () => {
      clearInterval(wordChangeTimer);
    }
  }, [])
  
  

  return (
    <div className={styles.landing_page}>
      <section className={styles.call_to_action}>
        <JoinCommunityCard />
        <LecturerCard />
      </section>
      <section className={styles.sentence_animation}>
        <h2>
          Every <span>{Word}</span> <span className={styles.sentence_animation_word}>{Word}</span> has a tab open to
          Open stack
        </h2>
      </section>
    </div>
    
  );
};
