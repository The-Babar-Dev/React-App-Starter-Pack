import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  //   const token = sessionStorage.getItem("Auth-Token");
  const token = true;

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default Auth;
