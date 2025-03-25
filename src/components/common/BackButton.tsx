import { IoIosArrowBack } from "react-icons/io";

import { BackButtonProps } from "@/types/common";

const BackButton = ({ onClick, size = "24", className }: BackButtonProps) => {
  return (
    <button
      className={`rounded-full bg-[#363537] p-[10px] ${className}`}
      onClick={onClick}
    >
      <IoIosArrowBack color="#fff" size={size} />
    </button>
  );
};

export default BackButton;
