import { post } from "@/mocks/pages/blog/post";
import Post from "./Post";

const PostLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {post.map((post) => (
        <Post
          key={post.id}
          cover={post.cover}
          title={post.title}
          subtitle={post.subtitle}
          date={post.date}
          time={post.time}
          index={post.id}
        />
      ))}
    </div>
  );
};

export default PostLayout;
