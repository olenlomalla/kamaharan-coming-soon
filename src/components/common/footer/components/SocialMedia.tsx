import { Link } from "react-router-dom";

import { socialMediaIcons } from "@/constants/common/DashboardFooter/data";

export const SocialMedia = () => {
  return (
    <div className="mb-[32px] mt-[32px] flex h-[24px] items-center">
      <h3 className="font-body text-lg text-[#F54D33]">
        Follow us on social media
      </h3>
      <div className="ml-[48px] flex items-center justify-between gap-[48px]">
        {socialMediaIcons.map((icon) => (
          <Link to={"/"} key={icon.id}>
            <img
              src={icon.imageUrl}
              alt={icon.imageLabel}
              key={icon.id}
              className="h-[24px] w-[24px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
