import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/index.scss";

import Home from "./pages/Home.jsx";
import PhotoGallerie from "./pages/PhotoGallerie.jsx";
import Slideshow from "./pages/SlideShow.jsx";
import Thanks from "./pages/Thanks.jsx";
import Videos from "./components/Videos.jsx";

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
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/thanks",
        element: <Thanks />,
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
