import React, { useState } from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import TextCarousel from "./UI/TextCarousel/TextCarousel";
import styles from "./AdminPage.module.scss";
import { UsersList } from "./UI/UsersList/UsersList";
import { Tags } from "./UI/Tags/Tags";

export default function AdminPage() {
  const [tab, setTab] = useState("All users");

  let arr = [
    "All users",
    "Reported Questions",
    "Userprofile Pictures",
    "Tags",
  ];

  return (
    <>
      <div className={`${styles.container} ${styles.row}`}>
        <h1>Admin Options</h1>
        {/* <h2>Overview</h2> */}
        <div className={styles.pageContent}>
          <TextCarousel links={arr} setTab={setTab} selectedTab={tab}/>
          {tab === "All users" && <UsersList/>}
          {tab === "Tags" && <Tags/>}
        </div>
      </div>
    </>
  );
}
