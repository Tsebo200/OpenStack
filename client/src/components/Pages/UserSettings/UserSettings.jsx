import React, { useState, useRef } from "react";
import styles from "./UserSettings.module.scss";
import formLogo from "../../../assets/OpenStackLogo.png";
import Axios from "axios";

const UserSettings = () => {
    
    return (
        //Add a margin top of 70px to accommodate for nav bar

        <div className={styles.settings_background}>
        <div className={styles.settings_form_container}>
          <form
            // onSubmit={handleUserRegistration}
             className={`${styles.settings_box} ${styles.inputs_container}`}>
            </form>
            </div>
      </div>
    );
};
export default UserSettings