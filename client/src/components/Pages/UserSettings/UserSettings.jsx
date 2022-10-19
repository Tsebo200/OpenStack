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
          className={`${styles.settings_box} ${styles.inputs_container}`}>
              <img className={styles.form_logo} src={formLogo} />
              {/* <br />
              <br/> */}
                <center><h2>User Settings</h2></center>
              <hr></hr>
              <br/>
              <center><h5>Hi user please edit your profile info here</h5></center>
            {/* // onSubmit={handleUserRegistration} */}
             
            </form>
            </div>
      </div>
    );
};
export default UserSettings