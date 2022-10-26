import React from 'react';
import styles from './TagsSelected.module.scss'

export default function TagsSelected(props) {


  return (
    <div className={styles.container}>
        <p className={styles.tag}>{props.tag}</p>
    </div>
  )
}
