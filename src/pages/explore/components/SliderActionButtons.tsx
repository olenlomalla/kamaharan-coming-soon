import React from "react";

interface SliderActionButtonsProps {
  nextSlide: () => void;
  prevSlide: () => void;
}

const SliderActionButtons: React.FC<SliderActionButtonsProps> = ({
  nextSlide,
  prevSlide,
}) => {
  return (
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
  );
};

export default SliderActionButtons;
