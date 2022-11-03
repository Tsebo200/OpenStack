import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TextCarousel.module.scss";

export default function TextCarousel(props) {
  // console.log(().split('/').to(-1));

  const url = window.location.href
  
  return (
    <div className={styles.container}>
      <nav>
        {props.links.map((i) => (
          <Link
            key={i.title}
            to={i.to}
            onClick={() => props.setTab(i.title)}
            className={props.selectedTab === i.title ? styles.selected : null}
          >
            {i.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
