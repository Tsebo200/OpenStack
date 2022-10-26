import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";
import styles from "./Login.module.scss";
import logo from "../../../assets/OpenStackLogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useAuth } from "../../../Hooks/useAuth";

const LOGIN_URL = "./auth";

export const Login = (props) => {

  const { setAuth } = useAuth();
  const emailRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [Email, setEmail] = useState("");
  const [Pwd, setPwd] = useState("");
  const [ErrMsg, setErrMsg] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [Email, Pwd]);

  const loginHandler = async (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      url: "http://localhost:5001/auth",
      headers: { "Content-Type": "application/json" },
      data: { email: Email, pwd: Pwd },
    };
    try {
      const response = await Axios.request(options);
      const accessToken = response?.data?.accessToken;
      const refreshToken = response?.data?.refreshToken;
      const roles = response?.data?.roles;
      // console.log(response.data)
      // console.log(refreshToken)

      // add refresh to local

      localStorage.setItem("refreshToken", refreshToken)


      // console.log(accessToken)
      // console.log(roles)
      setAuth({ roles: response.data.roles, accessToken: accessToken})
      // setEmail('')
      // setPwd('')
      props.onClick()
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <form onSubmit={loginHandler} className={styles.main_container}>
      <img src={logo} className={styles.logo} />
      <h1>Log In</h1>
      <h4>
        Welcome Back! <br /> Please enter your details
      </h4>
      {ErrMsg && (
        <p ref={errRef} className={styles.error_message} aria-live="assertive">
          {ErrMsg}
        </p>
      )}
      <br></br>
      <Input
        label="Email"
        type="text"
        id="email"
        ref={emailRef}
        onChange={(e) => setEmail(e.target.value)}
        value={Email}
        required={true}
        valid={true}
      />
      <Input
        label="Password"
        type={ShowPassword ? "text" : "password"}
        id="password"
        onChange={(e) => setPwd(e.target.value)}
        value={Pwd}
        required={true}
        showHidePasswordHandler={setShowPassword}
        showHidePassword={ShowPassword}
        ShowHide={true}
        valid={true}
      />
      <br />
      <br />
      <Button>Login</Button>
      <br />
      <h5>
        Don't have an account <br /> create one{" "}
        <Link
          className={styles.register_a}
          onClick={props.onClick}
          to="/register"
        >
          here
        </Link>
      </h5>
    </form>
  );
};
