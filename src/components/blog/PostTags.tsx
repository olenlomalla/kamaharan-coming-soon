import { PostTagsProps } from "@/types/blog";
import Tag from "./post/Tag";

const PostTags = ({ currentPost }: PostTagsProps) => {
  return (
    <div className="max-w-[632px] mx-auto w-full mb-[22px]">
      <hr />
      <div className="py-[22px] flex gap-2">
        {currentPost.tags.map((name) => (
          <Tag name={name} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default PostTags;
