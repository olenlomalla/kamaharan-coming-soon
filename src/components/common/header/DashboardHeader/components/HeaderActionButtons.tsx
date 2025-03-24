import { Link } from "react-router-dom";

import {
  dashboardActionButtons,
  dropdownButton,
} from "@/constants/common/DashboardHeader/data";

const ActionButtons = () => {
  return (
    <div className="flex items-center justify-between gap-[24px]">
      {dashboardActionButtons.map((icon, index) => {
        return (
          <Link
            to={"/"}
            key={icon.imageId}
            className="flex h-[40px] flex-col items-center justify-center"
          >
            <img
              src={icon.imageUrl}
              alt={icon.imageLabel}
              key={icon.imageId}
              className={` ${index > 1 ? "ml-[24px]" : ""} h-[40px] w-[24px]`}
            />
            <p className="font-body text-[11px] text-[#424144]">{icon.label}</p>
          </Link>
        );
      })}

      <div className="relative">
        <select
          className="flex h-[30px] w-[58px] appearance-none items-center justify-between rounded-[8px] bg-[#FFF1F0] pl-[8px] pr-[24px] text-[16px] text-[#5B5A5E]"
          aria-label="Select Language"
        >
          <option value="en" className="text-[#5B5A5E]">
            EN
          </option>
          <option value="es" className="text-[#5B5A5E]">
            ES
          </option>
          <option value="fr" className="text-[#5B5A5E]">
            FR
          </option>
        </select>
        <img
          src={dropdownButton.imageUrl}
          alt={dropdownButton.imageLabel}
          className="absolute right-[8px] top-[50%] h-[16px] w-[16px] -translate-y-[50%] transform"
        />
      </div>
    </div>
  );
};

export default ActionButtons;
