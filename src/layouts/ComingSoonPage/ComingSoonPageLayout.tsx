import React from "react";

interface ComingSoonPageLayoutProps {
  setModalOpen: (isOpen: boolean) => void; // пропс для відкриття модалки
}

const ComingSoonPageLayout: React.FC<ComingSoonPageLayoutProps> = ({
  setModalOpen,
}) => {
  return (
    <div className="relative z-10 flex flex-col justify-center items-center mt-[110px] max-sm:pb-[180px] max-md:pb-[70px] min-h-screen">
      <div className="space-y-8 mx-auto w-full max-w-[900px] text-center">
        <h1 className="flex flex-col items-center mx-auto font-bold font-syne text-[#D8E9FA] text-[60px] text-center max-[375px]:text-[48px] max-[425px]:text-[54px] leading-[60px] animate-fadeIn">
          <span className="sm:inline hidden">This Changes Everything...</span>
          <span className="block sm:hidden text-center leading-[50px]">
            This
            <br />
            Changes
            <br />
            Everything
            <br />
            ...
          </span>
        </h1>

        <div className="mx-auto px-4 sm:px-6 max-w-md animate-fadeIn">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setModalOpen(true)} // відкриття модалки при натисканні кнопки
              className="bg-[#B8A888] sm:mb-[20px] px-8 py-3 rounded-lg w-full font-medium font-syne text-[#1A2B3C] text-[16px] text-center leading-[24px] transition-colors"
            >
              Join Waitlist
            </button>

            <p className="pb-2 text-[#B8A888] text-sm">
              Join us in connecting London's communities with local businesses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPageLayout;
