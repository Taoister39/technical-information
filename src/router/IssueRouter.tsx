import AuthRoute from "@/components/AuthRoute";
import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Issue = lazy(() => import("@/pages/Issue"));
const IssuePreview = lazy(() => import("@/pages/Issue/Preview"));
const IssuePublish = lazy(() => import("@/pages/Issue/Publish"));

const IssueRouter = () => {
  return (
    <Routes>
      <Route index element={<Issue />} />
      <Route path="/preview/:id" element={<IssuePreview />} />
      <Route
        path="/publish"
        element={
          <AuthRoute msg="需要登录">
            <IssuePublish />
          </AuthRoute>
        }
      />
      <Route path="*" element={<Navigate to="/issue" />} />
    </Routes>
  );
};
export default IssueRouter;
