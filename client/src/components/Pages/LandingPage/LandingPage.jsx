import React, { useEffect, useState } from "react";
import { Card } from "../../UI/Card/Card";

import styles from "./LandingPage.module.scss";
import Quesion from "../../ResultsQuestions/ResultsQuestions"

import knowledgeIMG from "../../../assets/knowledgeIMG.svg"

export const LandingPage = () => {


  return (
    <>
  

      <div className={styles.joinCon}>
        <img className={styles.imgCon} src={knowledgeIMG}/>
        <h2 className={styles.textCon}>Join the Open Stack  comunity!</h2>
        <p className={styles.textCon}>New to Open Stack? Join the community and share in the wealth of knowledge</p>
        <div className={styles.joinBTN}>Sign up</div>
      </div>

      <div className={styles.optionsCon}>
      <div className={styles.joinBTN}>All</div>
        <div className={styles.optionBTN}>First Year</div>
        <div className={styles.optionBTN}>Second Year</div>
        <div className={styles.optionBTN}>Third Year</div>
      </div>
        

        <Quesion />
    </>
  );
};
