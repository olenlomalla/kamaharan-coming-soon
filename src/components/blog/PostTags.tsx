import { PostTagsProps } from "@/types/blog";

import Tag from "./post/Tag";

const PostTags = ({ currentPost }: PostTagsProps) => {
  return (
    <div className="mx-auto mb-[22px] w-full max-w-[632px]">
      <hr />
      <div className="flex gap-2 py-[22px]">
        {currentPost.tags.map((name) => (
          <Tag name={name} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default PostTags;
