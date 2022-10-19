import React, { useState, useRef } from "react";
import styles from "./UserSettings.module.scss";
import formLogo from "../../../assets/OpenStackLogo.png";
import profileIcon from "../../../assets/profilePicture.jpg"
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
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
              <img className={styles.profile_icon} src={profileIcon} />
            {/* // onSubmit={handleUserRegistration} */}
             {/* <div className={styles.profile_icon}></div> */}
             <Input label="New Username" name="new_username" type="username" />
             <Input label="New Email" name="new_email" type="email" />
             <br/>
             <Button>Save Changes</Button>
            </form>
            </div>
      </div>
    );
};
export default UserSettings