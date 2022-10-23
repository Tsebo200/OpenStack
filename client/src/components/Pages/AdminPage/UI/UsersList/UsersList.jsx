import React, { useEffect, useState } from "react";
import { useAxiosPrivate } from "../../../../../Hooks/useAxiosPrivate";
import { useRefreshToken } from "../../../../../Hooks/useRefreshToken";
import { Button } from "../../../../UI/Button/Button";

import styles from './UserList.module.scss'

export const UsersList = () => {
  const [users, setUsers] = useState();

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
    <section className={styles.row}>
      <nav>
        <p>Students</p>
        <p>Editors</p>
        <p>Admins</p>
      </nav>
      <Button onClick={() => refresh()}>Refresh</Button>
      <br/>
      {users?.length ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      ) : (
        <p>no users to display</p>
      )}
    </section>
  );
};
