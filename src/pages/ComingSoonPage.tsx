import React, { useEffect } from "react";

import GradientBackground from "@/components/coming-soon-page/background/GradientBackground";
import UserLogin from "@/components/login/UserLogin";
import ComingSoonPageLayout from "@/layouts/ComingSoonPage/ComingSoonPageLayout";
import { initGA } from "@/utils/analytics";

const ComingSoonPage: React.FC = () => {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <div className="relative flex flex-col overflow-hidden bg-black text-white sm:min-h-[100svh]">
      <GradientBackground />
      <UserLogin />
      <ComingSoonPageLayout />
    </div>
  );
};

export default ComingSoonPage;
