import { useState } from "react";

import CategoryCarousel from "@/components/blog/CategoryCarousel";
import PostLayout from "@/components/blog/PostLayout";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <PagesContentLayout>
      <CategoryCarousel setSelectedCategory={setSelectedCategory} />
      <PostLayout selectedCategory={selectedCategory} />
    </PagesContentLayout>
  );
};

export default BlogPage;
