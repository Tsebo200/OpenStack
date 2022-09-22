import React from 'react'
import { useState } from 'react'

import styles from './SearchForm.module.scss'

export const SearchForm = () => {

    const [SearchTerm, setSearchTerm] = useState("")

    const onChangeSearchTermHandler = (event) => {
        setSearchTerm(event.target.value)
    } 

    const searchForQuestionHandler = (event) => {
        event.preventDefault()
        console.log("search server for " + SearchTerm);
    }

    return (
        <form onSubmit={searchForQuestionHandler} className={styles.search_from}>
            <span onClick={searchForQuestionHandler} className={styles.search_from_icon}><ion-icon name="search"></ion-icon></span>
            <input value={SearchTerm} onChange={onChangeSearchTermHandler} placeholder='Search...' />
        </form>
    )
}
