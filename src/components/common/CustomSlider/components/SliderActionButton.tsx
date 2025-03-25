import { SliderActionButtonProps } from "@/types/slider";

const SliderActionButton = ({
  onClick,
  image,
  imageAlt,
}: SliderActionButtonProps) => {
  return (
    <button
      type="button"
      className="flex h-[40px] w-[40px] items-center justify-center rounded-[40px] border-[2px] border-[#F54D33]"
      onClick={onClick}
    >
      <img src={image} alt={imageAlt} width={18} height={18} />
    </button>
  );
};

export default SliderActionButton;
