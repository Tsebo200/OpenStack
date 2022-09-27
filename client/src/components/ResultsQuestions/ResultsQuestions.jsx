import React from 'react'

import styles from './ResultsQuestions.module.scss'
import eye from '../../assets/eye.svg'
import upArrow from '../../assets/upArrow.svg'
import downArrow from '../../assets/downArrow.svg'
import message from '../../assets/message.svg'
import duck from '../../assets/duck.webp'

export const ResultsQuestions = () => {

  return (
    <resultsquestions className={styles.mainCon}>
      <div className={styles.textCon}>
        <h3 className={styles.qtitle}>What is better Phyton or C#?</h3>
        <p className={styles.qdes}>Considering that I am just getting started in this field and that I want to use it for a project that involves smart objects, what would you suggest that I do in order to give myself the greatest possible chance of succeeding in this project?</p>
      </div>

      <div className={styles.userCon}>
        <img className={styles.userImg} src={duck}/>
        <p className={styles.username}>CrunchyMuffin</p>
        <p className={styles.askedDate}>asked: </p>
        <p className={styles.askedDate}>27 Sep 2022</p>
      </div>

      <div className={styles.textCon}>
        <div className={styles.infoCon}>
          <img className={styles.infoIcon} src={eye}/>
          <p className={styles.infoText}>265</p>
        </div>

        <div className={styles.infoCon}>
          <img className={styles.infoIcon} src={upArrow}/>
          <p className={styles.infoText}>12</p>
        </div>

        <div className={styles.infoCon}>
          <img className={styles.infoIcon} src={downArrow}/>
          <p className={styles.infoText}>5</p>
        </div>

        <div className={styles.infoCon}>
          <img className={styles.infoIcon} src={message}/>
          <p className={styles.infoText}>13</p>
        </div>
        
        <p className={styles.tagCon}>python</p>
        <p className={styles.tagCon}>c#</p>
        <p className={styles.tagCon}>help??</p>
      </div>

    </resultsquestions>
  )
}
