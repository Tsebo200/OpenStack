import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../../api/axios'

import styles from './SearchForm.module.scss'

export const SearchForm = () => {

    const [SearchTerm, setSearchTerm] = useState("")

    const [QuestionList, setQuestionList] = useState([]);

    const [UniqueTagsList, setUniqueTagsList] = useState([]);
    const [TagDetailsList, setTagDetailsList] = useState([]);
  
    const [UniqueUsersList, setUniqueUsersList] = useState([]);
    const [UserDetailsList, setUserDetailsList] = useState([]);

    const navigate = useNavigate();
  

    const onChangeSearchTermHandler = (event) => {
        setSearchTerm(event.target.value)
    } 

    const searchForQuestionHandler = (event) => {
        event.preventDefault()
        // console.log("search server for " + SearchTerm);

        let isMounted = true;
        const controller = new AbortController();
        const getAllQuestions = async () => {
          try {
            const response = await axios.get("/all-questions-search", {
              signal: controller.signal,
              params: {search: SearchTerm}
            });
            navigate('/questions/searchQuestion/');
          } catch (err) {
            console.log(err);
          }
        };
    
        getAllQuestions();
        return () => {
          isMounted = false;
          controller.abort();
        };
    }

    useEffect(() => {

    }, []);

    return (
        <form onSubmit={searchForQuestionHandler} className={styles.search_from}>
            <span onClick={searchForQuestionHandler} className={styles.search_from_icon}><ion-icon name="search"></ion-icon></span>
            <input value={SearchTerm} onChange={onChangeSearchTermHandler} placeholder='Search...' />
            <div className={styles.searchResult}>
                
            </div>
        </form>
    )
}
