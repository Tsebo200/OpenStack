import React, { useEffect, useState } from "react";
import TextCarousel from "./UI/TextCarousel/TextCarousel";
import styles from "./AdminPage.module.scss";
import { UsersList } from "./UI/Pages/UsersList/UsersList";
import { Tags } from "./UI/Pages/Tags/Tags";
import { QuestionList } from "./UI/Pages/ReportedQuestions/QuestionList";
import { Outlet, Router } from "react-router-dom";

export default function AdminPage() {
  const [tab, setTab] = useState("All users");
  
  let arr = [
    { to: "/admin", title: "All users" },
    { to: "/admin/question-list", title: "All Questions" },
    { to: "/admin/all-answers", title: "All Answers" },
    { to: "/admin/tags", title: "Tag Management" },
  ];

  return (
    <>
      <div className={`${styles.container} ${styles.row}`}>
        <h1>Admin Options</h1>
        <TextCarousel links={arr} setTab={setTab} selectedTab={tab} />
        <Outlet />
      </div>
    </>
  );
}
