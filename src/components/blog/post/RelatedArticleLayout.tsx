import { useNavigate, useParams } from "react-router-dom";

import { posts } from "@/constants/pages/blog/posts";

import RelatedArticle from "./RelatedArticle";

const RelatedArticleLayout = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const otherPosts = posts.filter((post) => post.id !== Number(id));

  const randomPosts = otherPosts.sort(() => Math.random() - 0.5).slice(0, 2);

  const handleArticleClick = (postId: number) => {
    window.scrollTo(0, 0);
    navigate(`/blog/post/${postId}`);
  };

  return (
    <div className="mx-auto mb-[106px] w-full max-w-[632px]">
      <h2 className="mb-6 font-syne text-2xl font-bold">Related Articles</h2>
      <div className="flex flex-col gap-[32px]">
        {randomPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => handleArticleClick(post.id)}
            className="cursor-pointer"
          >
            <RelatedArticle
              cover={post.cover}
              category={post.category}
              title={post.title}
              subtitle={post.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticleLayout;
