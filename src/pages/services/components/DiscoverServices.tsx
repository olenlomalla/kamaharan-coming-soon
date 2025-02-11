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
    <div className="flex flex-col justify-center items-center gap-[32px] mt-[48px]">
      <Title>{title}</Title>
      <div className="flex items-center gap-[32px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Discover services"
            className="rounded-[100px] w-[144px] h-[144px]"
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverServices;
