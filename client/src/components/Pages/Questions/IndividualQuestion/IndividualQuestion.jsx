import React, { useEffect, useState } from "react";
import styles from "./IndividualQuestion.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import { Link, useParams } from "react-router-dom";
import { Answer } from "./UI/Answer/Answer";

import userProfileImage from "../../../../assets/profilePicture.jpg";
import { CommentList } from "./UI/ComentList/CommentList";
import { AnswerPortal } from "./UI/AnswerPortal/AnswerPortal";
import axios from "../../../../api/axios";

export default function IndividualQuestion() {
  let params = useParams();

  const [QuestionDetails, setQuestionDetails] = useState(null);
  const [QuestionTags, setQuestionTags] = useState(null);

  const getQuestions = async () => {
    const response = await axios.post("/get-question", {
      questionId: params.questionId,
    });
    setQuestionDetails(response.data[0]);
  };

  const getTags = async (tags) => {
    const response = await axios.post("/unique-tags", {
      UniqueTagsList: tags,
    });
    setQuestionTags(response.data)
  }

  useEffect(() => {
    getQuestions();
    getTags(QuestionDetails?.tags)
  }, []);


  console.log(QuestionDetails);
  console.log(QuestionTags);

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
      {QuestionDetails ? (
        <>
          <header>
            <div className={styles.header_main}>
              <h2>{QuestionDetails.title}</h2>
              <Link to="/questions-portal">Ask Question</Link>
            </div>
            <div className={styles.question_activity_header}>
              <p>Asked 7 years, 7 months ago </p>
              <p>Modified 1 month ago</p>
            </div>
          </header>
          <div className={styles.question_container}>
            <div className={styles.voting}>
              <ion-icon name="chevron-up-outline"></ion-icon>
              <h3>{QuestionDetails.questionInteraction.votes}</h3>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            <div className={styles.question_content}>
              <h5>
                {QuestionDetails.body}
              </h5>
              <SyntaxHighlighter
                language={QuestionDetails.code.codeLanguage}
                children={true}
                wrapLines={true}
                // style={a11yLight}
                showLineNumbers={true}
              >
                {QuestionDetails.code.codeBody}
              </SyntaxHighlighter>
              <div className={styles.tag_list}>
                {QuestionTags.map(tag => {
                  return <Link key={tag._id}>{tag.tagName}</Link>
                })}
              </div>
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
            </div>
          </div>
          {/* <Answer /> */}
          <AnswerPortal />
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
