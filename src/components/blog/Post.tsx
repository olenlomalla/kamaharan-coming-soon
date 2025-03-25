import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { PostProps } from "@/types/blog";

import CalendarIcon from "/icons/blog/calendar.svg";

const Post = ({
  cover,
  title,
  subtitle,
  date,
  time,
  index,
  onClick,
}: PostProps) => {
  const [likedSlides, setLikedSlides] = useState<number[]>([]);

  const handleLikeClick = (index: number) => {
    setLikedSlides((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="relative mb-[32px] w-full max-w-[632px]">
      <div>
        <img src={cover} alt="" onClick={onClick} className="cursor-pointer" />
        <button
          type="button"
          className={`absolute right-2 top-2 flex h-[32px] w-[32px] items-center justify-center rounded-[40px] ${
            likedSlides.includes(index)
              ? "bg-white opacity-100"
              : "bg-[#F54D33] opacity-50"
          }`}
          onClick={() => handleLikeClick(index)}
        >
          {likedSlides.includes(index) ? (
            <FaHeart color="#000" />
          ) : (
            <FaRegHeart color="#FCFCFC" />
          )}
        </button>
      </div>
      <h2 className="mb-2 cursor-pointer font-body" onClick={onClick}>
        {title}
      </h2>
      <h3
        className="mb-2 cursor-pointer font-body text-[11px]"
        onClick={onClick}
      >
        {subtitle}
      </h3>
      <div className="flex gap-2 font-body">
        <img src={CalendarIcon} alt="Calendar Icon" />
        <p>{`${date} . ${time}`}</p>
      </div>
    </div>
  );
};

export default Post;
