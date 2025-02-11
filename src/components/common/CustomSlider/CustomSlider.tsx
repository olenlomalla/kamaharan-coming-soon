import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { FC, useState } from "react";
import "./index.css";

interface ICustomSlider {
  images: string[];
  title: string;
}

const CustomSlider: FC<ICustomSlider> = ({ images, title }) => {
  const slider = React.useRef<Slider | null>(null);
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
    <div className="mx-[32px] mb-[48px]">
      <div className="flex justify-between items-center mb-[32px]">
        <h1 className="decoration-skip-ink font-bold font-syne text-2xl text-left leading-8 tracking-wide">
          {title}
        </h1>
        <div className="flex justify-between items-center gap-[10px]">
          <button
            type="button"
            className="flex justify-center items-center border-[#385C80] border-[2px] rounded-[40px] w-[40px] h-[40px]"
            onClick={() => slider?.current?.slickPrev()}
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
            onClick={() => slider?.current?.slickNext()}
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

      <Slider ref={slider} {...settings}>
        {images.map((image, index) => (
          <div className="relative" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
