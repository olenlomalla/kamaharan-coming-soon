import type { FC } from "react";
import { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ImageSlider: FC = () => {
  const images = [
    {
      src: "/images/home-page/left-hidden-slide.png",
      text: "Explore a wide range of services tailored for you!",
      description: "Find everything you need to elevate your business.",
    },
    {
      src: "/images/home-page/middle-slide.png",
      text: "Green Plate",
      description: "Farm to table excellence",
    },
    {
      src: "/images/home-page/right-hidden-slide.png",
      text: "Tailored for success.",
      description: "Services that help your business grow.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    afterChange: (index: number) => setCurrentIndex(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="mb-8 md:mb-12">
      <h2 className="mb-6 ml-4 mt-8 font-heading text-xl font-bold leading-7 tracking-wide md:mb-8 md:ml-8 md:mt-12 md:text-2xl md:leading-9">
        Discover services for every occasion
      </h2>
      <div className="relative w-full overflow-visible px-4 md:px-[20px]">
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="flex shrink-0 flex-col items-start justify-start px-2 md:px-[10px]"
              style={{
                width: "calc(100% - 20px)",
                marginRight: index === images.length - 1 ? "0" : "20px",
              }}
            >
              <div className="relative h-[200px] w-full sm:h-[250px] md:h-[305px]">
                <img
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  style={{ height: "100%", objectPosition: "left" }}
                  onClick={() =>
                    sliderRef.current && sliderRef.current.slickGoTo(index)
                  }
                  className={`w-full rounded-[8px] object-cover transition duration-300 ${
                    currentIndex === index ? "blur-0" : "blur-[3px]"
                  }`}
                />
                <div className="absolute bottom-2 left-2 flex space-x-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        sliderRef.current && sliderRef.current.slickGoTo(i)
                      }
                      className={`size-2 rounded-full md:size-3 ${
                        currentIndex === i ? "bg-white" : "bg-gray-400"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
              <div
                className={`mt-3 w-full text-left transition duration-300 md:mt-4 ${
                  currentIndex === index ? "blur-0" : "blur-[2px]"
                }`}
              >
                <h3 className="font-body text-xs font-bold leading-[16.8px] tracking-wide text-[#363537] md:text-sm">
                  {image.text}
                </h3>
                <p className="font-body text-[10px] font-medium leading-[13.2px] tracking-[0.25px] text-[#363537] md:text-[11px]">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
