import React from 'react';
import styles from './QuestionPortal.module.scss';
import { Header } from '../../Header/Header';
import questionImg from '../../../assests/question_img.png';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import TagCard from '../../TagCard/TagCard';

function QuestionPortal() {
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
                <Input name="title" type="questionInput" inputType="text"/>
                <label htmlFor='body'>Body</label>
                <textarea className={styles.questionText} name="body"></textarea>
                <label htmlFor='codeBlock'>Code Block</label>
                <textarea className={styles.questionText} name="codeBlock"></textarea>
                <label htmlFor='codeBlock'>Code Block</label>
                <textarea className={styles.questionText} name="codeBlock"></textarea>
                <label htmlFor="upload">Upload Screenshot(s)</label>
                <Input inputType="file" accept="image/*"/>
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
                <Button text="Submit" type="questionSubmit"/>
            </div>

        </div>
    )
}

export default QuestionPortal
