import React, { useEffect, useState } from "react";
import { useAxiosPrivate } from "../../../../../Hooks/useAxiosPrivate";
import { useRefreshToken } from "../../../../../Hooks/useRefreshToken";
import RoleModal from "../../../../RoleModal/RoleModal";
import SuccessModal from "../../../../SuccessModal/SuccessModal";
import { Button } from "../../../../UI/Button/Button";

import styles from './UserList.module.scss'

export const UsersList = () => {
  const [users, setUsers] = useState();

  const [openModal, setOpenModal] = useState(false);

  const axiosPrivate = useAxiosPrivate()

  const refresh = useRefreshToken()

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("all-users", {
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
  }, []);

  return (
    // <section className={styles.row}>
    //   <nav>
    //     <p>Students</p>
    //     <p>Editors</p>
    //     <p>Admins</p>
    //   </nav>
    //   <Button onClick={() => refresh()}>Refresh</Button>
    //   <br/>
    //   {users?.length ? (
    //     <ul>
    //       {users.map((user) => (
    //         <li key={user._id}>{user.username}</li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>no users to display</p>
    //   )}
    // </section>
    <div className={styles.container}>
      <Button text="refresh" children="Refresh" onClick={() => refresh()}/>
      <table>
        <thead>
          <th>Username</th>
          <th>Email</th>
          <th>Student #</th>
          <th>Role</th>
        </thead>
        <tr>
          <td>CrunchuBurger420</td>
          <td>21100483@virtualwindow.co.za</td>
          <td>21100483</td>
          <td><p className={styles.changeRole} onClick={() => setOpenModal(true)}>Change Role</p></td>
        </tr>
      </table>
      {openModal ? <RoleModal onClick={() => setOpenModal(false)}/> : ""}
    </div>
  );
};
