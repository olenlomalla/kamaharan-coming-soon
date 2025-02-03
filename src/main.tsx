// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComingSoonPage from "./pages/ComingSoonPage";
import OnboardingPage from "./pages/onboarding/OnboardingPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import "./index.css";

// Add error boundary component
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error("Error caught by boundary:", error);
      setHasError(true);
    };
    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (hasError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 font-bold text-2xl">Something went wrong</h1>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 px-4 py-2 rounded text-white"
          >
            Reload page
          </button>
        </div>
      </div>
    );
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComingSoonPage />,
    errorElement: (
      <ErrorBoundary>
        <ComingSoonPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
    errorElement: (
      <ErrorBoundary>
        <OnboardingPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: (
      <ErrorBoundary>
        <DashboardPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "*",
    element: <ComingSoonPage />,
    errorElement: (
      <ErrorBoundary>
        <ComingSoonPage />
      </ErrorBoundary>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
