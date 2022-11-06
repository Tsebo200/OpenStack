import React from 'react'
import styles from "./UserList.module.scss";
import profileIcon from "../../../assets/profilePicture.jpg";
export const UserList = () => {

// const usersInfo = [

  // {
  //   const imageLink = []
  //   username: "Mike",
  //   userScore: 1,
  // }

// ]

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);


let imageLink = {profileIcon}
let username = "Mike"
let userScore = 1

const userInfo = [imageLink, username, userScore];

// let userProfile = userInfo.map((imageLink));
// console.log(userProfile);



  return (
    <>
      {/* <h1>Users</h1> */}
      <h1 className={styles.user_heading}>Users</h1>

      {/* User Cards */}
      <h2 className={styles.user_profile}>
     {userInfo.userProfile}
      </h2>
      
    </>

  )
}

