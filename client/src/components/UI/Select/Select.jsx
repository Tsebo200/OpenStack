import React from "react";

import styles from './Select.module.scss'

export const Select = () => {
  return (
    <div
    className={styles.select}>
      <select className={styles.select_text}required>
        <option value="" disabled selected></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <span className={styles.select_highlight}></span>
      <span className={styles.select_bar}></span>
      <label className={styles.select_label}>Select</label>
    </div>
  );
};
