import { createRef, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";
import SliderRow from "./components/SliderRow";
import { sliderConfigs } from "./sliderConfig";
import SliderActionButtons from "./components/SliderActionButtons";
import Title from "@/components/ui/Title";

const ExplorePage = () => {
  const sliderRefs = useMemo(
    () => sliderConfigs.map(() => createRef<Slider>()),
    []
  );

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
          <Title>Explore</Title>
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
