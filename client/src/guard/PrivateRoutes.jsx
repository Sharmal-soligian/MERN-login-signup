import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ children, ...rest }) => {
  const isAuthenticatedUser = localStorage.getItem("token");
  return isAuthenticatedUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;