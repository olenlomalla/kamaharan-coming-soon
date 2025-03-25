import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import { socials } from "@/constants/pages/view/socials";
import { AboutSectionProps } from "@/types/view";

import SocialNetworkItem from "./SocialNetworkItem";

const AboutSection = ({ currentBusiness }: AboutSectionProps) => {
  const renderStarts = (rating: number) => {
    const stars = [];
    const totalStars = 5;
    const fullStars = Math.floor(rating);

    for (let i = 0; i < totalStars; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} color="#b8a888" />);
      } else {
        stars.push(<FaRegStar key={i} color="#b8a888" />);
      }
    }
    return stars;
  };

  const socialNetworks = [
    currentBusiness.facebook,
    currentBusiness.instagram,
    currentBusiness.x,
    currentBusiness.tiktok,
    currentBusiness.google,
  ];

  return (
    <div className="bg-[#F8F7F4] p-[32px]">
      <div className="mb-2 flex items-center gap-3">
        <img src={currentBusiness.image} alt="Company Image" />
        <div>
          <h1 className="font-heading text-[32px] font-semibold text-[#424144]">
            {currentBusiness.name}
          </h1>
          <h2 className="font-body text-[11px]">
            {currentBusiness.description}
          </h2>
          <p className="text-sm text-[#8E8C91]">{currentBusiness.location}</p>
          <div className="flex items-center gap-2">
            <p className="font-body text-sm font-[560] text-[#424144]">
              {`${currentBusiness.rating_score}`}
            </p>
            <span>|</span>
            {renderStarts(currentBusiness.rating_score)}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="rounded-full border-2 border-[#F54D33] px-5 text-sm text-[#F54D33]">
          Follow Business
        </button>
        {socials.map((social) => (
          <SocialNetworkItem
            key={social.id}
            image={social.image}
            link={socialNetworks[social.id]}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
