import React, { useEffect, useState } from "react";
import axios from "../../../../../api/axios";
import { useRefreshToken } from "../../../../../Hooks/useRefreshToken";
import SuccessModal from "../../../../SuccessModal/SuccessModal";
import { Button } from "../../../../UI/Button/Button";
import RoleModal from "./RoleModal/RoleModal";

import styles from "./UserList.module.scss";

export const UsersList = () => {
  const [users, setUsers] = useState();

  const [openModal, setOpenModal] = useState(false);

  const [ModalSettings, setModalSettings] = useState({
    user: null,
    open: false,
  });

  // const refresh = useRefreshToken();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const response = await axios.get("all-users", {
          signal: controller.signal,
        });
        // console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [ModalSettings]);

  const changeRoleModalHandler = (e) => {
    // console.log(e.target.id);
    const user = users.find(user => {
      return user._id === e.target.id
    })
    setModalSettings({ user: user, open: true });
  };

  return (
    <section className={styles.row}>
      {/* <nav>
        <p>Students</p>
        <p>Editors</p>
        <p>Admins</p>
      </nav> */}
      {/* <Button onClick={() => refresh()}>Refresh</Button> */}
      <br />
      {users?.length ? (
        <div className={styles.container}>
          {/* <Button text="refresh" children="Refresh" onClick={() => refresh()}/> */}

          <table>
            <thead>
              <th>Username</th>
              <th>Email</th>
              <th>Student #</th>
              <th>Roles</th>
              <th></th>
            </thead>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.email.split("@")[0]}</td>
                  <td>
                    {user.roles.map((role) => {
                      if (role === 2001) {
                        return " User ";
                      } else if (role === 5150) {
                        return " Admin ";
                      } else if (role === 3001) {
                        return " Editor ";
                      }
                    })}
                  </td>
                  <td>
                    <p
                      className={styles.changeRole}
                      onClick={changeRoleModalHandler}
                      id={user._id}
                    >
                      Change Role
                    </p>
                  </td>
                </tr>
              );
            })}
          </table>
          {ModalSettings.open ? <RoleModal ModalSettings={ModalSettings} setModalSettings={setModalSettings}/> : ""}
        </div>
      ) : (
        <p>no users to display</p>
      )}
    </section>
  );
};
