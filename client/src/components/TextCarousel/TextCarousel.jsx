import React, { useState } from 'react';
import styles from './TextCarousel.module.scss';

export default function TextCarousel() {

    const [tab, setTab] = useState(false);

  return (
    <div className={styles.container}>
        <h5>First Year</h5>
        <h5>Second Year</h5>
        <h5>Third Year</h5>
        <h5>Honours</h5>
        <h5>Creative Computing</h5>
        <h5>Reported</h5>
    </div>
  )
}
