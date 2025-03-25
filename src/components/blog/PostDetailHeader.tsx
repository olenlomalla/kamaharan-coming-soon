import { PostDetailHeaderProps } from "@/types/blog";

import CalendarIcon from "/icons/blog/calendar-post-details.svg";

const PostDetailHeader = ({ currentPost }: PostDetailHeaderProps) => {
  return (
    <div className="mx-auto mb-[26px] w-full max-w-[632px]">
      <h2 className="mb-2 font-syne text-sm font-medium text-[#030712]">
        {currentPost.category}
      </h2>
      <h1 className="mb-2 font-syne text-4xl font-bold text-[#262626]">
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
