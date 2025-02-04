import { Link } from "react-router-dom";

import { headerLogo } from "../data";

export const HeaderLogo = () => {
  return (
    <Link to="/">
      <img
        src={headerLogo.imageUrl}
        className="w-[40px] h-[40px]"
        alt={headerLogo.imageLabel}
      />
    </Link>
  );
};
