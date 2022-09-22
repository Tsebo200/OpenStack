import React from 'react'
import styles from './TagCard.module.scss';
import html from '../../assets/html.svg';

export default function TagCard() {
  return (
    <div className={styles.container}>
        <img src={html} width={40}/>
    </div>
  )
}
