import React from "react";

import { SliderActionButtonsProps } from "@/types/slider";

import SliderActionButton from "./SliderActionButton";

const SliderActionButtons: React.FC<SliderActionButtonsProps> = ({
  nextSlide,
  prevSlide,
}) => {
  return (
    <div className="flex items-center justify-between gap-[10px]">
      <SliderActionButton
        image="/icons/back-arrow.svg"
        imageAlt="Previous slide"
        onClick={prevSlide}
      />
      <SliderActionButton
        image="/icons/forward-arrow.svg"
        imageAlt="Next slide"
        onClick={nextSlide}
      />
    </div>
  );
};

export default SliderActionButtons;
