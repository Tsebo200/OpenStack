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
import { useAuth } from "../../../../Hooks/useAuth";
import { LoadingScreen } from "../../../UI/LoadingScreen/LoadingScreen";

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

export default function IndividualQuestion() {
  let params = useParams();
  const { Auth } = useAuth();

  const [QuestionData, setQuestionData] = useState(null);
  const [GetQuestionData, setGetQuestionData] = useState(true);
  const [userHasVoted, setUserHasVoted] = useState({});

  const [ModalOptions, setModalOptions] = useState({
    show: false,
    message: "",
    modal_box_css: styles.modal_box,
  });

  const closeModalHandler = () => {
    setModalOptions({
      show: false,
      message: "",
      modal_box_css: styles.modal_box,
    });
  };

  const getQuestion = async (questionId) => {
    setGetQuestionData(true);
    const response = await axios.get("/question", {
      params: { questionId: questionId },
    });
    setQuestionData(response.data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getQuestion(params.questionId);
      setGetQuestionData(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [GetQuestionData]);

  const voteHandler = async (action) => {
    try {
      const response = await axios.patch("/question-vote", {
        userId: Auth?.userData?.UserInfo?.userId,
        action: action,
        questionId: params.questionId,
      });
      if (response.status === 209) {
        setModalOptions({
          show: true,
          message: response.data,
          modal_box_css: `${styles.modal_box} ${styles.modal_box_show}`,
        });
        return;
      } else if (response.status === 200) {
        setGetQuestionData(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeAnswerHandler = async (answerId) => {
    try {
      const response = await axios.delete("/answer", {
        params: { answerId: answerId, questionId: params.questionId },
      });
      setGetQuestionData(true);
    } catch (error) {
      console.log(error);
    }
    return;
  };

  useEffect(() => {
    if (QuestionData?.Question?.questionInteraction?.votes.length === 0) {
      setUserHasVoted({});
    }
    QuestionData?.Question?.questionInteraction?.votes.map((vote) => {
      if (vote.userId === Auth?.userData?.UserInfo?.userId) {
        setUserHasVoted({
          action: vote.action,
          voted: true,
        });
        return;
      } else {
        setUserHasVoted({});
        return;
      }
    });
  }, [QuestionData, GetQuestionData]);

  const answerVoteHandler = async (action, answerId) => {
    try {
      const response = await axios.patch("/answer-vote", {
        userId: Auth?.userData?.UserInfo?.userId,
        action: action,
        answerId: answerId,
      });
      if (response.status === 209) {
        setModalOptions({
          show: true,
          message: response.data,
          modal_box_css: `${styles.modal_box} ${styles.modal_box_show}`,
        });
        return;
      } else if (response.status === 200) {
        setGetQuestionData(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const correctAnswerHandler = async (answerId) => {
    try {
      const response = await axios.patch("/answer-set-correct", {
        answerId: answerId,
        questionId: params.questionId,
      });
      if (response.status === 209) {
        setModalOptions({
          show: true,
          message: response.data,
          modal_box_css: `${styles.modal_box} ${styles.modal_box_show}`,
        });
        return;
      } else if (response.status === 200) {
        setGetQuestionData(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isOwnedByUser =
    Auth?.userData?.UserInfo?.userId === QuestionData?.Question?.userId;

  console.log(isOwnedByUser);

  return (
    <div className={styles.container}>
      {GetQuestionData ? (
        <div className={styles.loader_container}>
          <LoadingScreen />
          <h3>Loading Question...</h3>
        </div>
      ) : (
        <>
          {ModalOptions.show && (
            <div onClick={closeModalHandler} className={styles.modal}></div>
          )}

          <div className={ModalOptions.modal_box_css}>
            <div className={styles.close_btn} onClick={closeModalHandler}>
              <ion-icon name="close-outline"></ion-icon>
            </div>
            <h3>Error</h3>
            <h4>{ModalOptions.message}</h4>
          </div>
          <header>
            <div className={styles.header_main}>
              <h2>{QuestionData?.Question?.title}</h2>
              <Link to="/questions-portal">Ask Question</Link>
            </div>
            <div className={styles.question_activity_header}>
              <p>
                {convertTimeCreated(QuestionData?.Question?.questionCreated)}
              </p>
            </div>
          </header>
          <div className={styles.question_container}>
            <div className={styles.voting}>
              <div
                className={
                  userHasVoted?.action && userHasVoted?.voted
                    ? styles.voted
                    : undefined
                }
              >
                <ion-icon
                  onClick={() => {
                    voteHandler(true);
                  }}
                  name="chevron-up-outline"
                ></ion-icon>
              </div>
              <h3>{QuestionData?.Question?.questionInteraction.voteScore}</h3>
              <div
                className={
                  !userHasVoted?.action && userHasVoted?.voted
                    ? styles.voted
                    : undefined
                }
              >
                <ion-icon
                  onClick={() => {
                    voteHandler(false);
                  }}
                  name="chevron-down-outline"
                ></ion-icon>
              </div>
            </div>
            <div className={styles.question_content}>
              <h5>{QuestionData?.Question?.body}</h5>
              <SyntaxHighlighter
                language={QuestionData?.Question?.code?.codeLanguage}
                children={true}
                wrapLines={true}
                showLineNumbers={true}
              >
                {QuestionData?.Question?.code?.codeBody}
              </SyntaxHighlighter>
              <div className={styles.tag_list}>
                {QuestionData?.Question?.tags.map((tag) => {
                  if (!tag.tombstone) {
                    return <Link key={tag._id}>{tag?.tagName}</Link>;
                  }
                  return (
                    <p key={tag._id} className={styles.tag_tombstone}>
                      {tag.tagName}
                    </p>
                  );
                })}
              </div>
              <div className={styles.question_user_details_container}>
                {Auth?.userData?.UserInfo?.userId ? (
                  <>
                    {!isOwnedByUser && (
                      <p className={styles.report_question}>Report answer</p>
                    )}
                    {isOwnedByUser && (
                      <p
                        // onClick={removeAnswerHandlerChild}
                        className={styles.report_question}
                      >
                        Delete answer
                      </p>
                    )}
                  </>
                ) : (
                  <p></p>
                )}
                <div className={styles.user_details}>
                  <h6>
                    Asked{" "}
                    {moment(QuestionData?.Question?.questionCreated).format(
                      "lll"
                    )}
                  </h6>
                  <div className={styles.user_card}>
                    <img src={userProfileImage} />
                    <div>
                      <p>{QuestionData?.userData?.username}</p>
                      <h6>user score {QuestionData?.userData?.userScore} </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div>
            <h3>
              {QuestionData?.Question?.answers.length}{" "}
              {QuestionData?.Question?.answers.length === 1 ? (
                <>Answer</>
              ) : (
                <>Answers</>
              )}{" "}
            </h3>
            <p>Sorted by:</p>
          </div>
          {QuestionData?.Question?.answers.length > 0 &&
            QuestionData?.Question?.answers.map((answer) => {
              return (
                <Answer
                  removeAnswerHandler={removeAnswerHandler}
                  key={answer._id}
                  language={QuestionData?.Question?.code?.codeLanguage}
                  answer={answer}
                  answerVoteHandler={answerVoteHandler}
                  correctAnswerHandler={correctAnswerHandler}
                  correctAnswer={
                    QuestionData?.Question?.questionInteraction?.correctAnswer
                  }
                />
              );
            })}

          <AnswerPortal
            tag={QuestionData?.Question?.code?.codeLanguage}
            questionId={params.questionId}
            getQuestion={getQuestion}
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </>
      )}
    </div>
  );
}
