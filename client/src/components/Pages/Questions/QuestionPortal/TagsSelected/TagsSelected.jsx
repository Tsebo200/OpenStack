import React from 'react';
import styles from './TagsSelected.module.scss'

export default function TagsSelected(props) {

  return (
    <div className={styles.container}>
      {props.tag.map((i, index) => 
        <p className={styles.tag} key={index}>{i} <ion-icon name="close-outline" onClick={() => {props.onClick(index)}}></ion-icon></p>
      )}
    </div>
  )
}
