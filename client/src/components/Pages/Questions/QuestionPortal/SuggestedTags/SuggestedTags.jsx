import React from 'react';
import styles from './SuggestedTags.module.scss';
import axios from '../../../../../api/axios';
import { useState, useEffect } from 'react';

export default function SuggestedTags(props) {

  const [tagList, setTagList] = useState([]);

  const getTags = async () => {
    const response = await axios.get("/api/all-tags");
    console.log(response);
    setTagList(response.data);
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.tagCon}>
        <p className={styles.tagName}>{props.tagName}</p>
      </div>
    </div>
  )
}
