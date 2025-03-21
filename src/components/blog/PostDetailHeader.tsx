import { PostDetailHeaderProps } from "@/types/blog";
import CalendarIcon from "/icons/blog/calendar-post-details.svg";

const PostDetailHeader = ({ currentPost }: PostDetailHeaderProps) => {
  return (
    <div className="max-w-[632px] w-full mx-auto mb-[26px]">
      <h2 className="text-sm font-syne text-[#030712] font-medium mb-2">
        {currentPost.category}
      </h2>
      <h1 className="text-4xl font-syne font-bold text-[#262626] mb-2">
        {currentPost.title}
      </h1>
      <div className="flex gap-2 font-syne">
        <img src={CalendarIcon} alt="Calendar Icon" />
        <p className="text-sm">{`${currentPost.date} . ${currentPost.time}`}</p>
      </div>
    </div>
  );
};

export default PostDetailHeader;
