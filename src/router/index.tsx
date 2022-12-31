import React, { FC, Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

const LayoutApp = lazy(() => import("@/pages/Layout"));
const Home = lazy(() => import("@/pages/Home"));
// const Article = lazy(() => import("@/pages/Article"));
const Issue = lazy(() => import("@/pages/Issue"));
const Analyze = lazy(() => import("@/pages/Analyze"));
const Login = lazy(() => import("@/pages/Login"));

import { Spin } from "antd";
import UserRouter from "@/router/UserRouter";
import ArticleRouter from "@/router/ArticleRouter";
// 根路由
const RootRouter: FC = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <Spin />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LayoutApp />}>
            <Route index element={<Home />} />
            <Route path="/article/*" element={<ArticleRouter />} />
            <Route path="/issue" element={<Issue />} />
            <Route path="/analyze" element={<Analyze />} />
            <Route path="/user/*" element={<UserRouter />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
