import React, { useEffect, useState } from "react";
import { useRef } from "react";
import axios from "../../../../../api/axios";
import { Button } from "../../../../UI/Button/Button";
import { Input } from "../../../../UI/Input/Input";
import styles from "./Tags.module.scss";

export const Tags = () => {
  const [TagList, setTagList] = useState([]);

  const [TagName, setTagName] = useState("");

  const tagInputRef = useRef();

  const getTags = async () => {
    const response = await axios.get("/api/all-tags");
    // console.log(response);
    setTagList(response.data)
  }

  useEffect(() => {
    getTags()
  }, [])
  

  const addTagHandler = async (e) => {
    e.preventDefault()
    const response = await axios.post("/api/add-tag", {
      data: { tagName: TagName },
    });
    setTagName('')
    console.log(response);
    getTags()
  };

  const removeTagHandler = async () =>{
    const response = await axios.post("/api/add-tag", {
        data: { tagName: TagName },
      });
      console.log(response);
      getTags()
  }

  return (
    <div className={styles.tags_container}>
      <ul>
      {TagList.map(tag => {
        return (<li key={tag._id}>{tag.tagName} <a onClick={removeTagHandler}>Remove</a></li>)
      })}
      </ul>
      <form autoComplete="off" onSubmit={addTagHandler}>
        <h3>Add new tag</h3>
        <Input
        label="Tag name"
        type="text"
        id="tag-name"
        ref={tagInputRef}
        onChange={(e) => setTagName(e.target.value)}
        value={TagName}
        required={true}
        valid={true}
      />
        <br></br>
        <Button>Add Tag</Button>
      </form>
      {/* <table className={styles.user_table}>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table> */}
    </div>
  );
};
