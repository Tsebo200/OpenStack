import React, { useEffect, useState } from 'react'
import axios from '../../../../../../api/axios';

export const ReportedAnswers = () => {
  const [QuestionList, setQuestionList] = useState([]);
  const [SelectedQuestion, setSelectedQuestion] = useState({});

  const [ReportList, setReportList] = useState([]);

  const [ModalSettings, setModalSettings] = useState({
    open: false,
    html: <></>,
  });

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getAllQuestions = async () => {
      try {
        const response = await axios.get("/admin/questions-list", {
          signal: controller.signal,
        });
        isMounted && setQuestionList(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllQuestions();
    console.log(QuestionList);
    return () => {
      isMounted = false;
      controller.abort();
    };
    
  }, []);
  return (
    <div>ReportedAnswers</div>
  )
}
