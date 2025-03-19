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
    <div className="relative bg-black min-h-[100svh] overflow-hidden flex flex-col text-white">
      <GradientBackground />
      <UserLogin />
      <ComingSoonPageLayout />
    </div>
  );
};

export default ComingSoonPage;
