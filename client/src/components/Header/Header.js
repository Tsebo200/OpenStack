import React from 'react'

import styles from './Header.module.scss'
import openStackLogo from '../../assests/OpenStackLogo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Header = () => {

  // const [first, setfirst] = useState(second)
  return (
    <header className={styles.header}>
      <div className={styles.header_nav_container}>
      <nav  className={styles.header_nav}>
        <img className={`${styles.logo}`} src={openStackLogo}/>
        <Link to="/about">About</Link>
        <Link to="/about">Teams</Link>
        <form>
          <span></span>
          <input placeholder='Search...'/>
        </form>
        <div>Search</div>
        <Link to="/about">Login</Link>
      </nav>
      </div>
    </header>
  )
}
