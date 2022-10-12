import React from 'react';
import styles from './QuestionPortal.module.scss';
import { Header } from '../../Header/Header';
import questionImg from '../../../assets/question_img.png';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Dropdown from '../../Dropdown/Dropdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import axios from 'axios';

function QuestionPortal() {

    const defValues = ["title", "body", "codeBlock", "selectedYear", "upload", "tag"];
    const [values, setValues] = useState(defValues);
    const title = useRef();
    const body = useRef();
    const codeBlock = useRef();
    const yearSelection = useRef();
    const tag = useRef();
    const img = useRef();

    const [titleError, setTitleError] = useState();
    const [bodyError, setBodyError] = useState();
    const [codeError, setCodeError] = useState();
    const [tagError, setTagError] = useState();

    const handleChange = e => {
        const {name, value} = e.target;

        setValues({
            ...values,
            [name]:value
        });
    }

    const exampleCode = `const hello = "written code will go here";`

    const formHandle = e => {
        e.preventDefault();
        let titleString = title.current.value;
        let bodyString = body.current.value;
        let code = codeBlock.current.value;
        let imgName = img.current.value;
        let year = yearSelection.current.value;
        let tags = tag.current.value;

        const imgSubStr = imgName.substr(12);

        if(titleString === ""){
            setTitleError("Enter a title");
        }else{
            setTitleError();
        }

        if(bodyString === ""){
            setBodyError("Enter your question!");
        }else{
            setBodyError();
        }

        if(code === ""){
            setCodeError("Include some code!");
        }else{
            setCodeError();
        }

        if(tags === ""){
            setTagError("Enter at least 1 tag");
        }else{
            setTagError();
        }

        let payload = {
            questionTitle: titleString,
            questionBody: bodyString,
            questionCode: code,
            selectedYear: year,
            img: imgSubStr,
            tagSelected: tags,
            user: "Wiaan",
            answers: 0,
            views: 0,
            upVotes: 0,
            downVotes: 0,
            reports: 0
        }

        console.log(payload);

        axios.post('http://localhost:5001/api/addQuestion', payload)
        .then(res => {
            console.log("Question Added!");
        })

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
                <label htmlFor='dropdown'>Select Your Year</label>
                <Dropdown ref={yearSelection}/>
                <label className={styles.upload} for="upload">Upload Screenshot(s)
                    <Input name="upload" type="imgUpload" inputType="file" ref={img}/>
                </label>
                <label htmlFor='enteredTags'>Enter Tags related to questions</label>
                {tagError ? <Input name="enteredTags" type="questionError" inputType="text" ref={tag} value={values["tag"]}/> : <Input type="questionInput" name="enteredTags" inputType="text" ref={tag} value={values["tag"]}/>}
                <hr />
                <h2>Review your question</h2>
                <hr />
                <SyntaxHighlighter className={styles.code} language="javascript" children={true}>
                   {exampleCode}
                </SyntaxHighlighter>
                <Button text="Submit" type="questionSubmit" onClick={formHandle}/>
            </div>

        </div>
    )
}

export default QuestionPortal
