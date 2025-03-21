import { PostDescriptionProps } from "@/types/blog";

const PostDescription = ({ currentPost }: PostDescriptionProps) => {
  return (
    <div className="max-w-[632px] w-full mx-auto">
      <img
        className="rounded-lg max-w-[632px] mb-[22px]"
        src={currentPost.cover}
        alt="Post Cover"
      />
      <p className="font-syne mb-[22px]">{currentPost.description}</p>
    </div>
  );
};

export default PostDescription;
