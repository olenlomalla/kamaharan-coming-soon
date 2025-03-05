import React, { useEffect } from "react";
import GradientBackground from "@/components/coming-soon-page/background/GradientBackground";
import UserLogin from "@/components/login/UserLogin";
// import BottomIcons from "@/components/common/BottomIcons";
import ComingSoonPageLayout from "@/layouts/ComingSoonPage/ComingSoonPageLayout";
import { initGA } from "@/utils/analytics";

const ComingSoonPage: React.FC = () => {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <div className="relative bg-black max-h-[100svh] overflow-hidden text-white">
      <GradientBackground />
      <UserLogin />
      <ComingSoonPageLayout />
      {/* <BottomIcons isModalOpen={isModalOpen} /> */}
    </div>
  );
};

export default ComingSoonPage;
