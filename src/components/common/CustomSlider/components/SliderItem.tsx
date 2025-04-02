import React from "react";

import { SlideItemProps } from "@/types/slider";

const SlideItem: React.FC<SlideItemProps> = ({
  image,
  absoluteIndex,
  liked,
  onLike,
}) => {
  return (
    <div className="relative object-center" style={{ height: "300px" }}>
      <img
        src={image.src}
        alt={`Slide ${absoluteIndex + 1}`}
        className="size-full max-h-[300px] rounded-lg object-cover"
        style={{ height: "inherit" }}
      />
      <button
        type="button"
        className={`absolute right-2 top-2 flex size-8 items-center justify-center rounded-[40px] md:size-[32px] ${
          liked ? "bg-white" : "bg-[#F54D33] opacity-50"
        }`}
        onClick={() => onLike(absoluteIndex)}
      >
        <img
          src="/icons/slider-like.svg"
          alt="Add to saved"
          className={`size-4 md:size-5 ${liked ? "invert" : ""}`}
        />
      </button>
    </div>
  );
};

export default SlideItem;
