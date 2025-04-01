import { Link } from "react-router-dom";

import { socialMediaIcons } from "@/constants/common/DashboardFooter/data";

export const SocialMedia = () => {
  return (
    <div className="my-[32px] flex h-[24px] items-center">
      <h3 className="font-body text-lg text-[#F54D33]">
        Follow us on social media
      </h3>
      <div className="ml-0 flex items-center justify-between gap-2 sm:ml-8 sm:gap-6 md:ml-12 md:gap-8 lg:ml-[48px] lg:gap-[48px]">
        {socialMediaIcons.map((icon) => (
          <Link to={"/"} key={icon.id}>
            <img
              src={icon.imageUrl}
              alt={icon.imageLabel}
              key={icon.id}
              className="size-[24px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
