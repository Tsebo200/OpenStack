import React, { useEffect, useState } from "react";
import axios from "../../../../../../api/axios";
import { Button } from "../../../../../UI/Button/Button";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";

import styles from "./QuestionList.module.scss";
import { Modal } from "./Modal/Modal";

export const QuestionList = () => {
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
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const displayReportsHandler = (reportList, question) => {
    setReportList(reportList);
    setSelectedQuestion(question);
  };
  const closeReportHandler = () => {
    setReportList([]);
    setSelectedQuestion({});
  };

  const closeModalHandler = () => {
    setModalSettings({
      open: false,
      html: <></>,
    });
  };

  const deleteQuestionHandler = (questionId) => {
    setModalSettings({
      open: true,
      html: (
        <>
          <h3>Are you sure you want to remove this question</h3>
          <div className={styles.modal_buttons}>
            <Button
              onClick={() => {
                removeQuestion();
              }}
            >
              Yes
            </Button>
            <Button onClick={closeModalHandler}>No</Button>
          </div>
        </>
      ),
    });
    const removeQuestion = async () => {
      closeModalHandler();
      try {
        const response = await axios.delete("/admin-question", {
          params: { questionId: questionId },
        });
        const getAllQuestions = async () => {
          try {
            const response = await axios.get("/admin/questions-list");
            setQuestionList(response.data);
          } catch (err) {
            console.log(err);
          }
        };
        getAllQuestions();
      } catch (err) {
        console.log(err);
      }
    };
  };

  const removeReportHandler = async (reportId) => {
    setModalSettings({
      open: true,
      html: (
        <>
          <h3>Are you sure you want to remove this report</h3>
          <div className={styles.modal_buttons}>
            <Button
              onClick={() => {
                removeReport();
              }}
            >
              Yes
            </Button>
            <Button onClick={closeModalHandler}>No</Button>
          </div>
        </>
      ),
    });
    const removeReport = async () => {
      closeModalHandler();
      try {
        const response = await axios.delete("/report", {
          params: { reportId: reportId },
        });
        setReportList((prevState) => {
          const newReports = [...prevState];
          const index = prevState.findIndex((report) => {
            return report._id === reportId;
          });
          newReports.splice(index, 1);
          return newReports;
        });
        const getAllQuestions = async () => {
          try {
            const response = await axios.get("/admin/questions-list");
            setQuestionList(response.data);
          } catch (err) {
            console.log(err);
          }
        };
        getAllQuestions();
      } catch (err) {
        console.log(err);
      }
    };
  };

  return (
    <div>
      {ModalSettings.open ? (
        <Modal
          ModalSettings={ModalSettings}
          setModalSettings={setModalSettings}
          closeModalHandler={closeModalHandler}
        />
      ) : (
        ""
      )}
      <br />
      {ReportList.length > 0 && (
        <div>
          <div className={styles.question_actions}>
            <h4>Question actions: </h4>
            <a
              onClick={() => {
                deleteQuestionHandler(SelectedQuestion._id);
              }}
            >
              Delete question
            </a>
            <a onClick={closeReportHandler} className={styles.close_report}>
              Close Reports
            </a>
          </div>
          <br />
          <h3>Reports for question: {SelectedQuestion.title}</h3>
          <br />
          <div className={styles.question_container}>
            <div className={styles.question_content}>
              <h5>{SelectedQuestion.body}</h5>

              <SyntaxHighlighter
                language={SelectedQuestion.code.codeLanguage}
                children={true}
                wrapLines={true}
                showLineNumbers={true}
              >
                {SelectedQuestion.code.codeBody}
              </SyntaxHighlighter>
            </div>
          </div>
          <br />
          <h4>Report Tickets</h4>

          <div className={styles.reports_container}>
            {ReportList.map((report) => {
              return (
                <div key={report._id} className={styles.report_card}>
                  <h4>{report.userDetails.username}</h4>
                  <br />
                  <h5>Report Details</h5>
                  <p>{report.reportBody}</p>
                  <a
                    onClick={() => {
                      removeReportHandler(report._id);
                    }}
                  >
                    remove report
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <h3>Questions List</h3>
      {QuestionList?.length ? (
        <div className={styles.container}>
          <table>
            <thead>
              <th>Owned user</th>
              <th>Question Title</th>
              <th>view question</th>
              <th>Reports</th>
              <th>Owner deleted</th>
              <th>Delete</th>
            </thead>
            {QuestionList.map((question) => {
              return (
                <tr key={question._id}>
                  <td>{question.user.username}</td>
                  <td>{question.title.substring(0,25)}...</td>
                  <td>
                    <Link to={"/questions/individual/" + question._id}>
                      view question
                    </Link>
                  </td>
                  <td>
                    {question.reports.length > 0 ? (
                      <div className={styles.reported}>
                        <div className={styles.icon}></div>
                        <p
                          onClick={() => {
                            displayReportsHandler(question.reports, question);
                          }}
                        >
                          Reports found
                        </p>
                      </div>
                    ) : (
                      <p>no reports</p>
                    )}
                  </td>
                  <td>{question.private ? <p>Yes</p> : <p>No</p>}</td>
                  <td>
                    <a
                      className={styles.delete}
                      onClick={() => {
                        deleteQuestionHandler(question._id);
                      }}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <p>no questions to display</p>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
