import React, { useReducer } from "react";

import UserContext from "./user-context";

const defaultUserState = {
  userData: {},
};

const UserReducer = (state, action) => {
    if (action.type === "LOGIN") { 
        
    }
};

export const UserProvider = () => {
  const [userState, dispatchUserAction] = useReducer(
    UserReducer,
    defaultUserState
  );

  const userContext = {
    userData: {},
  };
  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};
