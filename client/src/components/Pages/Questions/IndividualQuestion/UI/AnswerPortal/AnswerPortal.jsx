import React, { useEffect, useState } from "react";
import axios from "../../../../../../api/axios";
import { useAuth } from "../../../../../../Hooks/useAuth";
import { Button } from "../../../../../UI/Button/Button";
import { Input } from "../../../../../UI/Input/Input";
import { Select } from "../../../../../UI/Select/Select";
import { Textarea } from "../../../../../UI/Textarea/Textarea";
import { AnswerPreview } from "./AnswerPreview/AnswerPreview";

import styles from "./AnswerPortal.module.scss";
import { useRef } from "react";

export const AnswerPortal = (props) => {
  const { Auth } = useAuth();

  const errorRef = useRef(null);

  const [Error, setError] = useState(false);

  const [AnswerValues, setAnswerValues] = useState({
    answerBody: "",
    answerCodeBody: `const answerSubmitHandler = (event) => {
      event.preventDefault()
      console.log(AnswerValues);
    }`,
    // answerBody: "your answer text goes here",
    // answerCodeLanguage: "your code goes here",
    // answerCodeBody: "your code goes here",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswerValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const answerSubmitHandler = async (event) => {
    event.preventDefault();
    if (AnswerValues.answerBody.length > 0) {
      setError(false);
      try {
        const response = await axios.post("/answer-post", {
          AnswerValues: AnswerValues,
          user: Auth.userData.UserInfo.userId,
          questionId: props.questionId
        });
        props.getAnswers()
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      return;
    }
    setError(true);
    if (Error) {
      errorRef.current.scrollIntoView(
        {
          behavior: "smooth",
          block: "center",
          inline: "center",
        }
      );
    }
    
    return;
  };

  return (
    <div>
      <br/>
      {Auth?.accessToken ? (
        <>
          <h3>Your answer</h3>
          <br />
          {Error && (
            <p ref={errorRef} className={styles.error}>
              Your question needs a body
            </p>
          )}

          <form onSubmit={answerSubmitHandler}>
            <Textarea
              id="answerBody"
              value={AnswerValues.answerBody}
              placeHolder={"your answer text goes here"}
              rows="12"
              onChange={handleChange}
            />
            <br />
            <h4>Question was written in: {props.tag}</h4>

            <Textarea
              id="answerCodeBody"
              placeHolder={"your code goes here"}
              value={AnswerValues.answerCodeBody}
              rows="12"
              onChange={handleChange}
            />
            <br />
            <h4>This is what your answer will look like</h4>
            <AnswerPreview previewAnswer={AnswerValues} />
            <br />
            <br />
            <Button>Post Your Answer</Button>
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
