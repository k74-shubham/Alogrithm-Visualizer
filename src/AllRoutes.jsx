import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Sorting } from "./components/sorting/Sorting";

const routes = [
  { path: "/", Component: Home },
  { path: "/sorting/:page", Component: Sorting },
];

export const AllRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.Component />} />
      ))}
    </Routes>
  );
};
