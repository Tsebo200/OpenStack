import React from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import TextCarousel from "./UI/TextCarousel/TextCarousel";
import styles from "./AdminPage.module.scss";
import { UsersList } from "./UI/UsersList/UsersList";
import { Tags } from "./UI/Tags/Tags";

export default function AdminPage() {
  return (
    <>
      <div className={`${styles.container} ${styles.row}`}>
        <h1>Admin Options</h1>
        {/* <h2>Overview</h2> */}
        <div className={styles.pageContent}>
          <TextCarousel />
          {/* <UsersList /> */}
          <Tags/>
        </div>
      </div>
    </>
  );
}
