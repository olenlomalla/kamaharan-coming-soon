import { FeaturedSectionProps } from "@/types/view";

import BusinessCard from "./BusinessCard";

const FeaturedSection = ({ currentBusiness }: FeaturedSectionProps) => {
  return (
    <div className="mb-[32px] flex flex-wrap justify-center gap-[32px]">
      {currentBusiness?.featured.map((item) => (
        <BusinessCard key={item.id} image={item.image} />
      ))}
    </div>
  );
};

export default FeaturedSection;
