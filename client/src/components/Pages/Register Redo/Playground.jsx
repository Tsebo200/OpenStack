import React from "react";
import styles from './Playground.module.scss';

const Playground = () => {
    return(
        <>
            <div className={styles.register_main_container}>
                <div className={styles.register_left}>
                    <div className={styles.register_logo}></div>
                    <h1 className={styles.register_create_heading}>Create An Account</h1>
                    <h5 className={styles.register_already_member}>Already a Member? <a href="dashboard page">Sign in</a></h5>
                    <form>
                        <div type="number" className={styles.reg_form_student_number}></div>
                        <div type="text" className={styles.reg_form_username}></div>
                        <div type="email" className={styles.reg_form_email}></div>
                        <div type="password" className={styles.reg_form_password}></div>
                        <div type="password" className={styles.reg_form_confirm_password}></div>
                        <div className={styles.reg_form_create_btn}>Create Account</div>
                    </form>
                </div>
                    <div className={styles.register_right}></div>

            </div>
        </>
    )
}
// Change the divs in forms to Input with a capital i 
// Buttpon tag isn't stylable for some reason
export default Playground