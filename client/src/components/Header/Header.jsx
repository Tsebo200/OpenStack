import React from 'react'

import styles from './Header.module.scss'
import openStackLogo from '../../assets/OpenStackLogo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { SearchForm } from './UI/SearchForm'
import { Login } from '../Pages/Login/Login'

export const Header = () => {

  const [LoginContainerCss, setLoginContainerCss] = useState(`${styles.login_container}`)
  const [LoginContainerBackgroundCss, setLoginContainerBackgroundCss] = useState(`${styles.login_container_background}`)

  const showLoginHandler = () => {
    console.log("Awdawd");
    console.log(LoginContainerCss === `${styles.login_container} ${styles.show_login}`);
    if (LoginContainerCss === `${styles.login_container} ${styles.show_login}`) {
      setLoginContainerCss(`${styles.login_container}`)
      setLoginContainerBackgroundCss(`${styles.login_container_background}`)
    } else {
      console.log("login");
      setLoginContainerCss(`${styles.login_container} ${styles.show_login}`)
      setLoginContainerBackgroundCss(`${styles.login_container_background} ${styles.show_login}`)
    }
  }
  return (
    <header className={styles.header}>
      <nav  className={styles.header_nav}>
        <img className={`${styles.logo}`} src={openStackLogo}/>
        <Link to="/about">About</Link>
        <Link to="/teams">Teams</Link>
        <SearchForm/>
        <a className={styles.login} onClick={showLoginHandler}>Login</a>
        {/* <Link  to="/login">Login</Link> */}
      </nav>
      <div onClick={showLoginHandler} className={LoginContainerBackgroundCss}></div>
      <div className={LoginContainerCss}>
        <Login/>
      </div>
    </header>
  )
}
