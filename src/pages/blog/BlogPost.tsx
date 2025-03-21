import RelatedArticleLayout from "@/components/blog/post/RelatedArticleLayout";
import PostDescription from "@/components/blog/PostDescription";
import PostDetailHeader from "@/components/blog/PostDetailHeader";
import PostDetailUserDescription from "@/components/blog/PostDetailUserDescription";
import PostTags from "@/components/blog/PostTags";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";
import { posts } from "@/mocks/pages/blog/posts";
import { users } from "@/mocks/pages/blog/user";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
        <div className="mt-[96px] mx-[72px]">
          <button
            onClick={handleBackClick}
            className="flex gap-2 font-syne mb-[21px]"
          >
            <img
              src="/icons/back-arrow.svg"
              alt="Previous slide"
              width={16}
              height={16}
            />
            Back to Articles
          </button>
        </div>
        <PostDetailHeader currentPost={currentPost} />
        <PostDetailUserDescription currentUser={currentUser} />
        <PostDescription currentPost={currentPost} />
        <PostTags currentPost={currentPost} />
        <RelatedArticleLayout />
      </PagesContentLayout>
    </section>
  );
};

export default BlogPost;
