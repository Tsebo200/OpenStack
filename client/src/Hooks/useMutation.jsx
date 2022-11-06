import React from "react";
import { useState } from "react";
import axios from "../api/axios";

export default function useMutation({ url, method = "POST" }) {
  const [state, setState] = useState({
    isLoading: false,
    error: "",
  });

  const fn = async (data) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
  };
  axios({ url, method, data })
    .then(() => {
      setState({ isLoading: false, error: "" });
    })
    .catch(() => {
      setState({ isLoading: false, error });
    });
  return { mutate: fn, ...state };
}
