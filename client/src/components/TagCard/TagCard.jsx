import React, {useState} from 'react'
import styles from './TagCard.module.scss';
import html from '../../assets/html.svg';

export default function TagCard() {

  const [selected, setSelected] = useState(false);

  const chooseTag = e => {
    setSelected(current => !current);
  }

  return (
    <div className={selected ? styles.selected : styles.container} onClick={chooseTag}>
        <img src={html} width={40}/>
    </div>
  )
}
