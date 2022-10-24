import React, { useState } from "react";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import styles from "./TextCarousel.module.scss";

export default function TextCarousel(props) {
 
  return (
    <div className={styles.container}>
      <nav>
        {props.links.map((i) => (
          <a
            onClick={() => props.setTab(i)}
            className={props.selectedTab === i ? styles.selected : null}
          >
            {i}
          </a>
        ))}
      </nav>
    </div>
  );
}
