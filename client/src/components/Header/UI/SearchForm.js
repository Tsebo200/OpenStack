import React from 'react'

import styles from './SearchForm.module.scss'

export const SearchForm = () => {
  return (
    <form className={styles.search_from}>
          <span className={styles.search_from_icon}><ion-icon name="search"></ion-icon></span>
          <input placeholder='Search...'/>
        </form>
  )
}
