import { accountPopupSections } from "@/constants/common/DashboardHeader/data";
import { UserAccountPopupProps } from "@/types/dashboardHeader";

import SectionItem from "./SectionItem";

const UserAccountPopup = ({ isOpen, onClose }: UserAccountPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-[80px] z-10 w-[280px] bg-white py-6 shadow-lg">
      <div className="mb-6 flex flex-col items-center">
        <button onClick={onClose} className="self-start px-6">
          <img src="/icons/dashboard/header/back-icon.svg" alt="" />
        </button>
        <div className="mb-4 h-[60px] w-[60px] overflow-hidden rounded-full">
          <img
            src="/icons/dashboard/header/user-avatar.svg"
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="mb-2 font-heading text-[18px] font-bold">Julia Kama</h3>
        <div className="flex items-center gap-2">
          <img
            src="/icons/dashboard/header/location.svg"
            alt="Location"
            className="h-4 w-4"
          />
          <span className="text-[14px] text-[#424144]">Baker Street</span>
        </div>
      </div>

      <nav className="px-6">
        {accountPopupSections.map((section) => (
          <SectionItem
            key={section.id}
            name={section.name}
            image={section.image}
          />
        ))}
      </nav>

      <div className="my-4 h-[1px] bg-[#E5E7EB]" />

      <div className="px-6">
        <button className="flex w-full items-center gap-4 rounded-lg py-3 transition-colors hover:bg-gray-50">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F54D33] font-bold text-white">
            BP
          </div>
          <span className="font-syne text-[16px]">Switch Account</span>
        </button>
      </div>
    </div>
  );
};

export default UserAccountPopup;
