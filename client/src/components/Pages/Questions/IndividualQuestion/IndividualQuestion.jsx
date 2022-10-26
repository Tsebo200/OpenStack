import React, { useEffect, useState } from "react";
import styles from "./IndividualQuestion.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import { Link, useParams } from "react-router-dom";
import { Answer } from "./UI/Answer/Answer";

import userProfileImage from "../../../../assets/profilePicture.jpg";
import { CommentList } from "./UI/ComentList/CommentList";
import { AnswerPortal } from "./UI/AnswerPortal/AnswerPortal";
import axios from "../../../../api/axios";
import moment from "moment";

export default function IndividualQuestion() {
  let params = useParams();

  const [QuestionDetails, setQuestionDetails] = useState(null);
  const [QuestionUserDetails, setQuestionUserDetails] = useState(null);
  const [QuestionTags, setQuestionTags] = useState([]);
  const [AnswersList, setAnswersList] = useState([]);

  const getQuestions = async () => {
    const response = await axios.get("/question", {
      params: { questionId: params.questionId },
    });
    setQuestionDetails(response.data.findQuestion);
    setQuestionUserDetails(response.data.userData);
  };

  const getAnswers = async () => {
    const response = await axios.get("/get-answers", {
      params: { questionId: params.questionId },
    });
    setAnswersList(response.data);
  };

  const getTags = async (tags) => {
    const response = await axios.post("/unique-tags", {
      UniqueTagsList: tags,
    });
    setQuestionTags(response.data);
  };

  useEffect(() => {
    getQuestions();
    getAnswers();
    getTags(QuestionDetails?.tags);
  }, []);

  const convertTimeCreated = (timeCreated) => {
    // https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/07-difference/#:~:text=To%20get%20the%20difference%20in,you%20would%20use%20moment%23from%20.&text=To%20get%20the%20difference%20in%20another%20unit%20of%20measurement%2C%20pass,measurement%20as%20the%20second%20argument.&text=To%20get%20the%20duration%20of,an%20argument%20into%20moment%23duration%20.

    let displayTime = moment()
      .subtract(2, "h")
      .diff(moment(timeCreated), "seconds");
    let displayTimeMessage = "Asked " + displayTime + " seconds ago";
    if (displayTime > 604800) {
      displayTimeMessage = moment(timeCreated).format("lll");
    } else if (displayTime / (3600 * 24) > 2) {
      displayTimeMessage =
        "Asked " + Math.floor(displayTime / (3600 * 24)) + " days ago";
    } else if (displayTime / (3600 * 24) > 1) {
      displayTimeMessage =
        "Asked " + Math.floor(displayTime / (3600 * 24)) + " day ago";
    } else if (displayTime / 3600 > 2) {
      displayTimeMessage =
        "Asked " + Math.round(displayTime / 3600) + " hours ago";
    } else if (displayTime / 3600 > 1) {
      displayTimeMessage =
        "Asked " + Math.round(displayTime / 3600) + " hour ago";
    } else if (displayTime / 60 > 2) {
      displayTimeMessage =
        "Asked " + Math.round(displayTime / 60) + " minuets ago";
    } else if (displayTime / 60 > 1) {
      displayTimeMessage =
        "Asked " + Math.round(displayTime / 60) + " minuet ago";
    }
    return displayTimeMessage;
  };

  return (
    <div className={styles.container}>
      {QuestionDetails ? (
        <>
          <header>
            <div className={styles.header_main}>
              <h2>{QuestionDetails.title}</h2>
              <Link to="/questions-portal">Ask Question</Link>
            </div>
            <div className={styles.question_activity_header}>
              <p>{convertTimeCreated(QuestionDetails?.questionCreated)}</p>
              {/* <p>Modified 1 month ago</p> */}
            </div>
          </header>
          <div className={styles.question_container}>
            <div className={styles.voting}>
              <ion-icon name="chevron-up-outline"></ion-icon>
              <h3>{QuestionDetails?.questionInteraction?.votes}</h3>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            <div className={styles.question_content}>
              <h5>{QuestionDetails.body}</h5>
              <SyntaxHighlighter
                language={QuestionDetails?.code?.codeLanguage}
                children={true}
                wrapLines={true}
                // style={a11yLight}
                showLineNumbers={true}
              >
                {QuestionDetails?.code?.codeBody}
              </SyntaxHighlighter>
              <div className={styles.tag_list}>
                {QuestionTags.map((tag) => {
                  return <Link key={tag._id}>{tag.tagName}</Link>;
                })}
              </div>
              <div className={styles.question_user_details_container}>
                <p className={styles.report_question}>report question</p>
                <div className={styles.user_details}>
                  <h6>
                    Asked{" "}
                    {moment(QuestionDetails?.questionCreated).format("lll")}
                  </h6>
                  <div className={styles.user_card}>
                    <img src={userProfileImage} />
                    <div>
                      <p>{QuestionUserDetails.username}</p>
                      <h6>user score {QuestionUserDetails.userScore} </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <CommentList/> */}
            </div>
          </div>
          <br></br>
          <div>
            <h3>
              {AnswersList?.findAnswers.length}{" "}
              {AnswersList?.findAnswers.length === 1 ? <>Answer</> : <>Answers</>}{" "}
            </h3>
            {/* <p>Sorted by:</p> */}
          </div>
          {AnswersList?.findAnswers.length > 0 &&
            AnswersList?.findAnswers.map((answer) => {
              return <Answer userRefList={AnswersList?.userDataCompressed} key={answer._id} answer={answer} />;
            })}

          <AnswerPortal
            tag={QuestionDetails?.code.codeLanguage}
            questionId={params.questionId}
            getAnswers={getAnswers}
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </>
      ) : (
        <></>
      )}
    </div>
    // <div className={styles.container}>
    //     <div className={styles.pageContent}>
    //         <h1>How do you write HTML?</h1>
    //         <h4>First Year Question</h4>
    //         <br />
    //         <hr />
    //         <div className={styles.flexCon}>
    //             <div className={styles.flex}>
    //                 <ion-icon name="eye"></ion-icon><h4>34</h4>
    //             </div>
    //             <div className={styles.flex}>
    //             <ion-icon name="trending-up"></ion-icon><h4>34</h4>
    //             </div>
    //             <div className={styles.flex}>
    //             <ion-icon name="trending-down"></ion-icon><h4>34</h4>
    //             </div>
    //             <div className={styles.flex}>
    //                 <ion-icon name="chatbubbles"></ion-icon><h4>34</h4>
    //             </div>
    //             <div className={styles.flex}>
    //             <ion-icon name="close-circle"></ion-icon><h4>3</h4>
    //             <ion-icon name="arrow-dropup"></ion-icon>
    //             </div>
    //             <div className={`${styles.flex} ${styles.report}`}>
    //             <Button type="report" text='Report Question'/>
    //             </div>

    //         </div>
    //         <p>How do you write some html code? The reason I am asking this question because I have no idea how to write some html code so that I can create the coolest of apps. Here is some example code I am including</p>

    //         <SyntaxHighlighter className={styles.code} language="javascript" children={true}>
    //             {exampleCode}
    //         </SyntaxHighlighter>
    //         <br />
    //         <hr />
    //         <br />
    //         <h4 className={styles.userInfo}>Answered: 13 August 2022 by JellyBeans</h4>
    //         <br />
    //         <div className={styles.correct}>Correct Answer</div>
    //         <div className={styles.flexCon}>
    //         <div className={styles.flex}>
    //         <ion-icon name="trending-up" size="large"></ion-icon><h4>34</h4>
    //         </div>
    //         <div className={styles.flex}>
    //         <ion-icon name="trending-down" size="large"></ion-icon><h4>34</h4>
    //         </div>
    //         <div className={styles.flex}>
    //             <ion-icon name="chatbubbles" size="large"></ion-icon><h4>34</h4>
    //         </div>
    //         <div className={styles.flex}>
    //         <ion-icon name="close-circle" size="large"></ion-icon><h4>3</h4>
    //         </div>
    //         </div>
    //         <p>How do you write some html code? The reason I am asking this question because I have no idea how to write some html code so that I can create the coolest of apps. Here is some example code I am including</p>
    //         <Button type="report" text='Report Answer'/>
    //         <SyntaxHighlighter className={styles.code} language="javascript" children={true}>
    //                {exampleCode}
    //         </SyntaxHighlighter>
    //         <br />
    //         <hr />
    //         <label htmlFor="body">Body</label>
    //         <textarea className={styles.body} name="codeBlock"></textarea>
    //         <label htmlFor="code">Code</label>
    //         <textarea className={styles.body} name="codeBlock"></textarea>
    //         <Button type="questionSubmit" text="Submit Answer"/>

    //     </div>
    //     <ion-icon name="airplane"></ion-icon>

    // </div>
  );
}
