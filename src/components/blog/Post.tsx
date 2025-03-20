import { PostProps } from "@/types/blog";

import CalendarIcon from "/icons/blog/calendar.svg";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Post = ({ cover, title, subtitle, date, time, index }: PostProps) => {
  const [likedSlides, setLikedSlides] = useState<number[]>([]);

  const handleLikeClick = (index: number) => {
    setLikedSlides((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="max-w-[632px] w-full mb-[32px] relative">
      <div>
        <img src={cover} alt="" />
        <button
          type="button"
          className={`absolute top-2 right-2 flex justify-center items-center rounded-[40px] w-[32px] h-[32px] ${
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
      <h2 className="font-body mb-2">{title}</h2>
      <h3 className="text-[11px] font-body mb-2">{subtitle}</h3>
      <div className="flex gap-2 font-body">
        <img src={CalendarIcon} alt="Calendar Icon" />
        <p>{`${date} . ${time}`}</p>
      </div>
    </div>
  );
};

export default Post;
