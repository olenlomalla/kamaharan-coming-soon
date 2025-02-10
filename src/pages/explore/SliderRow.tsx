// components/SliderRow.tsx
import React from "react";
import Slider from "react-slick";
import SlideItem from "./SliderItem";

interface SliderRowProps {
  images: {
    src: string;
    text: string;
    description: string;
  }[];
  offset: number;
  sliderRef: React.RefObject<Slider>;
  settings: any;
  likedSlides: number[];
  handleLikeClick: (index: number) => void;
}

const SliderRow: React.FC<SliderRowProps> = ({
  images,
  offset,
  sliderRef,
  settings,
  likedSlides,
  handleLikeClick,
}) => {
  return (
    <div className="mb-[16px]">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => {
          const absoluteIndex = index + offset;
          return (
            <SlideItem
              key={absoluteIndex}
              image={image}
              absoluteIndex={absoluteIndex}
              liked={likedSlides.includes(absoluteIndex)}
              onLike={handleLikeClick}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderRow;
