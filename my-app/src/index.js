import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Research from "./pages/Research";
import Planning from "./pages/Planning";
import Design from "./pages/Design";
import Manufacturing from "./pages/Manufacturing";
import Sales from "./pages/Sales";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/research",
    element: <Research />,
  },
  {
    path: "/planning",
    element: <Planning />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/manufacturing",
    element: <Manufacturing />,
  },
  {
    path: "/sales",
    element: <Sales />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
