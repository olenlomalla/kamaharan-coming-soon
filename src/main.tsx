import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { LocationProvider } from "./context/LocationContext";

import "./index.css";
import "./polyfills";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocationProvider>
      <RouterProvider router={router} />
    </LocationProvider>
  </React.StrictMode>
);
