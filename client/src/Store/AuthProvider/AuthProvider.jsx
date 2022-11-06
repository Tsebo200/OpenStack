import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [Auth, setAuth] = useState({});
  let decodedString = "{}";
  if (Auth.accessToken) {
    decodedString = atob(Auth?.accessToken?.split(".")[1]);
  }

  useEffect(() => {
    setAuth((prevState) => ({
      ...prevState,
      userData: JSON.parse(decodedString),
    }));
  }, [decodedString]);

  useEffect(() => {
    const localAccessToken = localStorage.getItem("accessToken");
    const localRoles = JSON.parse(localStorage.getItem("roles"));
    setAuth({ roles: localRoles, accessToken: localAccessToken });
  }, []);

  return (
    <AuthContext.Provider value={{ Auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
