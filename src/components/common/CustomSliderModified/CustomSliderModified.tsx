import { FC, useRef, useState } from "react";
import Slider from "react-slick";

import SliderDescription from "@/components/common/CustomSliderModified/components/SliderDescription";
import ContainerActionButtons from "@/components/ui/ContainerActionButtons";
import Title from "@/components/ui/Title";
import { CustomSliderModifiedProps } from "@/types/customSliderModified";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import SliderActionButton from "../CustomSlider/components/SliderActionButton";
import "./index.css";

const CustomSliderModified: FC<CustomSliderModifiedProps> = ({
  images,
  title,
  showActionButtons = false,
  showSliderDescription = false,
  buttonTitlesArray = [],
  descriptionArray = [],
  onClick,
}) => {
  const sliderRef = useRef<Slider | null>(null);
  const [likedSlides, setLikedSlides] = useState<number[]>([]);

  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const handleLikeClick = (index: number) => {
    setLikedSlides((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="mx-[32px] my-[48px]">
      <div className="mb-[32px] flex items-center justify-between">
        <Title>{title}</Title>
        <div className="flex items-center justify-between gap-[10px] font-body">
          {showActionButtons && (
            <ContainerActionButtons arrayOfTitles={buttonTitlesArray} />
          )}
          <SliderActionButton
            image="/icons/back-arrow.svg"
            imageAlt="Previous slide"
            onClick={() => sliderRef.current?.slickPrev()}
          />
          <SliderActionButton
            image="/icons/forward-arrow.svg"
            imageAlt="Next slide"
            onClick={() => sliderRef.current?.slickNext()}
          />
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {images.map((image) => {
          const description = descriptionArray[image.id];

          return (
            <div
              onClick={() => onClick?.(image.id)}
              className={`relative ${onClick && "cursor-pointer"}`}
              key={image.id}
            >
              <img
                src={image.image}
                alt={`Slide ${image.id}`}
                className="w-full"
              />
              <button
                type="button"
                className={`absolute right-2 top-2 flex h-[32px] w-[32px] items-center justify-center rounded-[40px] ${
                  likedSlides.includes(image.id)
                    ? "bg-white opacity-100"
                    : "bg-[#F54D33] opacity-50"
                }`}
                onClick={() => handleLikeClick(image.id)}
              >
                <img
                  src="/icons/slider-like.svg"
                  alt="Add to saved"
                  className={
                    likedSlides.includes(image.id) ? "invert filter" : ""
                  }
                />
              </button>
              {showSliderDescription && description && (
                <SliderDescription description={description} />
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CustomSliderModified;
