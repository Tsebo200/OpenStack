import React from 'react';
import styles from './TagCard.module.scss';

export default function TagCard({tagName, onClick}) {
  return (
    <div className={styles.container} onClick={onClick}>
        <h4>{tagName}</h4>
    </div>
  )
}
