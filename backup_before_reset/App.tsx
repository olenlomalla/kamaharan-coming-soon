<<<<<<< HEAD
// App.tsx
import { ComingSoonPage } from './components/coming-soon-page'

const App = () => <ComingSoonPage />

export default App
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoonPage from "./pages/ComingSoonPage";
import HomePage from "./pages/home/HomePage";
import OnboardingPage from "./pages/onboarding/OnboardingPage";
import ExplorePage from "./pages/explore/ExplorePage";
import ServicesPage from "./pages/services/ServicesPage";
import DealsPage from "./pages/deals/DealsPage";
import FindBusiness from "./pages/find-business/FindBusiness";
import StartProject from "./pages/start-a-project/StartProject";
import KForBusiness from "./pages/KForBusiness/KForBusiness";

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
        <Route path="/find-business" element={<FindBusiness />} />
        <Route path="/start-a-project" element={<StartProject />} />
        <Route path="/kamaharan-for-business" element={<KForBusiness />} />
        <Route path="*" element={<ComingSoonPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
>>>>>>> origin/main
