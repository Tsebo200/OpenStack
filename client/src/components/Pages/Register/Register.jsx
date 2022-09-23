import React from "react";
import styles from './Register.module.scss';
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input"; 

const Register = () => {
    return(
        <>
            <div className={styles.register_main_container}>
               <div className={styles.register_container}>
                    <div className={styles.register_left}></div>
                    <div className={styles.register_right}>
                        <div className={styles.register_logo}></div>
                        <p className={styles.register_create_text}>Create An Account</p>
                        <p className={styles.register_already_text}>Already a member?</p>
                        <p className={styles.register_signin_link}>Sign in</p>
                        <div className={styles.register_student_number_input}></div>
                        <div className={styles.register_username_input}></div>
                        <div className={styles.register_email_input}></div>
                        <div className={styles.register_password_input}></div>
                        <div className={styles.register_confirm_password_input}></div>
                        <button className={styles.register_create_account_btn}>Create Account</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register