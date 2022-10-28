import React, { useEffect, useState } from "react";

import axios from "../../../api/axios";

import styles from "./LandingPage.module.scss";
import {QuestionCard} from "../Questions/QuestionsLanding/UI/QuestionCard/QuestionCard"
// import QuestionCard from "../../ResultsQuestions/ResultsQuestions"

import knowledgeIMG from "../../../assets/knowledgeIMG.svg"

export const LandingPage = () => {

  const [QuestionList, setQuestionList] = useState([]);

  const [UniqueTagsList, setUniqueTagsList] = useState([]);
  const [TagDetailsList, setTagDetailsList] = useState([]);

  const [UniqueUsersList, setUniqueUsersList] = useState([]);
  const [UserDetailsList, setUserDetailsList] = useState([]);

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getAllQuestions = async () => {
      try {
        const response = await axios.get("/api/all-questions", {
          signal: controller.signal,
        });
        // console.log(response.data);
        isMounted && setQuestionList(response.data);

        // create unique requests
        // create unique tags
        // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
        let allTags = [];
        response.data.map((question) => {
          question.tags.map((tag) => {
            allTags.push(tag);
          });
        });
        setUniqueTagsList(allTags.filter(onlyUnique));

        let allUsers = response.data.map((question) => {
          return question.userId;
        });
        setUniqueUsersList(allUsers.filter(onlyUnique));
      } catch (err) {
        console.log(err);
      }
    };

    getAllQuestions();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getAllTags = async () => {
      try {
        const response = await axios.post("/unique-tags", {
          signal: controller.signal,
          UniqueTagsList: UniqueTagsList,
        });
        isMounted && setTagDetailsList(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllTags();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [UniqueTagsList]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getAllTags = async () => {
      try {
        const response = await axios.post("/unique-users", {
          signal: controller.signal,
          UniqueUsersList: UniqueUsersList
        });
        isMounted && setUserDetailsList(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllTags();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [UniqueUsersList]);

  // sorting will need to be done server side

  return (
    <>
  

      <div className={styles.joinCon}>
        <img className={styles.imgCon} src={knowledgeIMG}/>
        <h2 className={styles.textCon}>Join the Open Stack  comunity!</h2>
        <h3 className={styles.textCon}>New to Open Stack? <br/> Join the community and share in the wealth of knowledge</h3>
        <a href="/register" className={styles.joinBTN}><h4>Sign up</h4></a>
      </div>
        
        {/* <QuestionCard /> */}

        <div className={styles.questionHolder}>
          <h2>Most recent questions</h2>
          <br/>
          <br/>
          {QuestionList.slice(0, 5).map((question) => {
            return (
              <QuestionCard
                key={question._id}
                TagDetailsList={TagDetailsList}
                UserDetailsList={UserDetailsList}
                questionDetails={question}
              />
              );
          })}
        </div>
    </>
  );
};
