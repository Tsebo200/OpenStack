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
    <div className={styles.main_container}>
        {/* <h1>Users</h1> */}
        <div className={styles.header}>
            <h1 className={styles.user_heading}>Users</h1>
            <div className={styles.filter_container}></div>
        </div>{/*End of header */}

              {/* User Cards Section*/}
              <div className={styles.all_users_container}>
                    <div className={styles.user_card}>
                      <h2 className={styles.user_name}>
                      {userInfo.userProfile}</h2>
                    </div> {/* End of User_Card */}
          
              </div> {/* End of users_container */}
          
    </div> {/* End of main-container */}
    </>

  )
}

