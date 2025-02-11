import { FC, useState, useRef } from "react";
import Slider from "react-slick";
import ContainerActionButtons from "@/components/ui/ContainerActionButtons";
import Title from "@/components/ui/Title";
import { TextElement } from "@/pages/deals/textElements";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import SliderDescription from "@/pages/deals/components/SliderDescription";

interface ICustomSliderModified {
  images: string[];
  title: string;
  showActionButtons?: boolean;
  showSliderDescription?: boolean;
  buttonTitlesArray?: string[];
  descriptionArray?: TextElement[];
}

const CustomSliderModified: FC<ICustomSliderModified> = ({
  images,
  title,
  showActionButtons = false,
  showSliderDescription = false,
  buttonTitlesArray = [],
  descriptionArray = [],
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
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="mx-[32px] my-[48px]">
      <div className="flex justify-between items-center mb-[32px]">
        <Title>{title}</Title>
        <div className="flex justify-between items-center gap-[10px]">
          {showActionButtons && (
            <ContainerActionButtons arrayOfTitles={buttonTitlesArray} />
          )}
          <button
            type="button"
            className="flex justify-center items-center border-[#385C80] border-[2px] rounded-[40px] w-[40px] h-[40px]"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <img
              src="/icons/back-arrow.svg"
              alt="Previous slide"
              width={18}
              height={18}
            />
          </button>
          <button
            type="button"
            className="flex justify-center items-center border-[#385C80] border-[2px] rounded-[40px] w-[40px] h-[40px]"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <img
              src="/icons/forward-arrow.svg"
              alt="Next slide"
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => {
          const description = descriptionArray[index];

          return (
            <div className="relative" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
              <button
                type="button"
                className={`absolute top-2 right-2 flex justify-center items-center rounded-[40px] w-[32px] h-[32px] ${
                  likedSlides.includes(index)
                    ? "bg-white opacity-100"
                    : "bg-[#385C80] opacity-50"
                }`}
                onClick={() => handleLikeClick(index)}
              >
                <img
                  src="/icons/slider-like.svg"
                  alt="Add to saved"
                  className={likedSlides.includes(index) ? "filter invert" : ""}
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
