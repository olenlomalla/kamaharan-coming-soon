import React from "react";

import Title from "@/components/ui/Title";

interface DiscoverServicesProps {
  images: string[];
  title: string;
}
const DiscoverServices: React.FC<DiscoverServicesProps> = ({
  images,
  title,
}) => {
  return (
    <div className="mt-[48px] flex flex-col items-center justify-center gap-[32px]">
      <Title>{title}</Title>
      <div className="flex items-center gap-[32px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Discover services"
            className="h-[144px] w-[144px] rounded-[100px]"
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverServices;
