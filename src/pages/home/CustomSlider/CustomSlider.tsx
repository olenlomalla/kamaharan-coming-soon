import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { FC } from "react";
import "./index.css";

interface ICustomSlider {
  images: string[];
  title: string;
}

const CustomSlider: FC<ICustomSlider> = ({ images, title }) => {
  const slider = React.useRef<Slider | null>(null);

  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
          >
            <img
              src="/icons/back-arrow.svg"
              alt="Increase width"
              onClick={() => slider?.current?.slickPrev()}
              width={18}
              height={18}
            />
          </button>
          <button
            type="button"
            className="flex justify-center items-center border-[#385C80] border-[2px] rounded-[40px] w-[40px] h-[40px]"
          >
            <img
              src="/icons/forward-arrow.svg"
              alt="Decrease width"
              onClick={() => slider?.current?.slickNext()}
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>

      <Slider ref={slider} {...settings}>
        {images.map((image, index) => (
          <img src={image} alt={`Slide ${index + 1}`} />
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
