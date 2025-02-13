import { Link } from "react-router-dom";
import {
  dashboardActionButtons,
  dropdownButton,
} from "../../../../../mocks/common/DashboardHeader/data";
const ActionButtons = () => {
  return (
    <div className="flex justify-between items-center gap-[24px]">
      {/* Action buttons */}

      {dashboardActionButtons.map((icon, index) => {
        return (
          <Link
            to={"/"}
            key={icon.imageId}
            className="flex flex-col justify-center items-center h-[40px]"
          >
            <img
              src={icon.imageUrl}
              alt={icon.imageLabel}
              key={icon.imageId}
              className={` ${index > 1 ? "ml-[24px]" : ""} w-[24px] h-[40px]`}
            />
            <p className="font-body text-[#424144] text-[11px]">{icon.label}</p>
          </Link>
        );
      })}

      <div className="relative">
        <select
          className="flex justify-between items-center bg-[#D8E9FA] pr-[24px] pl-[8px] rounded-[8px] w-[58px] h-[30px] text-[#5B5A5E] text-[16px] appearance-none"
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
          className="top-[50%] right-[8px] absolute w-[16px] h-[16px] -translate-y-[50%] transform"
        />
      </div>
    </div>
  );
};

export default ActionButtons;
