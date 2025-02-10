import React from "react";

interface SlideItemProps {
  image: {
    src: string;
    text: string;
    description: string;
  };
  absoluteIndex: number;
  liked: boolean;
  onLike: (index: number) => void;
}

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
        className={`top-2 right-2 absolute flex justify-center items-center rounded-[40px] w-[32px] h-[32px] ${
          liked ? "bg-white" : "bg-[#385C80]"
        }`}
        onClick={() => onLike(absoluteIndex)}
      >
        <img
          src="/icons/slider-like.svg"
          alt="Add to saved"
          className={`${liked ? "filter invert" : ""}`}
        />
      </button>
    </div>
  );
};

export default SlideItem;
