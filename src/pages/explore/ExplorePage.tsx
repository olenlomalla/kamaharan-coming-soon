import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";
import SliderRow from "./SliderRow";
import { images } from "./imageDataSet";

const ExplorePage = () => {
  const sliderRow1 = useRef<Slider | null>(null);
  const sliderRow2 = useRef<Slider | null>(null);
  const sliderRow3 = useRef<Slider | null>(null);
  const [likedSlides, setLikedSlides] = useState<number[]>([]);

  const row1Images = images.slice(0, 3);
  const row2Images = images.slice(3, 7);
  const row3Images = images.slice(7, 11);

  const settingsRow1 = {
    speed: 500,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
  };

  const settingsRow2 = {
    speed: 500,
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
  };

  const settingsRow3 = {
    speed: 500,
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
  };

  const handleLikeClick = (absoluteIndex: number) => {
    setLikedSlides((prev) =>
      prev.includes(absoluteIndex)
        ? prev.filter((i) => i !== absoluteIndex)
        : [...prev, absoluteIndex]
    );
  };

  const nextSlide = () => {
    sliderRow1.current?.slickNext();
    sliderRow2.current?.slickNext();
    sliderRow3.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRow1.current?.slickPrev();
    sliderRow2.current?.slickPrev();
    sliderRow3.current?.slickPrev();
  };

  return (
    <PagesContentLayout>
      <div className="mx-[32px] my-[48px]">
        <div className="flex justify-between items-center mb-[16px]">
          <h1 className="decoration-skip-ink font-bold font-syne text-2xl text-left leading-8 tracking-wide">
            Explore
          </h1>
          <div className="flex justify-between items-center gap-[10px]">
            <button
              type="button"
              className="flex justify-center items-center border-[#385C80] border-[2px] rounded-[40px] w-[40px] h-[40px]"
              onClick={prevSlide}
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
              onClick={nextSlide}
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

        <SliderRow
          images={row1Images}
          offset={0}
          sliderRef={sliderRow1}
          settings={settingsRow1}
          likedSlides={likedSlides}
          handleLikeClick={handleLikeClick}
        />

        <SliderRow
          images={row2Images}
          offset={3}
          sliderRef={sliderRow2}
          settings={settingsRow2}
          likedSlides={likedSlides}
          handleLikeClick={handleLikeClick}
        />

        <SliderRow
          images={row3Images}
          offset={7}
          sliderRef={sliderRow3}
          settings={settingsRow3}
          likedSlides={likedSlides}
          handleLikeClick={handleLikeClick}
        />
      </div>
    </PagesContentLayout>
  );
};

export default ExplorePage;
