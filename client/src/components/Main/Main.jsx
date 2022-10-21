import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../Header/Header";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Main = () => {
  let query = useQuery();
  return (
    <>
      <Header action={query.get('action')}/>
      <Outlet />
    </>
  );
};
