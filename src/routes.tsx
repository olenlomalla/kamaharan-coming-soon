import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const LoadingScreen = () => (
  <div className="flex min-h-screen items-center justify-center bg-black">
    <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
  </div>
);

const wrapWithProviders = (Component: React.ComponentType) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component />
    </Suspense>
  );
};

const ComingSoonPage = lazy(() => import("./pages/ComingSoonPage"));
const HomePage = lazy(() => import("./pages/home/HomePage"));
const OnboardingPage = lazy(() => import("./pages/onboarding/OnboardingPage"));
const RegistrationPage = lazy(
  () => import("./pages/registration/RegistrationPage"),
);
const ExplorePage = lazy(() => import("./pages/explore/ExplorePage"));
const DealsPage = lazy(() => import("./pages/deals/DealsPage"));
const ServicesPage = lazy(() => import("./pages/services/ServicesPage"));
const BlogPage = lazy(() => import("./pages/blog/BlogPage"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost"));
const ViewPage = lazy(() => import("./pages/view/ViewPage"));
const FindBusiness = lazy(() => import("./pages/find-business/FindBusiness"));
const StartAProject = lazy(
  () => import("./pages/start-a-project/StartProject"),
);
const KForBusiness = lazy(() => import("./pages/KForBusiness/KForBusiness"));
const BrothersUmrah = lazy(() => import("./pages/BrothersUmrah"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const PrivacyPolicyForm = lazy(() => import("./pages/PrivacyPolicyForm"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
// const SistersEvent = lazy(() => import("./pages/SistersEvent"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: wrapWithProviders(ComingSoonPage),
  },
  {
    path: "/home",
    element: wrapWithProviders(HomePage),
  },
  {
    path: "/onboarding",
    element: wrapWithProviders(OnboardingPage),
  },
  {
    path: "/register",
    element: wrapWithProviders(RegistrationPage),
  },
  {
    path: "/explore",
    element: wrapWithProviders(ExplorePage),
  },
  {
    path: "/deals",
    element: wrapWithProviders(DealsPage),
  },
  {
    path: "/services",
    element: wrapWithProviders(ServicesPage),
  },
  {
    path: "/blog",
    element: wrapWithProviders(BlogPage),
  },
  {
    path: "/blog/post/:id",
    element: wrapWithProviders(BlogPost),
  },
  {
    path: "/business/:id",
    element: wrapWithProviders(ViewPage),
  },
  {
    path: "/find-business",
    element: wrapWithProviders(FindBusiness),
  },
  {
    path: "/start-a-project",
    element: wrapWithProviders(StartAProject),
  },
  {
    path: "/kamaharan-for-business",
    element: wrapWithProviders(KForBusiness),
  },
  {
    path: "/brothersumrah",
    element: wrapWithProviders(BrothersUmrah),
  },
  // {
  //   path: "/sistersevent",
  //   element: wrapWithProviders(SistersEvent),
  // },
  {
    path: "/terms",
    element: wrapWithProviders(TermsAndConditions),
  },
  {
    path: "/privacy",
    element: wrapWithProviders(PrivacyPolicy),
  },
  {
    path: "/privacy-form",
    element: wrapWithProviders(PrivacyPolicyForm),
  },
  {
    path: "*",
    element: wrapWithProviders(ErrorPage),
  },
]);
