import { posts } from "@/mocks/pages/blog/posts";
import { useNavigate, useParams } from "react-router-dom";
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
    <div className="max-w-[632px] mx-auto w-full mb-[106px]">
      <h2 className="text-2xl font-syne font-bold mb-6">Related Articles</h2>
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
