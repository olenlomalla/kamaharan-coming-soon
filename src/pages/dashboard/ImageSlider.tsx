import { useState } from "react";

const ImageSlider = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="mb-12">
      <h2 className="mt-12 mb-8 ml-8 font-bold font-syne text-2xl leading-9 tracking-wide">
        Discover services for every occasion
      </h2>
      <div className="relative px-[20px] w-full overflow-hidden">
        <div className="relative w-full">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col flex-shrink-0 justify-start items-start"
                style={{
                  width: "calc(100% - 20px)",
                  marginRight: index === images.length - 1 ? "0" : "20px",
                }}
              >
                <div className="relative w-full h-[305px]">
                  <img
                    src={image.src}
                    alt={`slide ${index + 1}`}
                    className="rounded-[8px] w-full object-cover"
                    style={{ height: "305px", objectPosition: "left" }}
                    onClick={() => setCurrentIndex(index)}
                  />
                  <div className="bottom-2 left-2 absolute flex space-x-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-3 h-3 rounded-full ${
                          currentIndex === i ? "bg-white" : "bg-gray-400"
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>
                <div className="mt-4 w-full text-left">
                  <h3 className="font-bold font-syne text-[#363537] text-sm leading-[16.8px] tracking-wide">
                    {image.text}
                  </h3>
                  <p className="font-medium font-syne text-[#363537] text-[11px] leading-[13.2px] tracking-[0.25px]">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
