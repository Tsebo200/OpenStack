import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./VerifyAccount.module.scss";
import formLogo from "../../../assets/OpenStackLogo.png";
import axios from "../../../api/axios";

export const VerifyAccount = () => {
  const { accountData } = useParams();

  const [Error, setError] = useState('')

  useEffect(() => {
    let isMounted = true;
    const verifyAccount = async () => {
      try {
        const response = await axios.post("/api/create-user", {
         accountData: accountData,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
        if (err.response?.status === 401) {
          setError("This account has been registered already try sign in")
        } else {
          setError("There was an error verifying your account try register")
        }
        
      }
    };

    verifyAccount();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={styles.verify_background}>
      <div className={styles.verify_container}>
        <img src={formLogo} />
        <h2>Your account has been verified</h2>
        <p>{Error}</p>
        
        <Link to="/?action=login">Sign In</Link>
      </div>
    </div>
  );
};
