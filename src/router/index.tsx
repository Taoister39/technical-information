import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Article from "../pages/Article";
import LayoutApp from "../pages/Layout";
import Issue from "../pages/Issue";
import Analyze from "../pages/Analyze";
// 根路由
const RootRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route index element={<Home />} />
          <Route path="article" element={<Article />} />
          <Route path="issue" element={<Issue />} />
          <Route path="analyze" element={<Analyze />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
