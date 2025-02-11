import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComingSoonPage from "./pages/ComingSoonPage";
import OnboardingPage from "./pages/onboarding/OnboardingPage";
import ExplorePage from "./pages/explore/ExplorePage";
import HomePage from "./pages/home/HomePage";
import DealsPage from "./pages/deals/DealsPage";
import ServicesPage from "./pages/services/ServicesPage";
import BlogPage from "./pages/blog/BlogPage";
import ErrorPage from "./pages/ErrorPage";
import "./index.css";
import FindBusiness from "./pages/find-business/FindBusiness";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComingSoonPage />,
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
  {
    path: "/deals",
    element: <DealsPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/find-business",
    element: <FindBusiness />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
