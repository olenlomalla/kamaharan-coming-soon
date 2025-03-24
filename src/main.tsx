import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { LocationProvider } from "./context/LocationContext";
import "./index.css";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocationProvider>
      <RouterProvider router={router} />
    </LocationProvider>
  </React.StrictMode>,
);
