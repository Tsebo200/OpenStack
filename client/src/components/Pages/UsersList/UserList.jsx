import React from "react";
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

  // let imageLink = {profileIcon}
  // let username = "Jack"
  // let userScore = 50

  // const userInfo = [imageLink, username, userScore];

  // let userProfile = userInfo.map((userInfo));
  // console.log(userProfile);

  // const actualUserInfo = [{profileIcon}, "Jack", 50];

  const actualUserInfo = [10, 11, 50];
  const userInfo = actualUserInfo.map((number) => number * 2);
  console.log(userInfo);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const actualUserInfo = [{profileIcon}, "Jack", 50];


// This is working ✅
// const actualUserInfo = [10, 11, 50];
// const userInfo = actualUserInfo.map((number) => number * 2);
// console.log(userInfo);

// const actualUserInfo = ["Jack", "Jack", "Jack"];
// const userInfo = actualUserInfo.map((string) => string * 2);
// console.log(userInfo);

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.header}>
          <h1 className={styles.user_heading}>Users</h1>
          <div className={styles.filter_container}></div>
        </div>
        <div className={styles.all_users_container}>
          {numbers.map((number) => {
            return (
              <>
              <div className={styles.top_header}></div>
                <header></header>
                <div className={styles.user_card}>
                  <img src={profileIcon} />
                  <div>
                    <h5 className={styles.username}>Mike</h5>
                    <p>User Score : 2</p>
                    <br />
                    <br />
                    {/* <br className={styles.vert_breaker}/> */}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
