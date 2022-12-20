import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Article from "../pages/Article";
// 根路由
const RootRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="article" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
