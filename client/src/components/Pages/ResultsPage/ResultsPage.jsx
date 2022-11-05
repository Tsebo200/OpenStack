import React, { useEffect, useState } from "react";

import styles from "./ResultsPage.module.scss";
import { Link, useParams } from "react-router-dom";
import { QuestionCard } from "../Questions/QuestionsLanding/UI/QuestionCard/QuestionCard";
import axios from "../../../api/axios";

export const ResultsPage = () => {
  let params = useParams();

  const [UniqueTagsList, setUniqueTagsList] = useState([]);
  const [TagDetailsList, setTagDetailsList] = useState([]);

  const [UniqueUsersList, setUniqueUsersList] = useState([]);
  const [UserDetailsList, setUserDetailsList] = useState([]);

  console.log(params.searchTerm);

  const [QuestionList, setQuestionList] = useState([]);

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getAllQuestions = async () => {
      try {
        const response = await axios.get("/all-questions-search", {
          signal: controller.signal,
          params:{ search: params.searchTerm }
        });
        isMounted && setQuestionList(response.data);
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
  }, [params.searchTerm])

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
  


  return (
    <div className={styles.questions_list}>
    <header>
      <h2>Searched for: {params.searchTerm}</h2>
      <Link to="/questions-portal">Ask Question</Link>
    </header>
    <div className={styles.questions_filter_header}>
      <h4>{QuestionList.length} Questions</h4>
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
        console.log(question);
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
