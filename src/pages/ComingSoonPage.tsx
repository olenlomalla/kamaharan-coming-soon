import React from "react";
import GradientBackground from "@/components/coming-soon-page/background/GradientBackground";
import UserLogin from "@/components/login/UserLogin";
import ComingSoonPageLayout from "@/layouts/ComingSoonPage/ComingSoonPageLayout";
// import LoadingSpinner from "@/components/LoadingSpinner";
import BottomIcons from "@/components/common/BottomIcons";

const ComingSoonPage: React.FC = () => {
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative bg-black min-h-[100svh] font-syne text-white overflow-hidden">
      {/* {isLoading && <LoadingSpinner />} */}
      <GradientBackground />
      <UserLogin />
      <ComingSoonPageLayout />
      <BottomIcons />
    </div>
  );
};

export default ComingSoonPage;
