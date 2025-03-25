import React from "react";

import { SlideItemProps } from "@/types/slider";

const SlideItem: React.FC<SlideItemProps> = ({
  image,
  absoluteIndex,
  liked,
  onLike,
}) => {
  return (
    <div className="relative" style={{ height: "300px" }}>
      <img
        src={image.src}
        alt={`Slide ${absoluteIndex + 1}`}
        style={{
          height: "300px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <button
        type="button"
        className={`absolute right-2 top-2 flex h-[32px] w-[32px] items-center justify-center rounded-[40px] ${
          liked ? "bg-white" : "bg-[#F54D33] opacity-50"
        }`}
        onClick={() => onLike(absoluteIndex)}
      >
        <img
          src="/icons/slider-like.svg"
          alt="Add to saved"
          className={`${liked ? "invert filter" : ""}`}
        />
      </button>
    </div>
  );
};

export default SlideItem;
