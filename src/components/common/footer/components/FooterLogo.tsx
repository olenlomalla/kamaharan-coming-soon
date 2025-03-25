import { Link } from "react-router-dom";

import { footerLogo } from "../../../../constants/common/DashboardFooter/data";

const FooterLogo = () => {
  return (
    <Link to="/home">
      <img
        src={footerLogo.imageUrl}
        alt={footerLogo.imageLabel}
        className="mb-[32px] mt-[48px] h-[46px] w-[215px]"
      />
    </Link>
  );
};

export default FooterLogo;
