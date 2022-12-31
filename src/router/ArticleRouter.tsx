import AuthRoute from "@/components/AuthRoute";
import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Article = lazy(() => import("@/pages/Article"));
const ArticlePreview = lazy(() => import("@/pages/Article/Preview"));
const ArticlePublish = lazy(() => import("@/pages/Article/Publish"));

const ArticleRouter = () => {
  return (
    <Routes>
      <Route index element={<Article />} />
      <Route
        path="/preview/:id"
        element={
          <AuthRoute msg="需要登录">
            <ArticlePreview />
          </AuthRoute>
        }
      />
      <Route
        path="/publish"
        element={
          <AuthRoute msg="需要登录">
            <ArticlePublish />
          </AuthRoute>
        }
      />
      <Route path="*" element={<Navigate to="/article" />} />
    </Routes>
  );
};

export default ArticleRouter;
