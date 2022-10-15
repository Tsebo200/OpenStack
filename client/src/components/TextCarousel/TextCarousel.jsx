import React, { useState } from 'react';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import styles from './TextCarousel.module.scss';

export default function TextCarousel() {

    const [tab, setTab] = useState(null);

    let arr = ["First Year", "Second Year", "Third Year", "Creative Computing", "Lecturer", "Reported"];

    const changeAppearance = () => {
      if(setTab){
        setTab(false);
      } else {
        setTab(true);
      }
    }


  return (
    <div className={styles.container}>
      {arr.map((i) => (<h5 onClick={() => setTab(i)} className={tab === i ? styles.selected : null}>{i}</h5>))}
    </div>
  )
}
