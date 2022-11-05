import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../../api/axios'

import styles from './SearchForm.module.scss'

export const SearchForm = () => {

    const [SearchTerm, setSearchTerm] = useState("")

    const navigate = useNavigate();
  

    const onChangeSearchTermHandler = (event) => {
        setSearchTerm(event.target.value)
    } 

    const searchForQuestionHandler = (event) => {
      event.preventDefault()
      setSearchTerm('')
      navigate('/questions/' + SearchTerm);  
    }

    return (
        <form onSubmit={searchForQuestionHandler} className={styles.search_from}>
            <span onClick={searchForQuestionHandler} className={styles.search_from_icon}><ion-icon name="search"></ion-icon></span>
            <input value={SearchTerm} onChange={onChangeSearchTermHandler} placeholder='Search...' />
            <div className={styles.searchResult}>
                
            </div>
        </form>
    )
}
