import { SliderActionButtonProps } from "@/types/slider";

const SliderActionButton = ({
  onClick,
  image,
  imageAlt,
}: SliderActionButtonProps) => {
  return (
    <button
      type="button"
      className="flex h-[36px] w-[36px] items-center justify-center rounded-[40px] border-[2px] border-[#F54D33] sm:h-[40px] sm:w-[40px]"
      onClick={onClick}
    >
      <img
        src={image}
        alt={imageAlt}
        width={16}
        height={16}
        className="sm:h-[18px] sm:w-[18px]"
      />
    </button>
  );
};

export default SliderActionButton;
