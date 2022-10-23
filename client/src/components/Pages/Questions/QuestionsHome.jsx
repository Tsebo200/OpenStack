import React from 'react'
import { Outlet } from 'react-router-dom'
import { SubHeader } from './SubHeader/SubHeader'
import styles from "./QuestionsHome.module.scss";

export const QuestionsHome = () => {
  return (
    <div className={`${styles.main} ${styles.row}`}>
        <SubHeader/>
        <Outlet/>
    </div>
  )
}
