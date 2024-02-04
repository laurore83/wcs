import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/index.scss";

import Home from "./pages/Home.jsx";
import PhotoGallerie from "./pages/PhotoGallerie.jsx";
import Slideshow from "./pages/SlideShow.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/photo",
        element: <PhotoGallerie />,
      },

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/diapo",
        element: <Slideshow />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
