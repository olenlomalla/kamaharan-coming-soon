import React from "react";
import GradientBackground from "@/components/coming-soon-page/background/GradientBackground";
import UserLogin from "@/components/login/UserLogin";
import ComingSoonPageLayout from "@/layouts/coming-soon-page/ComingSoonPageLayout";
// import LoadingSpinner from "@/components/LoadingSpinner";
import BottomIcons from "@/components/common/BottomIcons";

const ComingSoonPage: React.FC = () => {
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-syne">
      {/* {isLoading && <LoadingSpinner />} */}
      <GradientBackground />
      <UserLogin />
      <ComingSoonPageLayout />
      <BottomIcons />
    </div>
  );
};

export default ComingSoonPage;
