import React, { useState, useRef, useEffect } from "react";
import styles from "./UserSettings.module.scss";
import formLogo from "../../../assets/OpenStackLogo.png";
import profileIcon from "../../../assets/profilePicture.jpg";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";

import StockCards from "../Achievements/Achievements";
// import Button from "../../Button/Button"
import Axios from "axios";

const UserSettings = () => {
  return (
    <div className={styles.user_settings_container}>
      <header>
        <img src={profileIcon}/>
        <h1>username</h1>
        <ion-icon name="pencil-outline"></ion-icon>
      </header>

      <div className={styles.user_questions_container}>
          <header>
            <h3 className={styles.questions_heading}>Questions</h3>
            <header className={styles.questions_nav}>

            {/* <table>
            <tr>
            <td>
            <div className={styles.score_container}>
            <p className={styles.score_text}>Score</p>
            </div> */}
            {/* <div className={styles.vert_line}></div> */}

            {/* </td> */}

            {/* <div className={styles.test}></div> */}
            {/* <div className={styles.vert_line}></div> */}
            {/* <td>
            <div className={styles.activity_container}>
            <p className={styles.activity_text}>Activity</p>
            </div>
            </td> */}

            {/* <td>
            <div className={styles.newest_container}>
            <p className={styles.newest_text}>Newest</p>
            </div>
            </td> */}

            {/* <td>
            <div className={styles.views_container}>
            <p className={styles.views_text}>Views</p>
            </div>
            </td>
            </tr>
            </table> */}

            </header>
              {/* <div className={styles.views_container}>
   
              <div className={styles.views}></div> */}
              {/* </div> */}
            </header>
          {/* </header> */}



          {/* Inside the Question Container */}
          <div className={styles.questions_container_content_box}>
          <div className={styles.questions_row}>
          <div className={styles.question_notification_container}>
            <h4 className={styles.question_notification_counter_text}>0</h4>
          </div> 
          <p className={styles.question_text}>Adding custom SVGs to ion icons</p>
          <p className={styles.date_text}>Oct 31</p>
            
            
            {/* Adding more static questions */}
          <div className={styles.question_notification_container}>
          <h4 className={styles.question_notification_counter_text}>2</h4>
          </div> 
          {/* <div className={styles.question_notification_container}></div> */}
          <p className={styles.question_text}>Adding custom SVGs to ion icons</p>
          <p className={styles.date_text}>Oct 31</p>
          </div>


          


          </div>
        </div> {/* End of Questions container */}




        {/* <header> */}
      
        <div className={styles.user_questions_container}>
        <header className={styles.answers_heading}>
            <h3 className={styles.questions_heading}>Answers</h3>
            {/* <header className={styles.answers_nav}>
            <table>
            <tr>
            <td>
            <div className={styles.score_container}>
            <p className={styles.score_text}>Score</p>
            </div>
            <div className={styles.vert_line}></div>

            </td>
            <div className={styles.test}></div>
            <div className={styles.vert_line}></div>
            <td>
            <div className={styles.activity_container}>
            <p className={styles.activity_text}>Activity</p>
            </div>
            </td>

            <td>
            <div className={styles.newest_container}>
            <p className={styles.newest_text}>Newest</p>
            </div>
            </td>
            </tr>
            </table>
          </header> End of Answers Nav */}
          </header>

          {/* inside the answers container */}
          <div className={styles.questions_container_content_box}>
          <div className={styles.questions_row}>
          <div className={styles.question_notification_container}>
            <h4 className={styles.question_notification_counter_text}>1</h4></div> 
          <p className={styles.question_text}>Change link colour with main div</p>
          <p className={styles.date_text}>Oct 31</p>
          </div>
        </div>

          {/* inside the Badges container */}
          {/* <header className={styles.answers_heading}>
            <h3 className={styles.questions_heading}>Answers</h3>
            <header className={styles.answers_nav}>
            <table>
            <tr>
            <td>
            <div className={styles.score_container}>
            <p className={styles.score_text}>Score</p>
            </div>
            <div className={styles.vert_line}></div>

            </td>
            <div className={styles.test}></div>
            <div className={styles.vert_line}></div>
            <td>
            <div className={styles.activity_container}>
            <p className={styles.activity_text}>Activity</p>
            </div>
            </td>

            <td>
            <div className={styles.newest_container}>
            <p className={styles.newest_text}>Newest</p>
            </div>
            </td>
            </tr>
            </table> 
          </header> End of Answers Nav
          </header>
             {/* inside the Badges container */}

             
          <div className={styles.questions_container_content_box}>
          <div className={styles.questions_row}>
          <div className={styles.question_notification_container}>
            <h4 className={styles.question_notification_counter_text}>1</h4></div> 
          <p className={styles.question_text}>Change link colour with main div</p>
          <p className={styles.date_text}>Oct 31</p>
          </div>
          </div>
        {/* <div className={styles.badges_container_}></di> */}
      </div>{/* End of answers_container */}

  </div>
  );







  
  //  // Read all the DB Items
  //  const [readProducts, setReadProducts] = useState();
  //  const [renderProducts, setRenderProducts] = useState(false);

  //  useEffect(()=>{
  //      Axios.get('http://localhost:5001/api/userSetting')
  //      .then(res =>{

  //          let data = res.data;
  //          console.log(data);
  //          const productItem = data.map((item)=> <StockCards key={item._id} productId={item._id}

  //          username={item.username}  achievement1={item.achievement1} achievement2={item.achievement2}  achievement3={item.achievement3}

  //          editRender={setRenderProducts}/>);
  //          setReadProducts(productItem);
  //          setRenderProducts(false);
  //      });
  //  }, [renderProducts]);

  // return (
  //     //Add a margin top of 70px to accommodate for nav bar

  //   <div className={styles.settings_background}>
  //     <div className={styles.settings_form_container}>

  //       <form
  //       className={`${styles.settings_box} ${styles.inputs_container}`}>

  //           <img className={styles.form_logo} src={formLogo} />
  //           {/* <br />
  //           <br/> */}
  //             <center><h2>User Settings</h2></center>
  //           <hr/>
  //           <br/>
  //           <center><h5>Hi user please edit your profile info here</h5></center>
  //           <img className={styles.profile_icon} src={profileIcon} />
  //           <div className={styles.labels_container}>
  //           <h3 className={styles.username_label}>Your Current UserName:</h3>
  //           <div className={styles.input_container}>
  //           <Input label="Trevor100" name="new_username" type="username" />
  //           <br/>
  //           <h3 className={styles.email_label}>Your Current Email:</h3>
  //           <Input label="200100@virtualwindow.co.za" name="new_email" type="email" />
  //           </div>
  //           </div>
  //           <div className={styles.achieve_container}>
  //             {/* <p>Hi user here are your achievements</p> */}
  //             {readProducts}
  //             <div className={styles.achievement}></div>
  //             {/* <Button>Save Changes</Button> */}
  //           </div>
  //         <Button>Save Changes</Button>
  //         </form>
  //     </div>

  //   </div>
  // );
};
export default UserSettings;
