import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoonPage from "./pages/ComingSoonPage";
import HomePage from "./pages/home/HomePage";
import OnboardingPage from "./pages/onboarding/OnboardingPage";
import ExplorePage from "./pages/explore/ExplorePage";
import ServicesPage from "./pages/services/ServicesPage";
import DealsPage from "./pages/deals/DealsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="*" element={<ComingSoonPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
