import { PostDetailUserDescriptionProps } from "@/types/blog";

const PostDetailUserDescription = ({
  currentUser,
}: PostDetailUserDescriptionProps) => {
  return (
    <div className="mx-auto mb-[22px] flex w-full max-w-[632px] justify-between">
      <div className="flex gap-2">
        <img
          className="rounded-full"
          src={
            currentUser.avatar
              ? currentUser.avatar
              : "/icons/blog/no-avatar.svg"
          }
          alt="User Avatar"
        />
        <div>
          <h2 className="font-syne text-[#030712]">{`${currentUser.firstName} ${currentUser.lastName}`}</h2>
          <h3 className="text-sm text-[#6B7280]">{currentUser.role}</h3>
        </div>
      </div>
      <button className="flex items-center gap-1">
        <img width={16} src="/icons/blog/export.svg" alt="Export Icon" />
        <p className="text-[#6B7280]">Share</p>
      </button>
    </div>
  );
};

export default PostDetailUserDescription;
