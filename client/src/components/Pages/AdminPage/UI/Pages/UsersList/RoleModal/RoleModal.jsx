import React, { useEffect, useState } from "react";
import axios from "../../../../../../../api/axios";
import { Button } from "../../../../../../UI/Button/Button";
import { Checkbox } from "../../../../../../UI/Checkbox/Checkbox";
import styles from "./RoleModal.module.scss";

export default function RoleModal(props) {
  const [UserRoles, setUserRoles] = useState(props.ModalSettings.user.roles);

  console.log(UserRoles);

  const findChecked = (code) => {
    if (
      UserRoles.find((role) => {
        return role === code;
      })
    ) {
      return true;
    } else {
      return false;
    }
  };

  const [Roles, setRoles] = useState([]);

  useEffect(() => {
    setRoles([
      {
        title: "user",
        code: 2001,
        selected: findChecked(2001),
      },
      {
        title: "editor",
        code: 3001,
        selected: findChecked(3001),
      },
      {
        title: "admin",
        code: 5150,
        selected: findChecked(5150),
      },
    ]);
  }, [UserRoles]);

  const closeRoleModalHandler = (e) => {
    props.setModalSettings({ user: null, open: false });
  };

  const CheckRoleHandler = (e) => {
    console.log(e.target.name);
    console.log(UserRoles);
    const index = UserRoles.findIndex((role) => {
      return role === parseInt(e.target.name);
    });

    if (index > -1) {
      // only splice array when item is found
      setUserRoles((prevState) => {
        let newArray = [...prevState];
        newArray.splice(index, 1);
        return newArray;
      });
    } else {
      setUserRoles((prevState) => {
        return [...prevState, parseInt(e.target.name)];
      });
    }
  };

  const UpdateRolesHandler = async () => {
    const response = await axios.patch("/update-user-roles", {
      UserRoles: UserRoles,
      userId: props.ModalSettings.user._id,
    });
    closeRoleModalHandler();
    console.log(response);
  };
  return (
    <>
      <div className={styles.gradient} onClick={closeRoleModalHandler}></div>
      <div className={styles.container}>
        <div className={styles.close_btn} onClick={closeRoleModalHandler}>
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <div className={styles.modal}>
          <h3>
            Roles for {props.ModalSettings.user.username} #{" "}
            {props.ModalSettings.user.email.split("@")[0]}
          </h3>
          <br></br>
          {Roles.map((role, index) => {
            return (
              <Checkbox
                key={index}
                checked={role.selected}
                onChange={CheckRoleHandler}
                name={role.code}
                title={role.title}
              />
            );
          })}
          <div className={styles.btnCon}>
            <div className={styles.btnCon}>
              <Button onClick={UpdateRolesHandler}>Save Roles</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
