import CategoryCarousel from "@/components/blog/CategoryCarousel";
import PostLayout from "@/components/blog/PostLayout";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";

const BlogPage = () => {
  return (
    <PagesContentLayout>
      <CategoryCarousel />
      <PostLayout />
    </PagesContentLayout>
  );
};

export default BlogPage;
