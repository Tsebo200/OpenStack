import React from 'react';
import styles from './Button.module.scss';

export default function Button(props) {
  return (
    <button
        id={props.id}
        brand={props.brand}
        className={`
        ${props.className ? props.classname : ""}
        ${props.type == "questionSubmit" ? styles.questionSubmit :
          props.type == "report" ? styles.report :
          styles.tersiary}
        `} 
        onBlur={props.onBlur}
        onClick={props.onClick}>
            {props.text}

    </button>
  )
}
