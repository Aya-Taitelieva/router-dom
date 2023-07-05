import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import NotFounsPage from "../pages/NotFounsPage";
import MainLayout from "../layouts/MainLayout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Route>
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} /> */}
      <Route path="*" element={<NotFounsPage />} />
    </Routes>
  );
};

export default MainRoutes;
