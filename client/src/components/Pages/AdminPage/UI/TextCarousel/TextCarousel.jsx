import React, { useState } from "react";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import styles from "./TextCarousel.module.scss";

export default function TextCarousel() {
  const [tab, setTab] = useState("Users");

  let arr = ['All users',
  'Students',
  'Editors',
  'Admins',
  'Reported Questions',
  'Userprofile Pictures',
  'Tags'];

  return (
    <div className={styles.container}>
      <nav>
        <a>All users</a>
        <a>Students</a>
        <a>Editors</a>
        <a>Admins</a>
        <a>Reported Questions</a>
        <a>Userprofile Pictures</a>
        <a>Tags</a>
      </nav>
      {/* {arr.map((i) => (<h5 onClick={() => setTab(i)} className={tab === i ? styles.selected : null}>{i}</h5>))} */}
    </div>
  );
}
