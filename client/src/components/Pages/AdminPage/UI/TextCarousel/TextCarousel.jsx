import React, { useState } from "react";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import styles from "./TextCarousel.module.scss";

export default function TextCarousel() {
  const [tab, setTab] = useState("All users");

  let arr = [
    "All users",
    "Students",
    "Editors",
    "Admins",
    "Reported Questions",
    "Userprofile Pictures",
    "Tags",
  ];

  return (
    <div className={styles.container}>
      <nav>
        {arr.map((i) => (
          <a
            onClick={() => setTab(i)}
            className={tab === i ? styles.selected : null}
          >
            {i}
          </a>
        ))}
      </nav>
    </div>
  );
}
