import { Link } from "react-router-dom";

import { headerLogo } from "../../../../../constants/common/DashboardHeader/data";

export const HeaderLogo = () => {
  return (
    <Link to="/home">
      <img
        src={headerLogo.imageUrl}
        className="h-[40px] w-[40px]"
        alt={headerLogo.imageLabel}
      />
    </Link>
  );
};
