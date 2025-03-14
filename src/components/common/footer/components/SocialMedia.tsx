import { Link } from "react-router-dom";
import { socialMediaIcons } from "@/mocks/common/DashboardFooter/data";

export const SocialMedia = () => {
  return (
    <div className="flex items-center mt-[32px] mb-[32px] h-[24px]">
      <h3 className="font-body text-[#F54D33] text-lg">
        Follow us on social media
      </h3>
      <div className="flex justify-between items-center gap-[48px] ml-[48px]">
        {socialMediaIcons.map((icon) => (
          <Link to={"/"} key={icon.id}>
            <img
              src={icon.imageUrl}
              alt={icon.imageLabel}
              key={icon.id}
              className="w-[24px] h-[24px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
