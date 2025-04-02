// components/SliderRow.tsx
import React from "react";
import Slider from "react-slick";

import { SliderRowProps } from "@/types/slider";

import SlideItem from "./SliderItem";

const SliderRow: React.FC<SliderRowProps> = ({
  images,
  offset,
  sliderRef,
  settings,
  likedSlides,
  handleLikeClick,
}) => {
  const responsiveSettings = {
    ...settings,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-4 md:mb-[16px]">
      <div className="px-2 md:px-0">
        <Slider ref={sliderRef} {...responsiveSettings} className="flex gap-2">
          {images.map((image, index) => {
            const absoluteIndex = index + offset;
            return (
              <div key={absoluteIndex} className="px-1">
                <SlideItem
                  image={image}
                  absoluteIndex={absoluteIndex}
                  liked={likedSlides.includes(absoluteIndex)}
                  onLike={handleLikeClick}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderRow;
