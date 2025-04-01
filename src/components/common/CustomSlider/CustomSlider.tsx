import React, { FC, useEffect, useState } from "react";
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
  const [slidesToShow, setSlidesToShow] = useState(5);

  // Update slides to show based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleLikeClick = (index: number) => {
    setLikedSlides((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="mx-[16px] mb-[24px] md:mx-[32px] md:mb-[48px]">
      <div className="mb-[16px] flex items-center justify-between md:mb-[32px]">
        <h1 className="decoration-skip-ink text-left font-heading text-xl font-bold leading-8 tracking-wide md:text-2xl">
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
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-auto w-full"
              />
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
