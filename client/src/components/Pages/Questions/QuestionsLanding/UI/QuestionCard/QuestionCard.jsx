import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import styles from "./QuestionCard.module.scss";

export const QuestionCard = (props) => {
  const question = props.questionDetails;
  const tagReferenceList = props.TagDetailsList;

  const UserDetailsReferenceList = props.UserDetailsList;
  const formattedSentence = (sentence) => {
    let newSentence = sentence
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.toLowerCase().substring(1);
      })
      .join(" ");
    return newSentence;
  };

  const formateQuestionText = (text) => {
    return text.slice(0, 190) + "...";
  };

  const convertTimeCreated = () => {
    // https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/07-difference/#:~:text=To%20get%20the%20difference%20in,you%20would%20use%20moment%23from%20.&text=To%20get%20the%20difference%20in%20another%20unit%20of%20measurement%2C%20pass,measurement%20as%20the%20second%20argument.&text=To%20get%20the%20duration%20of,an%20argument%20into%20moment%23duration%20.

    let displayTime = moment().diff(
      moment(question.questionCreated),
      "seconds"
    );
    let displayTimeMessage = "asked " + displayTime + " seconds ago";
    if (displayTime > 604800) {
      displayTimeMessage = moment(question.questionCreated).format("lll");
    } else if (displayTime / (3600 * 24) > 2) {
      displayTimeMessage =
        "asked " + Math.round(displayTime / (3600 * 24)) + " days ago";
    } else if (displayTime / (3600 * 24) > 1) {
      displayTimeMessage =
        "asked " + Math.round(displayTime / (3600 * 24)) + " day ago";
    } else if (displayTime / 3600 > 2) {
      displayTimeMessage =
        "asked " + Math.round(displayTime / 3600) + " hours ago";
    } else if (displayTime / 3600 > 1) {
      displayTimeMessage =
        "asked " + Math.round(displayTime / 3600) + " hour ago";
    } else if (displayTime / 60 > 2) {
      displayTimeMessage =
        "asked " + Math.round(displayTime / 60) + " minuets ago";
    } else if (displayTime / 60 > 1) {
      displayTimeMessage =
        "asked " + Math.round(displayTime / 60) + " minuet ago";
    }
    return displayTimeMessage;
  };
  let answerState = (
    <div className={`${styles.question_interaction_child}`}>
      <p>{question.questionInteraction?.answers | 0} answers</p>
    </div>
  );
  if (question.questionInteraction.correctAnswer) {
    answerState = (
      <div
        className={`${styles.question_interaction_child} ${styles.answer_true}`}
      >
        <ion-icon name="checkmark-done-outline"></ion-icon>
        <p>{question.questionInteraction?.answers | 0} answers</p>
      </div>
    );
  } else if (question.questionInteraction.answers > 0) {
    answerState = (
      <div className={`${styles.question_interaction_child}`}>
        <ion-icon name="checkmark-done-outline"></ion-icon>
        <p>{question.questionInteraction?.answers | 0} answers</p>
      </div>
    );
  }

  useEffect(() => {
    const user = UserDetailsReferenceList.filter((i) => {
      return i.userId === question.userId;
    });
  }, []);

  return (
    <div className={styles.question}>
      <div className={styles.question_interaction}>
        {answerState}
        <div className={styles.question_interaction_child}>
          <p>{question.questionInteraction?.votes | 0} votes</p>
        </div>
      </div>
      <div className={styles.question_details}>
        <Link to={`/questions/individual/${question._id}`}>
          <h4>{formattedSentence(question.title)}</h4>
        </Link>
        <p>{formateQuestionText(question.body)}</p>
        <div className={styles.tag_list}>
          {question.tags.map((tag) => {
            const tagDetails = tagReferenceList.filter((i) => {
              return i._id === tag;
            });
            if (!tagDetails[0]?.tombstone) {
              return <Link>{tagDetails[0]?.tagName}</Link>;
            }
            return (
              <p className={styles.tag_tombstone}>{tagDetails[0]?.tagName}</p>
            );
          })}
        </div>
      </div>

      <div className={styles.user_details}>
        {/* <img src={question.userDetails.userprofilePicture} /> */}
        {UserDetailsReferenceList.filter((i) => {
          return i.userId === question.userId;
        }).map((userDetails) => {
          return (
            <>
              <Link>{userDetails?.username}</Link>
              <p className={styles.user_details_score}>
                {userDetails?.userScore}
              </p>
            </>
          );
        })}
        <p>{convertTimeCreated()}</p>
      </div>
    </div>
  );
};
