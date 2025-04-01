import { FC, useEffect, useRef, useState } from "react";
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
  const [slidesToShow, setSlidesToShow] = useState(5);

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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
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
    <div className="mx-4 my-6 md:mx-[32px] md:my-[48px]">
      <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-0 md:mb-[32px]">
        <Title>{title}</Title>
        <div className="flex w-full items-center justify-between gap-2 font-body sm:w-auto md:gap-[10px]">
          {showActionButtons && (
            <ContainerActionButtons arrayOfTitles={buttonTitlesArray} />
          )}
          <div className="flex items-center gap-2 md:gap-[10px]">
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
      </div>

      <Slider ref={sliderRef} {...settings} className="flex gap-2">
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
                className="h-auto w-full object-cover"
              />
              <button
                type="button"
                className={`absolute right-2 top-2 flex size-8 items-center justify-center rounded-[40px] md:size-[32px] ${
                  likedSlides.includes(image.id)
                    ? "bg-white opacity-100"
                    : "bg-[#F54D33] opacity-50"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLikeClick(image.id);
                }}
              >
                <img
                  src="/icons/slider-like.svg"
                  alt="Add to saved"
                  className={`size-4 md:size-5 ${
                    likedSlides.includes(image.id) ? "invert" : ""
                  }`}
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
