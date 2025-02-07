import React, { useState } from "react";
import GradientBackground from "@/components/coming-soon-page/background/GradientBackground";
import UserLogin from "@/components/login/UserLogin";
import ComingSoonPageLayout from "@/layouts/ComingSoonPage/ComingSoonPageLayout";
import BottomIcons from "@/components/common/BottomIcons";
import ComingSoonModal from "@/components/modal/ComingSoonModal/ComingSoonModal";

const ComingSoonPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative bg-black max-h-[100svh] font-syne text-white overflow-hidden">
      <GradientBackground />
      <UserLogin />
      <ComingSoonPageLayout setModalOpen={setIsModalOpen} />{" "}
      {isModalOpen && <ComingSoonModal onClose={handleModalClose} />}
      <BottomIcons isModalOpen={isModalOpen} />
    </div>
  );
};

export default ComingSoonPage;
