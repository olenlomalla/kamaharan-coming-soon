import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PostDescription from "@/components/blog/PostDescription";
import PostDetailHeader from "@/components/blog/PostDetailHeader";
import PostDetailUserDescription from "@/components/blog/PostDetailUserDescription";
import PostTags from "@/components/blog/PostTags";
import RelatedArticleLayout from "@/components/blog/post/RelatedArticleLayout";
import { posts } from "@/constants/pages/blog/posts";
import { users } from "@/constants/pages/blog/user";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";

const BlogPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentPost = posts.find((item) => item.id === Number(id));
  const currentUser = users.find((item) => item.id === Number(id));

  const handleBackClick = () => {
    navigate(`/blog`);
  };

  if (!currentPost || !currentUser) {
    return <div>Post not found</div>;
  }

  return (
    <section>
      <PagesContentLayout>
        <div className="mx-[72px] mt-[96px]">
          <button
            className="mb-[21px] flex items-center gap-2 font-syne text-base"
            onClick={handleBackClick}
          >
            <img
              src="/icons/back-arrow.svg"
              alt="arrow-left"
              className="size-[16px]"
            />
            Back to Blog
          </button>
        </div>
        <div className="px-4 md:px-0">
          <PostDetailHeader currentPost={currentPost} />
          <PostDetailUserDescription currentUser={currentUser} />
          <PostDescription currentPost={currentPost} />
          <PostTags currentPost={currentPost} />
          <RelatedArticleLayout />
        </div>
      </PagesContentLayout>
    </section>
  );
};

export default BlogPost;
