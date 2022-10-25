import React from "react";
import { Outlet } from "react-router-dom";
import { SubHeader } from "./SubHeader/SubHeader";
import styles from "./QuestionsHome.module.scss";

export const QuestionsHome = () => {
  return (
    <div className={`${styles.main} ${styles.row}`}>
      <div className={styles.subheader_container}>
        <SubHeader />
      </div>

      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};
