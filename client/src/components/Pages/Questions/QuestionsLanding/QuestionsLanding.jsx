import axios from "../../../../api/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../UI/Button/Button";

import styles from "./QuestionsLanding.module.scss";

import userprofilePicture from "../../../../assets/profilePicture.jpg";
import { QuestionCard } from "./UI/QuestionCard/QuestionCard";

export const QuestionsLanding = () => {
  // get all questions
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
    <div className={styles.questions_list}>
      <header>
        <h2>All Questions</h2>
        <Link to="/questions-portal">Ask Question</Link>
      </header>
      <div className={styles.questions_filter_header}>
        <h4>20,003,103 questions</h4>
        <table>
          <thead>
            <tr>
              <th>
                <a>Newest</a>
              </th>
              <th>
                <a>Unanswered</a>
              </th>
              <th>
                <a>No Accepted Answer</a>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      {QuestionList.length > 0 ? (
        QuestionList.map((question) => {
          return (
            <QuestionCard
              key={question._id}
              TagDetailsList={TagDetailsList}
              UserDetailsList={UserDetailsList}
              questionDetails={question}
            />
          );
        })
      ) : (<></>)}
    </div>
  );
};
