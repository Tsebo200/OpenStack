import React, { useState } from "react";
import TagCard from "../../TagCard/TagCard";
import styles from "./TagsList.module.scss";
import axios from "../../../api/axios";
import { useEffect } from "react";
import Input from "../../Input/Input";
import { useNavigate } from "react-router-dom";

export default function TagsList() {
  const [tagList, setTagList] = useState([]);
  const [searchTag, setSearchTag] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const getTags = async () => {
    const response = await axios.get("/api/all-tags");
    console.log(response);
    setTagList(response.data);
  };

  console.log(tagList);

  useEffect(() => {
    getTags();
  }, []);

  const searchForTagHandler = async (e) => {
    e.preventDefault();
    setSearchTerm(e.target.innerText);
    console.log(e);
    if(searchTerm !== ""){
      navigate("/questions/" + searchTerm);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
        <h1>Our Tags</h1>
        <h4>
          Here are a list of our tags, click to search for questions with these
          tags
        </h4>
        <br />
        <br />
        <form onSubmit={searchForTagHandler}>
          <Input
            type="questionInput"
            placeholder={"Search Tags..."}
            onChange={(e) => {
              setSearchTag(e.target.value.toUpperCase());
            }}
          />
        </form>
        <br />
        <div className={styles.cardCon}>
          {tagList
            .filter((i) => {
              if (searchTag == "") {
                return i.tagName;
              } else if (i.tagName.includes(searchTag.toUpperCase())) {
                return i.tagName;
              }
            })
            .map((tag) => (
              <TagCard tagName={tag.tagName} onClick={searchForTagHandler}/>
            ))}
        </div>
      </div>
    </div>
  );
}
