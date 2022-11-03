import React from "react";

import styles from "./Modal.module.scss";

export const Modal = (props) => {
    console.log(props.ModalSettings);
  return (
    <>
      <div className={styles.modal_background}></div>
      <div className={styles.modal_container}>
        <div onClick={props.closeModalHandler} className={styles.close_btn}>
          <ion-icon name="close-outline"></ion-icon>
        </div>
        {props.ModalSettings.html}
      </div>
    </>
  );
};
