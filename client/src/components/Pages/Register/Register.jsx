import React from "react";
import styles from './Register.module.scss';
// import { Button } from "../../UI/Button/Button";
// import { Input } from "../../UI/Input/Input"; 


import backgroundImageUrl from "../../../assets/background-register.jpg";
import formLogo from "../../../assets/OpenStackLogo.png";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";

const Register = () => {
    return(
        <>
          <div
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      className={styles.register_background}
    >
      <div className={styles.register_container}>
        <form className={`${styles.register_box} ${styles.inputs_container}`}>
          <img className={styles.form_logo} src={formLogo}/>
            <h5>Hello user lets get you account started</h5>
            <hr></hr>
            <Input label="Username" name="username" type="text"/>
            <Input label="Email" name="email" type="text"/>
            <Input label="Password" name="password" type="text"/>
            <Input label="Confirm Password" name="password" type="text"/>
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