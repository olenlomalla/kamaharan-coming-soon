import { Link } from "react-router-dom";

import { footerLogo } from "../data";

const FooterLogo = () => {
  return (
    <Link to="/home">
      <img
        src={footerLogo.imageUrl}
        alt={footerLogo.imageLabel}
        className="mt-[48px] mb-[32px] w-[215px] h-[46px]"
      />
    </Link>
  );
};

export default FooterLogo;
