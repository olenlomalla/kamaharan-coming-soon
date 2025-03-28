import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { BusinessCardProps } from "@/types/common";

const BusinessCard = ({ image, className }: BusinessCardProps) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="relative min-w-[250px] max-w-[400px] flex-1">
      <img
        src={image}
        alt="Business"
        className={"w-full rounded-lg object-cover " + className}
      />
      <button
        type="button"
        className={`absolute right-2 top-2 flex size-[32px] items-center justify-center rounded-[40px] ${
          liked ? "bg-white opacity-100" : "bg-[#F54D33] opacity-50"
        }`}
        onClick={handleLike}
      >
        {liked ? <FaHeart color="#000" /> : <FaRegHeart color="#fff" />}
      </button>
    </div>
  );
};

export default BusinessCard;
