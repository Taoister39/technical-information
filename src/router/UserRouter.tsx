import AuthRoute from "@/components/AuthRoute";
import ArticleStar from "@/pages/User/ArticleStar";
import React, { lazy } from "react";

import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const User = lazy(() => import("@/pages/User"));
const UserInfo = lazy(() => import("@/pages/User/UserInfo"));
const UpdatePwd = lazy(() => import("@/pages/User/UpdatePwd"));
const UpdateAvatar = lazy(() => import("@/pages/User/UpdateAvatar"));

const UserRouter: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoute msg="未登录">
            <User />
          </AuthRoute>
        }
      >
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/updatepwd" element={<UpdatePwd />} />
        <Route path="/updateavatar" element={<UpdateAvatar />} />
        <Route path="/article/star" element={<ArticleStar />} />
        <Route path="*" element={<Navigate to="/user/userinfo" />} />
        <Route index element={<Navigate to="/user/userinfo" />} />
      </Route>
    </Routes>
  );
};

export default UserRouter;
