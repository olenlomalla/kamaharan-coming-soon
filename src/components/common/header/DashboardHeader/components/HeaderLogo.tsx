import { Link } from "react-router-dom";

import { headerLogo } from "../../../../../mocks/common/DashboardHeader/data";

export const HeaderLogo = () => {
  return (
    <Link to="/home">
      <img
        src={headerLogo.imageUrl}
        className="w-[40px] h-[40px]"
        alt={headerLogo.imageLabel}
      />
    </Link>
  );
};
