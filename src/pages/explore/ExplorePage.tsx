import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";
import SliderRow from "./SliderRow";
import { sliderConfigs } from "./sliderConfig";
import SliderActionButtons from "./SliderActionButtons";

const ExplorePage = () => {
  const sliderRow1 = useRef<Slider | null>(null);
  const sliderRow2 = useRef<Slider | null>(null);
  const sliderRow3 = useRef<Slider | null>(null);
  const sliderRefs = [sliderRow1, sliderRow2, sliderRow3];

  const [likedSlides, setLikedSlides] = useState<number[]>([]);

  const handleLikeClick = (absoluteIndex: number) => {
    setLikedSlides((prev) =>
      prev.includes(absoluteIndex)
        ? prev.filter((i) => i !== absoluteIndex)
        : [...prev, absoluteIndex]
    );
  };

  const nextSlide = () => {
    sliderRefs.forEach((ref) => ref.current?.slickNext());
  };

  const prevSlide = () => {
    sliderRefs.forEach((ref) => ref.current?.slickPrev());
  };

  return (
    <PagesContentLayout>
      <div className="mx-[32px] my-[48px]">
        <div className="flex justify-between items-center mb-[16px]">
          <h1 className="decoration-skip-ink font-bold font-syne text-2xl text-left leading-8 tracking-wide">
            Explore
          </h1>
          <SliderActionButtons nextSlide={nextSlide} prevSlide={prevSlide} />
        </div>
        {sliderConfigs.map((config, index) => (
          <SliderRow
            key={index}
            images={config.images}
            offset={config.offset}
            sliderRef={sliderRefs[index]}
            settings={config.settings}
            likedSlides={likedSlides}
            handleLikeClick={handleLikeClick}
          />
        ))}
      </div>
    </PagesContentLayout>
  );
};

export default ExplorePage;
