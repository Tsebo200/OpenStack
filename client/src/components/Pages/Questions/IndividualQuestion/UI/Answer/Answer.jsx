import React from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import userProfileImage from "../../../../../../assets/profilePicture.jpg";
import styles from "./Answer.module.scss";

export const Answer = () => {
  const exampleCode = `string target = "qa_data/hamlet.xml";
    string symlink = "qa_output/symlink_hamlet.xml";
    bool success = fac.SymlinkCreate(target,symlink);
    if (success != true) {
        Debug.WriteLine(fac.LastErrorText);
        return;
    }
    
    // Here we create a directory symbolic link.  The target is a directory (not a regular file)
    target = "qa_data/xml/";
    symlink = "qa_output/xml_dir";
    success = fac.SymlinkCreate(target,symlink);
    if (success != true) {
        Debug.WriteLine(fac.LastErrorText);
        return;
    }
    
    Debug.WriteLine("Success.");`;
  return (
    <div className={styles.container}>
      <br></br>
      <header>
      <h3>10 Answers</h3>
      {/* <p>Sorted by:</p> */}
      </header>
      
      <div className={styles.question_container}>
        <div className={styles.voting}>
          <ion-icon name="chevron-up-outline"></ion-icon>
          <h3>67</h3>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <div className={styles.question_content}>
          <h5>
            I have a div called .side-el which I would like to have in a
            position: fixed; behavior, but as soon as I apply position fixed the
            width alternates from the right one. The right width would be the
            one set by flexbox. How can I achieve this goal?
          </h5>
          <SyntaxHighlighter
            language="javascript"
            children={true}
            wrapLines={true}
            showLineNumbers={true}
          >
            {exampleCode}
          </SyntaxHighlighter>
          <br/>
          <div className={styles.question_user_details_container}>
            <p className={styles.report_question}>report question</p>
            <div className={styles.user_details}>
              <h6>asked Mar 13 2015 at 13:31</h6>
              <div className={styles.user_card}>
                <img src={userProfileImage} />
                <div>
                  <p>Username</p>
                  <h6>user score 11.1k </h6>
                </div>
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
