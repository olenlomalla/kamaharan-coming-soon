import { TagProps } from "@/types/blog";

const Tag = ({ name }: TagProps) => {
  return (
    <div className="rounded-full bg-[#F3F4F6] px-[12px] py-[4px]">
      <p className="text-[#374151]">{name}</p>
    </div>
  );
};

export default Tag;
