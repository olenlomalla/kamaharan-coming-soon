import { createRef, useMemo, useState } from "react";
import Slider from "react-slick";

import Title from "@/components/ui/Title";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import SliderActionButtons from "../../components/common/CustomSlider/components/SliderActionButtons";
import SliderRow from "../../components/common/CustomSlider/components/SliderRow";
import { sliderConfigs } from "../../constants/pages/explore/sliderConfig";

const ExplorePage = () => {
  const sliderRefs = useMemo(
    () => sliderConfigs.map(() => createRef<Slider>()),
    [],
  );

  const [likedSlides, setLikedSlides] = useState<number[]>([]);

  const handleLikeClick = (absoluteIndex: number) => {
    setLikedSlides((prev) =>
      prev.includes(absoluteIndex)
        ? prev.filter((i) => i !== absoluteIndex)
        : [...prev, absoluteIndex],
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
      <div className="mx-4 my-8 md:mx-[32px] md:my-[48px]">
        <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-0 md:mb-[16px]">
          <Title>Explore</Title>
          <SliderActionButtons nextSlide={nextSlide} prevSlide={prevSlide} />
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
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
      </div>
    </PagesContentLayout>
  );
};

export default ExplorePage;
