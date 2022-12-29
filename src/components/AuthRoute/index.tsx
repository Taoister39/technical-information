import { getToken } from "@/utils/token";
import React from "react";
import type { FC } from "react";
import { Navigate } from "react-router-dom";

const AuthRoute: FC<{ children: FC }> = ({ children }) => {
  const token = getToken();
  if (token) {
    return <>{children}</>;
  }
  return <Navigate to="/login" />;
};

export default AuthRoute;
