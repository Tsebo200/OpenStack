import React from "react";
import styles from './Login.module.scss';
// import logo from '/client/src/assests/Backround.png';


export const Login = () => {
    return (
        <form className={styles.main_container}>
            <div className={styles.logo}>ahb</div>
            <div className={styles.main_container_child}>
                
                <h1>Log In</h1>
                <h5 className={styles.login_welcome_msg}>Welcome back! Please enter your details</h5>
                
                <input placeholder="username"/>
                {/* <div className={styles.login_email_input}></div>
                <div className={styles.login_password_input}></div>
                <div className={styles.login_remember_box}></div>
                <p className={styles.login_remember_text}>Remember for 30 days</p>
                <p className={styles.forgot_password}>forgot password?</p>
                <button className={styles.sign_in_btn}>Sign in</button> */}
            </div>
        </form>
    )
}

