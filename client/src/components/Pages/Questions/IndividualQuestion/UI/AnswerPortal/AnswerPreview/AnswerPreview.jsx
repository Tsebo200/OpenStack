import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";

import styles from "./AnswerPreview.module.scss";

export const AnswerPreview = (props) => {
  const previewAnswer = props.previewAnswer;
  return (
    <div className={styles.question_container}>
      <div className={styles.question_content}>
        {previewAnswer.answerBody.length > 0 ? (
          <h5>{previewAnswer.answerBody}</h5>
        ) : (
          <h5>This is what your question body will look like</h5>
        )}

        {previewAnswer.answerCodeBody.length > 0 ? (
          <SyntaxHighlighter
            language="javascript"
            children={true}
            wrapLines={true}
            showLineNumbers={true}
          >
            {previewAnswer.answerCodeBody}
          </SyntaxHighlighter>
        ) : (
          <SyntaxHighlighter
            language="javascript"
            children={true}
            wrapLines={true}
            showLineNumbers={true}
          >
            {`const example = "example code"`}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};
