import React from 'react'
import Input from '../../Input/Input'

import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';
import { ResultsQuestions } from '../../ResultsQuestions/ResultsQuestions';
import { SideQuestions } from '../../SideQuestions/SideQuestions';

import styles from './ResultsPage.module.scss'

export const ResultsPage = () => {
  return (
    <>
      {/* <Header/> */}
        <div className={styles.results_page}>
         
          <div className={styles.titleCon}>
            <h3 className={styles.title}>Questions related to: </h3>
            <h3 className={styles.title}>Pythin vs c#</h3>
            <br/>
            <br/>
            <p className={styles.results}>31 </p>
            <p className={styles.results}> results</p>
            
          </div>
          <SideQuestions/>
          <ResultsQuestions/>
          <ResultsQuestions/>
          <ResultsQuestions/>
          
        </div>
      <Footer/>
    </>
    
  )
}