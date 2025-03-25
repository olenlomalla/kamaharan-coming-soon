import React, { FC, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import SliderActionButton from "./components/SliderActionButton";
import TitleDescription from "./components/TitleDescription";
import "./index.css";

interface ICustomSlider {
  images: string[];
  title: string;
  titleArray: { title: string }[];
  showTitleArray?: boolean;
}

const CustomSlider: FC<ICustomSlider> = ({
  images,
  title,
  showTitleArray,
  titleArray,
}) => {
  const slider = React.useRef<Slider | null>(null);
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
    <div className="mx-[32px] mb-[48px]">
      <div className="mb-[32px] flex items-center justify-between">
        <h1 className="decoration-skip-ink text-left font-heading text-2xl font-bold leading-8 tracking-wide">
          {title}
        </h1>
        <div className="flex items-center justify-between gap-[10px]">
          <SliderActionButton
            image="/icons/back-arrow.svg"
            imageAlt="Previous slide"
            onClick={() => slider?.current?.slickPrev()}
          />
          <SliderActionButton
            image="/icons/forward-arrow.svg"
            imageAlt="Next slide"
            onClick={() => slider?.current?.slickNext()}
          />
        </div>
      </div>

      <Slider ref={slider} {...settings} className="flex gap-2">
        {images.map((image, index) => {
          const description = titleArray[index % titleArray.length];
          return (
            <div className="relative" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
              <button
                type="button"
                className={`absolute right-2 top-2 flex h-[32px] w-[32px] items-center justify-center rounded-[40px] ${
                  likedSlides.includes(index)
                    ? "bg-white opacity-100"
                    : "bg-[#F54D33] opacity-50"
                }`}
                onClick={() => handleLikeClick(index)}
              >
                {likedSlides.includes(index) ? (
                  <FaHeart color="#000" />
                ) : (
                  <FaRegHeart color="#FCFCFC" />
                )}
              </button>
              {showTitleArray && description && (
                <TitleDescription description={description} />
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CustomSlider;
