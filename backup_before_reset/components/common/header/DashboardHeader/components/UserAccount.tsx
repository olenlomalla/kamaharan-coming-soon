import { Link } from "react-router-dom";
import { userButton } from "../../../../../mocks/common/DashboardHeader/data";

const UserAccount = () => {
  return (
    <Link to={"/"} className="flex flex-col justify-center ml-[10px]">
      <img
        src={userButton.imageUrl}
        alt={userButton.imageLabel}
        className="w-[24px] h-[24px]"
      />
      <p className="font-body text-[#424144] text-[11px] text-center">
        {userButton.label}
      </p>
    </Link>
  );
};

export default UserAccount;
