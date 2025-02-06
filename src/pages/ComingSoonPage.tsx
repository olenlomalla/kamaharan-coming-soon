import React, { useState } from "react";
import GradientBackground from "@/components/coming-soon-page/background/GradientBackground";
import UserLogin from "@/components/login/UserLogin";
import ComingSoonPageLayout from "@/layouts/ComingSoonPage/ComingSoonPageLayout";
import BottomIcons from "@/components/common/BottomIcons";
import ComingSoonModal from "@/components/modal/ComingSoonModal";

const ComingSoonPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // стан для модалки

  const handleModalClose = () => {
    setIsModalOpen(false); // закриття модалки
  };

  return (
    <div className="relative bg-black max-h-[100svh] font-syne text-white overflow-hidden">
      <GradientBackground />
      <UserLogin />
      <ComingSoonPageLayout setModalOpen={setIsModalOpen} />{" "}
      {/* Передаємо пропс setModalOpen */}
      {/* Відображення модалки, якщо вона відкрита */}
      {isModalOpen && <ComingSoonModal onClose={handleModalClose} />}
      {/* Іконки з передачею стану модалки */}
      <BottomIcons isModalOpen={isModalOpen} />
    </div>
  );
};

export default ComingSoonPage;
