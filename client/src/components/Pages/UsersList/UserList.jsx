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
                    <div className={styles.user_card_one}>
                      <div className={styles.user_profile_icon}></div>
                      <h3 className={styles.user_name}>Mike</h3>
                      <h5 className={styles.user_score}>1</h5>
                      {/* {userInfo.userProfile}</h2> */}
                    </div> {/* End of User_Card One */}

                    {/* Start Of Card Two */}
                    <div className={styles.hor_spacer_one}></div>
                    <div className={styles.user_card_two}>
                      <div className={styles.user_profile_icon}></div>
                      <h3 className={styles.user_name}>Mike</h3>
                      <h5 className={styles.user_score}>1</h5>
                    </div> {/* End of User_Card_Two */}

                    {/* Start Of Card Three */}
                    <div className={styles.hor_spacer_two}></div>
                    <div className={styles.user_card_three}>
                      <div className={styles.user_profile_icon}></div>
                      <h3 className={styles.user_name}>Mike</h3>
                      <h5 className={styles.user_score}>1</h5>
                    </div> {/* End of User_Card_Three */}

                    {/* Start Of Card Four */}
                    <div className={styles.hor_spacer_three}></div>
                    <div className={styles.user_card_four}>
                      <div className={styles.user_profile_icon}></div>
                      <h3 className={styles.user_name}>Mike</h3>
                      <h5 className={styles.user_score}>1</h5>
                    </div> {/* End of User_Card_Four */}


                    {/* Start Of Row 2 */}
                    {/* Start Of Card 5 */}
                    <div className={styles.vert_spacer_one}></div>
                    <div className={styles.user_card_five}>
                      <div className={styles.user_profile_icon}></div>
                      <h3 className={styles.user_name}>Mike</h3>
                      <h5 className={styles.user_score}>1</h5>
                    </div> {/* End of User_Card_Five */}

                    {/* Start Of Card 6 */}
                    <div className={styles.user_card_six}>
                      <div className={styles.user_profile_icon}></div>
                      <h3 className={styles.user_name}>Mike</h3>
                      <h5 className={styles.user_score}>1</h5>
                    </div> {/* End of User_Card_Five */}

                     {/* Start Of Card 7 */}
                     <div className={styles.user_card_seven}>
                      <div className={styles.user_profile_icon}></div>
                      <h3 className={styles.user_name}>Mike</h3>
                      <h5 className={styles.user_score}>1</h5>
                    </div> {/* End of User_Card_Seven */}


                    {/* Start Of Card 8 */}
                    <div className={styles.user_card_eight}>
                      <div className={styles.user_profile_icon}></div>
                      <h3 className={styles.user_name}>Mike</h3>
                      <h5 className={styles.user_score}>1</h5>
                    </div> {/* End of User_Card_Eight */}

          




              </div> {/* End of users_container */}
          
    </div> {/* End of main-container */}
    </>

  )
}

