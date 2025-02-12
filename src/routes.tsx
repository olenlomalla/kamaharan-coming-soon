import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const LoadingScreen = () => (
  <div className="flex justify-center items-center bg-black min-h-screen">
    <div className="border-white border-b-2 rounded-full w-12 h-12 animate-spin"></div>
  </div>
);

const ComingSoonPage = lazy(() => import("./pages/ComingSoonPage"));
const HomePage = lazy(() => import("./pages/home/HomePage"));
const OnboardingPage = lazy(() => import("./pages/onboarding/OnboardingPage"));
const ExplorePage = lazy(() => import("./pages/explore/ExplorePage"));
const DealsPage = lazy(() => import("./pages/deals/DealsPage"));
const ServicesPage = lazy(() => import("./pages/services/ServicesPage"));
const BlogPage = lazy(() => import("./pages/blog/BlogPage"));
const FindBusiness = lazy(() => import("./pages/find-business/FindBusiness"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <ComingSoonPage />
      </Suspense>
    ),
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <HomePage />
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
    path: "/explore",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <ExplorePage />
      </Suspense>
    ),
  },
  {
    path: "/deals",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <DealsPage />
      </Suspense>
    ),
  },
  {
    path: "/services",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <ServicesPage />
      </Suspense>
    ),
  },
  {
    path: "/blog",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <BlogPage />
      </Suspense>
    ),
  },
  {
    path: "/find-business",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <FindBusiness />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <ErrorPage />
      </Suspense>
    ),
  },
]);
