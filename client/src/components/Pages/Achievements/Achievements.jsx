import React, { useState, useRef } from "react";
import styles from "./Achievements.module.scss";
import formLogo from "../../../assets/OpenStackLogo.png";
import profileIcon from "../../../assets/profilePicture.jpg"
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
// import Button from "../../Button/Button"
import Axios from "axios";

const UserSettings = (props) => {
    
  var achievementBadge1 = '';
  var achievementBadge2 = '';
  var achievementBadge3 = '';

  if(props.achievement1 === true){
    console.log("achievement1");
    achievementBadge1 = 'https://plus.unsplash.com/premium_photo-1661721719263-1b0bd187788d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60';
  }

  if(props.achievement2 === true){
    console.log("achievement2");
    achievementBadge2 = 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60';
  }

  if(props.achievement3 === true){
    console.log("achievement3");
    achievementBadge3 = 'https://images.unsplash.com/photo-1666190486038-945cf8ad9856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60';
  }
 

  return (
      <div>
        {/* <div className={styles.achievementImg}></div> */}
        <img className={styles.achievementImg} src={achievementBadge1} />
        <img className={styles.achievementImg} src={achievementBadge2} />
        <img className={styles.achievementImg} src={achievementBadge3} />
        {/* <h1>{props.username}</h1> */}
      </div>
  );
};
export default UserSettings