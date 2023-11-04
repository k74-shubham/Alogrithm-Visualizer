import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";

const routes = [{ path: "/", Component: Home }];

export const AllRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.Component />} />
      ))}
    </Routes>
  );
};
