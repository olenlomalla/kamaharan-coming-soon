import React from "react";

import Title from "@/components/ui/Title";
import { Images } from "@/types/customSliderModified";

interface DiscoverServicesProps {
  images: Images[];
  title: string;
}
const DiscoverServices: React.FC<DiscoverServicesProps> = ({
  images,
  title,
}) => {
  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-4 md:mt-[48px] md:gap-[32px]">
      <Title>{title}</Title>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-[32px]">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.image}
            alt="Discover services"
            className="h-[80px] w-[80px] rounded-[100px] object-cover sm:h-[100px] sm:w-[100px] md:h-[120px] md:w-[120px] lg:h-[144px] lg:w-[144px]"
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverServices;
