import React from "react";

import styles from './LoadingScreen.module.scss'

export const LoadingScreen = () => {
  return (
    <div className={styles.lds_facebook}><div></div><div></div><div></div></div>
  );
};
