import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoonPage from "./pages/ComingSoonPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import OnboardingPage from "./pages/onboarding/OnboardingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
