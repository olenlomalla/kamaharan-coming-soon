import React, { useState } from "react";
import GradientBackground from "@/components/coming-soon-page/background/GradientBackground";
import UserLogin from "@/components/login/UserLogin";
// import BottomIcons from "@/components/common/BottomIcons";
import ComingSoonModal from "@/components/modal/ComingSoonModal/ComingSoonModal";
import ComingSoonPageLayout from "@/layouts/ComingSoonPage/ComingSoonPageLayout";

const ComingSoonPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative bg-black max-h-[100svh] overflow-hidden font-syne text-white">
      <GradientBackground />
      <UserLogin />
      <ComingSoonPageLayout setModalOpen={setIsModalOpen} />
      {isModalOpen && <ComingSoonModal onClose={handleModalClose} />}
      {/* <BottomIcons isModalOpen={isModalOpen} /> */}
    </div>
  );
};

export default ComingSoonPage;
