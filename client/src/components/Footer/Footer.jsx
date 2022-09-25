import React from 'react'

import styles from './Footer.module.scss'
import openStackLogo from '../../assets/OpenStackLogo-white.svg'
import facebook from '../../assets/Facebook.svg'
import twitter from '../../assets/Twitter.svg'
import instagram from '../../assets/Instagram.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export const Footer = () => {

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
    <footer className={styles.footer}>
      <nav  className={styles.footer_nav}>
        <img className={`${styles.logo}`} src={openStackLogo}/>
        <Link to="/about">About</Link>
        <Link to="/teams">Teams</Link>
        
        <div className={styles.mediaContaier}>
          <a className={styles.mediaLink} href="https://www.facebook.com/theopenwindow/"><img className={`${styles.media}`} src={facebook}/></a>
          <a className={styles.mediaLink} href="https://mobile.twitter.com/open_window_"><img className={`${styles.media}`} src={twitter}/></a>
          <a className={styles.mediaLink} href="https://www.instagram.com/openwindowinstitute/"><img className={`${styles.media}`} src={instagram}/></a>
        </div>
        
      </nav>
      <div onClick={showLoginHandler} className={LoginContainerBackgroundCss}></div>
    </footer>
  )
}
