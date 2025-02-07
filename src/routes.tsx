import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const LoadingScreen = () => (
  <div className="flex justify-center items-center bg-black min-h-screen">
    <div className="border-white border-b-2 rounded-full w-12 h-12 animate-spin"></div>
  </div>
);

const ComingSoonPage = lazy(() => import("./pages/ComingSoonPage"));
const DashboardPage = lazy(() => import("./pages/home/HomePage"));
const OnboardingPage = lazy(() => import("./pages/onboarding/OnboardingPage"));

export const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <DashboardPage />
      </Suspense>
    ),
  },
  {
    path: "/coming-soon",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <ComingSoonPage />
      </Suspense>
    ),
  },
  {
    path: "/onboarding",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <OnboardingPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];
