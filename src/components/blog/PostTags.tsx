import { PostTagsProps } from "@/types/blog";

import Tag from "./post/Tag";

const PostTags = ({ currentPost }: PostTagsProps) => {
  return (
    <div className="mx-4 mb-4 w-full max-w-[632px] md:mx-auto md:mb-[22px]">
      <hr className="border-gray-200" />
      <div className="flex flex-wrap gap-2 py-4 md:py-[22px]">
        {currentPost.tags.map((name) => (
          <Tag key={name} name={name} />
        ))}
      </div>
      <hr className="border-gray-200" />
    </div>
  );
};

export default PostTags;
