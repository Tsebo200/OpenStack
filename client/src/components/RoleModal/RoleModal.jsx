import React from 'react';
import styles from './RoleModal.module.scss';
import { Button } from '../UI/Button/Button';

export default function RoleModal(props) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h2>Change Role</h2>
        <p>Select a role below</p>
        <div className={styles.btnCon}>
          <div className={styles.btnCon}>
          <Button children="OK" onClick={props.onClick}/>

          </div>
        </div>
      </div>
    </div>
  )
}
