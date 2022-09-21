import React from 'react'
import styles from './TagCard.module.scss';
import icon from '../../assests/html.svg';

export default function TagCard() {
  return (
    <div className={styles.container}>
        <img src={icon} width={40}/>
    </div>
  )
}
