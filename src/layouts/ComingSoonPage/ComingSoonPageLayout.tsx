import React from "react";
import TerminalText from "@/components/coming-soon-page/TerminalText";

interface ComingSoonPageLayoutProps {
  setModalOpen: (isOpen: boolean) => void;
}

const ComingSoonPageLayout: React.FC<ComingSoonPageLayoutProps> = () => {
  return (
    <div className="z-10 relative flex flex-col justify-end items-center pb-20 min-h-[100svh]">
      <TerminalText />
      <div className="right-10 bottom-4 absolute flex items-center space-x-2 animate-fadeIn sm:right-10 sm:bottom-4 max-sm:right-4 max-sm:bottom-6">
        <img
          src="/icons/logo-white.svg"
          alt="Kamaharan Logo"
          className="object-contain max-sm:w-24"
        />
      </div>
    </div>
  );
};

export default ComingSoonPageLayout;
