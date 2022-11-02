import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import axios from "../../../../../../api/axios";
import userProfileImage from "../../../../../../assets/profilePicture.jpg";
import { useAuth } from "../../../../../../Hooks/useAuth";
import styles from "./Answer.module.scss";

export const Answer = (props) => {
  const answer = props.answer;

  const { Auth } = useAuth();

  const isOwnedByUser = Auth?.userData?.UserInfo?.userId === answer.user.id;

  const removeAnswerHandlerChild = async () => {
    props.removeAnswerHandler(answer._id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.question_container}>
        <div className={styles.voting}>
          <ion-icon name="chevron-up-outline"></ion-icon>
          <h3>{answer.votes}</h3>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <div className={styles.question_content}>
          <h5>{answer.body}</h5>
          <SyntaxHighlighter
            language={props.language}
            children={true}
            wrapLines={true}
            showLineNumbers={true}
          >
            {answer.code}
          </SyntaxHighlighter>
          <br />
          <div className={styles.question_user_details_container}>
            {Auth?.userData?.UserInfo?.userId ? (
              (!isOwnedByUser && (
                <p className={styles.report_question}>Report answer</p>
              ),
              isOwnedByUser && (
                <p
                  onClick={removeAnswerHandlerChild}
                  className={styles.report_question}
                >
                  Delete answer
                </p>
              ))
            ) : (
              <p></p>
            )}

            <div className={styles.user_details}>
              <h6>Answered {moment(answer.created).format("lll")}</h6>
              <div className={styles.user_card}>
                <img src={userProfileImage} />
                <div>
                  <p>{answer.user.username}</p>
                  <h6>user score {answer.user.userScore}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
