import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from './Main.module.scss'

export const Main = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};
