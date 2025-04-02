import { useNavigate } from "react-router-dom";

import { posts } from "@/constants/pages/blog/posts";

import Post from "./Post";

interface PostLayoutProps {
  selectedCategory: string;
}

const PostLayout = ({ selectedCategory }: PostLayoutProps) => {
  const navigate = useNavigate();

  const handlePostClick = (postId: number) => {
    navigate(`/blog/post/${postId}`);
  };

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="flex flex-col items-center justify-center px-4">
      {filteredPosts.map((post) => (
        <Post
          key={post.id}
          cover={post.cover}
          title={post.title}
          subtitle={post.subtitle}
          date={post.date}
          time={post.time}
          index={post.id}
          onClick={() => handlePostClick(post.id)}
        />
      ))}
    </div>
  );
};

export default PostLayout;
