import React from 'react';
import styles from './QuestionPortal.module.scss';
import { Header } from '../../Header/Header';
import questionImg from '../../../assets/question_img.png';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import TagCard from '../../TagCard/TagCard';
import { useState } from 'react';
import { useRef } from 'react';

function QuestionPortal() {

    const defValues = ["title", "body", "codeBlock", "upload", "tagOne", "tagTwo", "tagThree", "tagFour"];
    const [screenshot, setScreenshot] = useState()
    const [values, setValues] = useState(defValues);
    const title = useRef();
    const body = useRef();
    const codeBlock = useRef();

    const [titleError, setTitleError] = useState();
    const [bodyError, setBodyError] = useState();
    const [codeError, setCodeError] = useState();

    const handleChange = e => {
        const {name, value} = e.target;

        setValues({
            ...values,
            [name]:value
        });
    }

    const formHandle = e => {
        e.preventDefault();
        let titleString = title.current.value;
        let bodyString = body.current.value;
        let code = codeBlock.current.value;

        if(titleString === "" || bodyString === "" || code === ""){
            setTitleError("Enter a title!");
            setCodeError("Include some code!");
            setBodyError("Enter your question!");
        }

    }

    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.pageContent}>
                <h1>Ask a question</h1>

                <div className={styles.pageContent__flexCenter}>
                    <img src={questionImg} width={200} alt="question_img"/>
                    <p><i>Please enter the fields below and be as specific as possible for the best feedback</i></p>
                    <br />
                </div>
                
                <label htmlFor='title'>Question Title</label>
                {titleError ? <Input name="title" type="questionError" inputType="text" ref={title} value={values["title"]}/> : <Input name="title" type="questionInput" inputType="text" ref={title} value={values["title"]}/>}
                {titleError ? <p className={styles.error}><ion-icon name="warning-outline"></ion-icon> {titleError}</p> : ""}
                <br />
                <br />
                <label htmlFor='body'>Body</label>
                {bodyError ? <textarea className={styles.questionError} name="body" ref={body}></textarea> : <textarea className={styles.questionText} name="body" ref={body}></textarea>}
                {bodyError ? <p className={styles.error}><ion-icon name="warning-outline"></ion-icon> {bodyError}</p> : ""}
                <label htmlFor='codeBlock'>Code Block</label>
                {codeError ? <textarea className={styles.questionError} name="codeBlock" ref={codeBlock}></textarea> : <textarea className={styles.questionText} name="codeBlock" ref={codeBlock}></textarea>}
                {codeError ? <p className={styles.error}><ion-icon name="warning-outline"></ion-icon> {codeError}</p> : ""}
                <label className={styles.upload} for="upload">Upload Screenshot(s)
                    <Input name="upload" type="imgUpload" inputType="file"/>
                </label>
                <label htmlFor='tagSelect'>Select Tags related to questions (min. 3)</label>
                <div className={styles.tagGroup}>
                    <TagCard/>
                    <TagCard/>
                    <TagCard/>
                    <TagCard/>
                    <TagCard/>
                </div>
                <hr />
                <h2>Review your question</h2>
                <p>Question will be displayed here</p>
                <Button text="Submit" type="questionSubmit" onClick={formHandle}/>
            </div>

        </div>
    )
}

export default QuestionPortal
