import React, { useState } from "react";
import { useAuth } from "../../../../../../Hooks/useAuth";
import { Button } from "../../../../../UI/Button/Button";
import { Input } from "../../../../../UI/Input/Input";
import { Select } from "../../../../../UI/Select/Select";
import { Textarea } from "../../../../../UI/Textarea/Textarea";
import { AnswerPreview } from "./AnswerPreview/AnswerPreview";

export const AnswerPortal = () => {
  const { Auth } = useAuth;
  // console.log(Auth);
  {
    /* // code body
        // code language
        // answer body
        // screenshot */
  }

  const [AnswerValues, setAnswerValues] = useState({
    answerBody: "",
    answerCodeLanguage: "",
    answerCodeBody: "",
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

  return (
    <div>
      <br></br>
      {!Auth ? (
        <>
          <h3>Your answer</h3>

          <form>
            <Textarea
              id="answerBody"
              value={AnswerValues.answerBody}
              placeHolder={"your answer text goes here"}
              rows="12"
              onChange={handleChange}
            />
            <br/>
            question was wrighten in: {"tag"}
            <Textarea
              id="answerCodeBody"
              placeHolder={"your code goes here"}
              value={AnswerValues.answerCodeBody}
              rows="12"
              onChange={handleChange}
            />
            <br/>
            <AnswerPreview previewAnswer={AnswerValues}/>
            <br/>
            <br/>
            <Button>Post Your Answer</Button>
          </form>
          
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
