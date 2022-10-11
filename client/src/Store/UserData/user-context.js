import React from "react";

const UserContext = React.createContext({
    userData: {},
    Login: (username, password)=> {},
    Logout: () => {},
    CreateUser: () => {}
})

export default UserContext