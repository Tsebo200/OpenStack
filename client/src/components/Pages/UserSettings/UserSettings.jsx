import React, { useState, useRef, useEffect } from "react";
import styles from "./UserSettings.module.scss";
import formLogo from "../../../assets/OpenStackLogo.png";
import profileIcon from "../../../assets/profilePicture.jpg";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";

import StockCards from "../Achievements/Achievements";
// import Button from "../../Button/Button"
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import axios from "../../../api/axios";
import moment from "moment";
import { useAuth } from "../../../Hooks/useAuth";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

const UserSettings = () => {
  const { userId } = useParams();

  const { Auth } = useAuth();

  const [userData, setUserData] = useState();

  const formattedSentence = (sentence) => {
    let newSentence = sentence
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.toLowerCase().substring(1);
      })
      .join(" ");
    return newSentence;
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUserData = async () => {
      try {
        const response = await axios.get("/user", {
          signal: controller.signal,
          params: { userId: userId },
        });
        isMounted && setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUserData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [userId]);

  console.log(userData);

  const achievementsArray = [
    {
      title: "Score",
      id: 1,
      location:
        "https://drive.google.com/uc?export=view&id=1ivX2Mk5rLgE8BOgkbtTFbP7Y19hJsvGK",
      decs: "Get a score of 10",
      achieved: true,
    },
    {
      title: "Score",
      id: 2,
      location:
        "https://drive.google.com/uc?export=view&id=1q08fNmJexAs4xiZhn2wOJP0UF8uNYc6B",
      decs: "Get a score of 15",
      achieved: true,
    },
    {
      title: "Score",
      id: 3,
      location:
        "https://drive.google.com/uc?export=view&id=1ye4LYUHAJZDWpbvQJtiXlCmB9U9iQWUZ",
      decs: "Get a score of 50",
      achieved: false,
    },
    {
      title: "Score",
      id: 4,
      location:
        "https://drive.google.com/uc?export=view&id=1v04q-f6MiRM0rMIS-OZL4DhukfA2K4Pd",
      decs: "Get a score of 100",
      achieved: false,
    },
    {
      title: "Score",
      id: 4,
      location:
        "https://drive.google.com/uc?export=view&id=1v04q-f6MiRM0rMIS-OZL4DhukfA2K4Pd",
      decs: "Get a score of 100",
      achieved: false,
    },
    {
      title: "Score",
      id: 4,
      location:
        "https://drive.google.com/uc?export=view&id=1v04q-f6MiRM0rMIS-OZL4DhukfA2K4Pd",
      decs: "Get a score of 100",
      achieved: false,
    },{
      title: "Score",
      id: 4,
      location:
        "https://drive.google.com/uc?export=view&id=1v04q-f6MiRM0rMIS-OZL4DhukfA2K4Pd",
      decs: "Get a score of 100",
      achieved: false,
    },{
      title: "Score",
      id: 4,
      location:
        "https://drive.google.com/uc?export=view&id=1v04q-f6MiRM0rMIS-OZL4DhukfA2K4Pd",
      decs: "Get a score of 100",
      achieved: false,
    },{
      title: "Score",
      id: 4,
      location:
        "https://drive.google.com/uc?export=view&id=1v04q-f6MiRM0rMIS-OZL4DhukfA2K4Pd",
      decs: "Get a score of 100",
      achieved: false,
    },{
      title: "Score",
      id: 4,
      location:
        "https://drive.google.com/uc?export=view&id=1v04q-f6MiRM0rMIS-OZL4DhukfA2K4Pd",
      decs: "Get a score of 100",
      achieved: false,
    },{
      title: "Score",
      id: 4,
      location:
        "https://drive.google.com/uc?export=view&id=1v04q-f6MiRM0rMIS-OZL4DhukfA2K4Pd",
      decs: "Get a score of 100",
      achieved: false,
    },{
      title: "Score",
      id: 4,
      location:
        "https://drive.google.com/uc?export=view&id=1v04q-f6MiRM0rMIS-OZL4DhukfA2K4Pd",
      decs: "Get a score of 100",
      achieved: false,
    },{
      title: "Score",
      id: 4,
      location:
        "https://drive.google.com/uc?export=view&id=1v04q-f6MiRM0rMIS-OZL4DhukfA2K4Pd",
      decs: "Get a score of 100",
      achieved: false,
    },{
      title: "Score",
      id: 4,
      location:
        "https://drive.google.com/uc?export=view&id=1v04q-f6MiRM0rMIS-OZL4DhukfA2K4Pd",
      decs: "Get a score of 100",
      achieved: false,
    },
  ];

  console.log(userData);

  const closeModalHandler = () => {
    setUser("");
    setModalSettings({
      open: false,
      scss: `${styles.modal_container}`,
    });
  };

  const [ModalSettings, setModalSettings] = useState({
    open: false,
    scss: `${styles.modal_container}`,
  });

  const changeUserNameHandler = () => {
    setModalSettings({
      open: true,
      scss: `${styles.modal_container} ${styles.open}`,
    });
  };

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("CaidynGinger");
  const [validName, setValidName] = useState(true);
  const [userFocus, setUserFocus] = useState(false);

  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (userFocus) {
        setValidName(USER_REGEX.test(user));
      }
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [user]);
  console.log(userData);

  const changeUserNameSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch("/user-username", {
        userId: Auth?.userData?.UserInfo?.userId,
        newUsername: user,
      });
      if (response.status === 209) {
        setErrMsg("error name must be valid");
        return;
      } else if (response.status === 200) {
        setUserData((prevState) => {
          return { ...prevState, user: { ...prevState.user, username: user } };
        });
        setUser("");
        setModalSettings({
          open: false,
          scss: `${styles.modal_container}`,
        });
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else if (err.response?.status === 410) {
        setErrMsg("Email is in use");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };

  // const [userImg, setUserImg] = useState("");

  // useEffect(() => {
  //   console.log(Auth);
  //   setUserImg(localStorage.getItem("img"));
  // }, []);

  return (
    <section className={styles.user_page}>
      {userData ? (
        <>
          {ModalSettings.open && (
            <div className={styles.modal_background}></div>
          )}
          <div className={ModalSettings.scss}>
            <div onClick={closeModalHandler} className={styles.close_btn}>
              <ion-icon name="close-outline"></ion-icon>
            </div>
            <form onSubmit={changeUserNameSubmitHandler}>
              <h3>Change Username</h3>
              {errMsg && (
                <p
                  ref={errRef}
                  className={styles.error_message}
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
              )}
              <Input
                label="Username"
                type="text"
                id="username"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required={true}
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                valid={validName}
              />
              {!validName && (
                <p id="uidnote" className={styles.helper_text}>
                  4 to 24 characters.
                  <br />
                  No Spaces are allowed
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              )}
              <br></br>
              <Button disabled={!validName}>Change My Name</Button>
            </form>
          </div>
          <header>
            <h2>
              {userData.user.username} | Score {userData.user.userScore}
            </h2>
            <Link to="/questions-portal">Ask Question</Link>
          </header>
          <br />
          <hr />
          <br />
          <div className={styles.user_header}>
            <img className={styles.user_img} src={"https://drive.google.com/uc?export=view&id=" + userData.user.profilePictureLink} />
            <div className={styles.achievement_list_container}>
              <h4>Achievements List</h4>
              <div className={styles.achievement_list}>
                {achievementsArray.map((achievement) => {
                  return (
                    <div className={styles.achievement_container}>
                      <img
                        className={
                          !achievement.achieved ? styles.achieved : undefined
                        }
                        src={achievement.location}
                      />
                      <div className={styles.achievement_desc}>
                        <h5>{achievement.title}</h5>
                        <p>{achievement.decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className={styles.divide}>
            <div>
              <h3>Answers</h3>
              <div className={styles.container}>
                {userData.userAnswers.map((answer) => {
                  // console.log(answer);
                  return (
                    <div className={styles.question_card}>
                      <span
                        className={
                          answer.correctAnswer === answer._id
                            ? styles.correct
                            : undefined
                        }
                      >
                        {answer.votes.length}
                      </span>
                      <Link
                        to={`/questions/individual/${answer.questionId[0]}`}
                      >
                        <h5>{formattedSentence(answer.questionTitle)}</h5>
                      </Link>
                      <p>{moment(answer.date).format("MMM Do")}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.spacer}></div>
            <div>
              <h3>Questions asked</h3>
              <div className={styles.container}>
                {userData.userQuestions.map((question) => {
                  return (
                    <div className={styles.question_card}>
                      <span
                        className={
                          question.questionInteraction.correctAnswer
                            ? styles.correct
                            : undefined
                        }
                      >
                        {question.questionInteraction.votes.length}
                      </span>
                      <Link to={`/questions/individual/${question._id}`}>
                        <h5>{formattedSentence(question.title)}</h5>
                      </Link>
                      <p>{moment(question.questionCreated).format("MMM Do")}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          {Auth?.userData?.UserInfo?.userId === userId && (
            <>
              <h3>Danger Zone</h3>
              <a
                onClick={changeUserNameHandler}
                className={styles.danger_zone_a}
              >
                Change Username
              </a>
              <a className={styles.danger_zone_a}>Change Profile picture</a>
            </>
          )}
        </>
      ) : (
        <>
          <header>
            <h2>User</h2>
            <Link to="/questions-portal">Ask Question</Link>
          </header>
          <br />
          <hr />
          <br />
          <h3>Ohh no there was no user found</h3>
        </>
      )}
    </section>
  );
};
export default UserSettings;
