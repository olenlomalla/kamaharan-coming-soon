import { PostDescriptionProps } from "@/types/blog";

const PostDescription = ({ currentPost }: PostDescriptionProps) => {
  return (
    <div className="mx-auto w-full max-w-[632px]">
      <img
        className="mb-[22px] max-w-[632px] rounded-lg"
        src={currentPost.cover}
        alt="Post Cover"
      />
      <p className="mb-[22px] font-syne">{currentPost.description}</p>
    </div>
  );
};

export default PostDescription;
