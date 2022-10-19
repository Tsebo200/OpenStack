import React, { useState, useRef } from "react";
import styles from "./UserSettings.module.scss";
import formLogo from "../../../assets/OpenStackLogo.png";
import profileIcon from "../../../assets/profilePicture.jpg"
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
// import Button from "../../Button/Button"
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
              <hr/>
              <br/>
              <center><h5>Hi user please edit your profile info here</h5></center>
              <img className={styles.profile_icon} src={profileIcon} />
              <div className={styles.labels_container}>
              <h3 className={styles.username_label}>Your Current UserName:</h3>
              <div className={styles.input_container}>
              <Input label="Trevor100" name="new_username" type="username" />
              <br/>
              <h3 className={styles.email_label}>Your Current Email:</h3>
              <Input label="200100@virtualwindow.co.za" name="new_email" type="email" />
              </div>
              </div>
              <div className={styles.achieve_container}>
                {/* <p>Hi user here are your achievements</p> */}
                <div className={styles.achievement}></div>
                {/* <Button>Save Changes</Button> */}
              </div>
            <Button>Save Changes</Button>
            </form>
        </div>
      </div>
    );
};
export default UserSettings