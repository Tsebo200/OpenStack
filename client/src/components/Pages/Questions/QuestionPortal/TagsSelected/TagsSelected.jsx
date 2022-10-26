import React from 'react';
import styles from './TagsSelected.module.scss'

export default function TagsSelected(props) {


  return (
    <div className={styles.container}>
      {props.tag.map((i, index) => 
        <p className={styles.tag}>{i}</p>
      )}
    </div>
  )
}
