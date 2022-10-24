import React, { useEffect, useState } from "react";
import { Button } from "../../../../../UI/Button/Button";
import { Checkbox } from "../../../../../UI/Checkbox/Checkbox";
import styles from "./RoleModal.module.scss";

export default function RoleModal(props) {
  const [UserRoles, setUserRoles] = useState(props.ModalSettings.user.roles);

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

  console.log(Roles);

  const closeRoleModalHandler = (e) => {
    // console.log(e.target.id);
    props.setModalSettings({ user: null, open: false });
  };

  const CheckRoleHandler = (e) => {
    console.log(e.target.name);
    console.log(UserRoles);
    // const index = UserRoles.findIndex((role) => {
    //   return role === parseInt(e.target.name);
    // });

    // console.log(index);

    // if (index < 1) {
    //   setUserRoles((prevState) => {
    //     return prevState.push(e.target.name);
    //   });
    // } else {
    //   setUserRoles((prevState) => {
    //     return prevState.splice(index, 1);
    //   });
    // }
  };
  return (
    <>
      <div className={styles.gradient} onClick={closeRoleModalHandler}></div>
      <div className={styles.container}>
        <div className={styles.modal}>
          <h3>
            Roles for {props.ModalSettings.user.username} :{" "}
            {props.ModalSettings.user.email.split("@")[0]}
          </h3>
          <br></br>
          {Roles.map((role) => {
            return (
              <Checkbox
                checked={role.selected}
                onChange={CheckRoleHandler}
                name={role.code}
                // onClick={CheckRoleHandler}
                title={role.title}
              />
            );
          })}
          <div className={styles.btnCon}>
            <div className={styles.btnCon}>
              <Button onClick={props.onClick}>Save Roles</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
