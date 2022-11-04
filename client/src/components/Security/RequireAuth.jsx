import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

export const RequireAuth = ({ allowedRoles }) => {
  const { Auth } = useAuth();
  const location = useLocation();
  console.log(Auth.roles);
  if (!Auth.roles) {
    const localRoles = JSON.parse(localStorage.getItem("roles"));
    const localAccessToken = localStorage.getItem("accessToken");

    return localRoles.find((role) => allowedRoles?.includes(role)) ? (
      <Outlet />
    ) : localAccessToken ? (
      <Navigate to="/Unauthorized" state={{ from: location }} replace />
    ) : (
      <Navigate to="/?action=login" state={{ from: location }} />
    );
  }
  return Auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : Auth?.accessToken ? (
    <Navigate to="/Unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/?action=login" state={{ from: location }} />
  );
};
