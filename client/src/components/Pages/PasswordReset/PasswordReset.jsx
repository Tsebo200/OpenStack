import React, { useRef, useState } from "react";

import styles from "./PasswordReset.module.scss";
import formLogo from "../../../assets/OpenStackLogo.png";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";
import Axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const PasswordReset = () => {
  const [Email, setEmail] = useState("");
  const [ValidEmail, setValidEmail] = useState(true);
  const [EmailFocus, setEmailFocus] = useState(false);

  const [success, setSuccess] = useState(false);

  const [errMsg, setErrMsg] = useState(null);
  const errRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.request({
        method: "GET",
        url: "http://localhost:5001/reset-password",
        headers: { "Content-Type": "application/json" },
        params: { Email },
      });
      console.log(JSON.stringify(response.data));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      // setUser("");
      // setPwd("");
      // setEmail("");
      // setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("The email entered is not valid or does not exist");
      }
      errRef.current.focus();
    }
  };
  return (
    <div className={styles.passwordReset_container}>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <img src={formLogo} />
          <hr></hr>
          <h2>Reset your Openstack account</h2>
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
            label="Email"
            type="text"
            id="reset-email"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
            required={true}
            aria-invalid={ValidEmail ? "false" : "true"}
            aria-describedby="emailnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            valid={ValidEmail}
          />
          {!ValidEmail && (
            <p id="pwdnote" className={styles.helper_text}>
              email must be a virtualwindow account
            </p>
          )}
          <div className={styles.button_container}>
            <Button>Submit</Button>
          </div>
        </form>
      ) : (
        <form>
          <img src={formLogo} />
          <hr></hr>
          <h2>Success</h2>
          <p className={styles.success_p}>
            An email has been sent to <br /> <br />
            <span>{Email}</span>
          </p>
          <div className={styles.after_links}>
            <a target="blank" href="https://mail.google.com/">
              Go to your email
            </a>
          </div>
        </form>
      )}
    </div>
  );
};
