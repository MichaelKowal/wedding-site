import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App.tsx";
import "./index.css";
import Info from "./components/info/Info.tsx";
import PhotoGallery from "./components/pictures/Gallery.tsx";
import Honeymoon from "./components/honeymoon/Honeymoon.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/wedding-pics",
    element: <PhotoGallery />,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/honeymoon",
    element: <Honeymoon />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
