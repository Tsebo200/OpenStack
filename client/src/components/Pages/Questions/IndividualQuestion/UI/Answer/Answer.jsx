import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import userProfileImage from "../../../../../../assets/profilePicture.jpg";
import styles from "./Answer.module.scss";

export const Answer = (props) => {
  const answer = props.answer;

  const usersRefList = props.userRefList;

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
            language="javascript"
            children={true}
            wrapLines={true}
            showLineNumbers={true}
          >
            {answer.code}
          </SyntaxHighlighter>
          <br />
          <div className={styles.question_user_details_container}>
            <p className={styles.report_question}>report question</p>
            <div className={styles.user_details}>
              <h6>Answered {moment(answer.created).format("lll")}</h6>
              <div className={styles.user_card}>
                <img src={userProfileImage} />
                {usersRefList
                  .filter((i) => {
                    return i.id === answer.user;
                  })
                  .map((userDetails) => {
                    return (
                      <div>
                        <p>{userDetails.username}</p>
                        <h6>user score {userDetails.userScore}</h6>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* <CommentList/> */}
          {/* <Answer /> */}
        </div>
      </div>
    </div>
  );
};
