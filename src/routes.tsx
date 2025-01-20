// src/routes.tsx
import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

// Loading component
const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
  </div>
);

// Lazy load components
const ComingSoonPage = lazy(() => import('./pages/coming-soon-page'));
const DashboardPage = lazy(() => import('./pages/dashboard/DashboardPage'));
const OnboardingPage = lazy(() => import('./pages/onboarding/OnboardingPage'));

// Route configuration
export const routes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <DashboardPage />
      </Suspense>
    ),
  },
  {
    path: '/coming-soon',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <ComingSoonPage />
      </Suspense>
    ),
  },
  {
    path: '/onboarding',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <OnboardingPage />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];