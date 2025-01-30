// components/ProtectedRoute.tsx
import ComingSoonPage from "@/pages/ComingSoonPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import OnboardingPage from "@/pages/onboarding/OnboardingPage";
import { createBrowserRouter, Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Implement your authentication check
  const isAuthenticated = () => {
    // For now, just a simple password check
    // In a real app, this would be more robust
    return localStorage.getItem("authenticated") === "true";
  };

  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

// Then in main.tsx
export const router = createBrowserRouter([
  {
    path: "/",
    element: <ComingSoonPage />,
  },
  {
    path: "/onboarding",
    element: (
      <ProtectedRoute>
        <OnboardingPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <ComingSoonPage />,
  },
]);
