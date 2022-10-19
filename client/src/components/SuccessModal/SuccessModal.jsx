import React from 'react';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import Button from '../Button/Button';
import styles from './SuccessModal.module.scss';
import successImg from '../../assets/success.svg';

export default function SuccessModal(props) {

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <img src={successImg} width={200}/>
        <h2>Question Added!</h2>
        <div className={styles.btnCon}>
          <div className={styles.btnCon}>
          <Button text="OK" onClick={props.onClick}/>

          </div>
        </div>
      </div>
    </div>
  )
}
