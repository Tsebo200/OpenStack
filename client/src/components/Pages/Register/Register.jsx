import React, { useState, useRef } from "react";
import styles from "./Register.module.scss";
import formLogo from "../../../assets/OpenStackLogo.png";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import Axios from "axios";

import backgroundImageUrl from "../../../assets/background-register.jpg";

const Register = () => {
  const options = ['First Year', 'Second Year', 'Third Year' ,'Honours', 'Creative Computing', 'Lecturer'];
  const onOptionChangeHandler = (event) => {
      console.log("User Selected Value - ", event.target.value)
  }


  // const Register = () => {
    const [FormDetails, setFormDetails] = useState({
      username: "",
      email: "",
      password: "",
      re_password: "",
    });

    const [FormDetailsErrorMessages, setFormDetailsErrorMessages] = useState({
      usernameError: "",
      emailError: "",
      password: "",
      re_password: "",
      formError: false
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormDetails((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    };

    const handleUserRegistration = (event) => {
      event.preventDefault();
      if(!FormDetailsErrorMessages.formError){
        console.log("form is valid");
      }
      else{
        console.log("form invalid");
      }
  //     Axios.post("http://localhost:5000/api/newUser", payload)
  //     .then((res) => {
  //       if (res) {
  //         console.log("User Added");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
    };

    const handleErrorCheckUsername = () => {
      if (FormDetails.username.length > 3) {
        setFormDetailsErrorMessages((prevState) => {
          return {
            ...prevState,
            usernameError: "",
            formError: false
          };
        });
      } else {
        setFormDetailsErrorMessages((prevState) => {
          return {
            ...prevState,
            usernameError: "Must contain more than 3 characters",
            formError: true
          };
        });
      }
    };

    const handleErrorCheckEmail = () => {
      if (!FormDetails.email.includes("@virtualwindow.co.za")) {
        setFormDetailsErrorMessages((prevState) => {
          return {
            ...prevState,
            emailError: "Must be a registered open window email",
            formError: true
          };
        });
      } else {
        setFormDetailsErrorMessages((prevState) => {
          return {
            ...prevState,
            emailError: "",
            formError: false
          };
        });
      }
    };

    return (
      <div
        className={styles.register_background}
      >
        <div className={styles.register_container}>
          <form
            onSubmit={handleUserRegistration}
            className={`${styles.register_box} ${styles.inputs_container}`}
          >
            <img className={styles.form_logo} src={formLogo} />
            <br />
            <h5>Hey user let's get your account setup</h5>
            <hr></hr>

            <Input
              value={FormDetails.username}
              onChange={handleInputChange}
              onBlur={handleErrorCheckUsername}
              label="Username"
              name="username"
              type="text"
            />
            <p className={styles.error}>
              {FormDetailsErrorMessages.usernameError}
            </p>
            <Input
              value={FormDetails.email}
              onChange={handleInputChange}
              onBlur={handleErrorCheckEmail}
              label="Email"
              name="email"
              type="text"
            />
            {/* <select onChange={handleInputChange} name="levels" >
            <option>First Year</option> 
            <option>Second Year</option> 
            <option>Third Year</option> 
            <option>Creative Computing</option> 
            <option>Honours</option> 
            <option>Lecturers</option> 
              value={FormDetails.email}
              onBlur={handleErrorCheckEmail}
              label="Level"
              name="level"
              type="text"
            </select>
               <p className={styles.error}>
              {FormDetailsErrorMessages.emailError}
            </p> */}
            <br />
            <select onChange={handleInputChange}>
            <option>Please Choose Your Current Level</option>
            {options.map((option, index) => {
                return <option key={index} >
                    {option}
                </option>
            })}
          </select>

            <p className={styles.error}>
              {FormDetailsErrorMessages.levelError}
            </p>
            <Input label="Password" name="password" type="password" />
            <Input label="Confirm Password" name="password" type="password" />
            <br />
            <br />
            <Button>Create Account</Button>
          </form>
        </div>
      </div>
    );
  };

export default Register 
