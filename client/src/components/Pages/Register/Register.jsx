import React,{ useState, useRef } from "react";
import styles from './Register.module.scss';
import formLogo from "../../../assets/OpenStackLogo.png";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import Axios from 'axios';

const Register = () => {
  let usernameVal = useRef();
  let emailVal = useRef();
  let passwordVal = useRef();
  let passwordConVal = useRef();

  const addUser = e => {
    e.preventDefault();

    let payload = {
      // first: formValues['name'], 
      username: usernameVal.current.value,
      email: emailVal.current.value,
      password: passwordVal.current.value
    }

    console.log(payload);

    Axios.post('http://localhost:5000/api/newUser', payload)
    .then((res)=> {
      if(res){
        console.log("User Added"); 
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // const ref = React.createRef();

  // const Input = React.forwardRef((props, ref) => (
  //   <button ref={ref} className="Input">
  //     {props.children}
  //   </button>
  // ));
  


    return(
        <>
          <div
      // style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      className={styles.register_background}
      // style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      // className={styles.register_background}
    >
      <div className={styles.register_container}>
        <form onSubmit={addUser} className={`${styles.register_box} ${styles.inputs_container}`}>
          <img className={styles.form_logo} src={formLogo}/>
          <br/>
          <br/>
          <div className="invisible-breaker"/>
            <h5>Hey user let's get your account setup</h5>
            <hr></hr>
       
            <Input label="Username" name="username" type="text"></Input>
            <Input label="Email" name="email" type="text"></Input>
            <Input label="Password" name="pass" type="text"></Input>
            <Input label="Confirm Password" name="conPass" type="text"></Input>
            <br/>
            <br/>
            <Button>Submit</Button>
        </form>
        <div className={`${styles.register_box} ${styles.other}`}></div>
      </div>
    </div>
        </>
    )
}
export default Register