import React from "react";
import styles from './Login.module.scss'



export const Login = () => {
    return(
        <>
            <div className={styles.main_container}>
            <div className={styles.logo}></div>
            <p className={styles.login_heading}>Log In</p>
            <p className={styles.login_welcome_msg}>Welcome back! Please enter your details</p>
            <div className={styles.login_email_input}></div>
            <div className={styles.login_password_input}></div>
            <div className={styles.login_remember_box}></div>
            <p className={styles.login_remember_text}>Remember for 30 days</p>
            <p className={styles.forgot_password}>forgot password?</p>
            <button className={styles.sign_in_btn}>Sign in</button>
            </div>
        </>
    )
}

