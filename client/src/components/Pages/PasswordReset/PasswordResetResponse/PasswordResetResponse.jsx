import React, { useEffect, useRef, useState } from "react";
import styles from "./PasswordResetResponse.module.scss";
import formLogo from "../../../../assets/OpenStackLogo.png";
import { Button } from "../../../UI/Button/Button";
import { Input } from "../../../UI/Input/Input";
import Axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const PasswordResetResponse = () => {
  const { id, token } = useParams();
  const [pwd, setPwd] = useState("Margincd1!");
  const [validPwd, setValidPwd] = useState(true);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [ShowPassword, setShowPassword] = useState(false);

  const [matchPwd, setMatchPwd] = useState("Margincd1!");
  const [validMatch, setValidMatch] = useState(true);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState(null);
  const [success, setSuccess] = useState(false);

  const errRef = useRef();

  useEffect(() => {
    setErrMsg("");
  }, [pwd, matchPwd]);

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (pwdFocus || matchFocus) {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
        console.log(pwd === matchPwd);
      }
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v2 = PWD_REGEX.test(pwd);
    console.log(!PWD_REGEX.test(pwd));
    if (!v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await Axios.request({
        method: "POST",
        url: "http://localhost:5001/reset-password",
        headers: { "Content-Type": "application/json" },
        data: { userId: id, token, pwd },
      });
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg(
          "Data is incorrect please try resent the password reset email"
        );
      } else {
        setErrMsg("Password reset Failed");
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
            label="Password"
            type={ShowPassword ? "text" : "password"}
            id="reset-password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required={true}
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            valid={validPwd}
            showHidePasswordHandler={setShowPassword}
            showHidePassword={ShowPassword}
            ShowHide={true}
          />
          {!validPwd && (
            <p id="pwdnote" className={styles.helper_text}>
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
          )}

          <Input
            label="Re-enter password"
            type={ShowPassword ? "text" : "password"}
            id="reset-confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required={true}
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            valid={validMatch}
          />
          {!validMatch && (
            <p id="confirmnote" className={styles.helper_text}>
              Must match the first password input field.
            </p>
          )}
          <div className={styles.button_container}>
            <Button disabled={validPwd && validMatch ? false : true}>
              Submit
            </Button>
          </div>
        </form>
      ) : (
        <div className={styles.register_container}>
          <img src={formLogo} />
          <hr></hr>
          <h2>Success</h2>
          <p className={styles.success_p}>
            Your password has been reset
          </p>
          <br/>
          <div className={styles.after_links}>
            <Link to="/?action=login">Sign In</Link>
          </div>
        </div>
      )}
    </div>
  );
};
