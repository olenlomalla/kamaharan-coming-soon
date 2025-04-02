import { PostDescriptionProps } from "@/types/blog";

const PostDescription = ({ currentPost }: PostDescriptionProps) => {
  return (
    <div className="mx-4 md:mx-auto md:max-w-[632px]">
      <img
        className="mb-4 w-full rounded-lg object-cover md:mb-[22px]"
        src={currentPost.cover}
        alt="Post Cover"
      />
      <p className="mb-4 text-sm leading-relaxed md:mb-[22px] md:text-base">
        {currentPost.description}
      </p>
    </div>
  );
};

export default PostDescription;
