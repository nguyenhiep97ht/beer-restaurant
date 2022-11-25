import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import BeerRestaurantHome from "./pages/home";
import FootballGuess from "./pages/guess";
import BasicLayout from "./components/layouts/BasicLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <BeerRestaurantHome />,
      },
      {
        path: "/guess",
        element: <FootballGuess />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
