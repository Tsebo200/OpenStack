import React, { useEffect, useState } from "react";

import axios from "../../../api/axios";

import styles from "./LandingPage.module.scss";
import { QuestionCard } from "../Questions/QuestionsLanding/UI/QuestionCard/QuestionCard";
// import QuestionCard from "../../ResultsQuestions/ResultsQuestions"

import knowledgeIMG from "../../../assets/knowledgeIMG.svg";
import { Link } from "react-router-dom";

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
          UniqueUsersList: UniqueUsersList,
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
    <div className={styles.row}>
      <div className={styles.joinCon}>
        <div>
          <h2>OpenStack</h2>
          <h3>
            Are you new here? <br /> Join the community and share in the wealth
            of knowledge
          </h3>
          <Link to={"/register"}>Sign Up</Link>
        </div>

        <img className={styles.imgCon} src={knowledgeIMG} />
      </div>
      <div className={styles.video_card}>
        <div>
          <h3>How to Register Your account</h3>
          <br></br>
          <h4>Watch this video to get to grips on how to register your account</h4>
        </div>
        <iframe src="https://www.youtube.com/embed/A1Ep3DR204g"></iframe>
      </div>
      {/* <div className={styles.video_card}>
        <div>
          <h3>The score Eco System</h3>
          <br></br>
          <h4>Watch this video to get to grips on how to ask a question</h4>
        </div>
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
      </div> */}
      <br />
      <h3>Most recent questions</h3>
      <br />
      <br />
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
  );
};
