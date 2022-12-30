import { getToken } from "@/utils/token";
import { message } from "antd";
import React from "react";
import type { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

const AuthRoute: FC<{ children: ReactElement; msg?: string }> = ({
  children,
  msg = "无权限",
}) => {
  message.error(msg);
  const token = getToken();
  if (token) {
    return <>{children}</>;
  }
  return <Navigate to="/login" />;
};

export default AuthRoute;
