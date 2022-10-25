import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../UI/Button/Button";
import { Card } from "../../../UI/Card/Card";
import styles from './ActiveQusetions.module.scss'

export const ActiveQusetions = () => {
  return (
    <div  className={styles.mainActiveCon}>
        <h3 className={styles.activeTitle}>Most active questions:</h3>
        <div className={styles.activeCon}>
          <img className={styles.activeIMG} src="https://images.unsplash.com/photo-1508317469940-e3de49ba902e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHRtbCU1Q3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
          <h4 className={styles.activeText}>How do you write html?</h4>
        </div>

        <div className={styles.activeCon}>
          <img className={styles.activeIMG} src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y3NzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <h4 className={styles.activeText}>What is JS?</h4>
        </div>

        <div className={styles.activeCon}>
          <img className={styles.activeIMG} src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3NzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <h4 className={styles.activeText}>How do you write CSS?</h4>
        </div>
    </div>
  );
};
