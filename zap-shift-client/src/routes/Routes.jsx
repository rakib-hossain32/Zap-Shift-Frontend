import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import AuthLayout from "../Root/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("./serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "about-us",
        Component: About,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
