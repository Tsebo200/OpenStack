import axios from "../api/axios";
import React from "react";
import { useAuth } from "./useAuth";

export const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    let refreshToken = localStorage.getItem("refreshToken");
    const response = await axios.post("/refresh", {
      // withCredentials: true,
      data: { refreshToken: refreshToken},
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };

  return refresh;
};
