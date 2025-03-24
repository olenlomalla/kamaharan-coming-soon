import { SectionItemProps } from "@/types/dashboardHeader";

const SectionItem = ({ image, name }: SectionItemProps) => {
  return (
    <button className="flex w-full items-center gap-4 rounded-lg py-3 transition-colors hover:bg-gray-50">
      <img src={image} alt="" className="h-5 w-5" />
      <span className="font-syne text-[16px]">{name}</span>
    </button>
  );
};

export default SectionItem;
