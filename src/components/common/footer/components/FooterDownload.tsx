import { Link } from "react-router-dom";

import { downloadApp } from "@/constants/common/DashboardFooter/data";

const FooterDownload = () => {
  return (
    <div className="mb-[32px] flex h-[40px] items-center">
      <h3 className="font-body text-sm text-[#F54D33]">
        Download Kamaharan app
      </h3>
      <div className="ml-[48px] flex items-center justify-between gap-[48px]">
        {downloadApp.map((icon) => (
          <Link to="/" key={icon.id}>
            <img
              src={icon.imageUrl}
              alt={icon.imageLabel}
              className="h-[40px] w-[135px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterDownload;
