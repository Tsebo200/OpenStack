import React from 'react'

import styles from './Header.module.scss'
import openStackLogo from '../../assets/OpenStackLogo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { SearchForm } from './UI/SearchForm'

export const Header = () => {

  // const [first, setfirst] = useState(second)
  return (
    <header className={styles.header}>
      <nav  className={styles.header_nav}>
        <img className={`${styles.logo}`} src={openStackLogo}/>
        <Link to="/about">About</Link>
        <Link to="/teams">Teams</Link>
        <SearchForm/>
        <a className={styles.login}>Login</a>
        {/* <Link  to="/login">Login</Link> */}
      </nav>
    </header>
  )
}
