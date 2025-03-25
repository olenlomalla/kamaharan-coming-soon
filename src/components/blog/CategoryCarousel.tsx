import { useRef } from "react";

import { category } from "@/constants/pages/blog/category";
import { posts } from "@/constants/pages/blog/posts";

import ActionButtonUI from "../ui/ActionButton";
import Title from "../ui/Title";

interface CategoryCarouselProps {
  setSelectedCategory: (category: string) => void;
}

const CategoryCarousel = ({ setSelectedCategory }: CategoryCarouselProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const getCategoryCount = (categoryName: string) => {
    return posts.filter((post) => post.category === categoryName).length;
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto mb-[38px] mt-[48px] flex max-w-[1440px] items-center justify-between px-[32px]">
      <Title>Blog</Title>
      <div className="flex items-center gap-[10px]">
        {category.map((category) => (
          <ActionButtonUI
            key={category.id}
            onClick={() => setSelectedCategory}
          >{`${category.text} (${getCategoryCount(
            category.text,
          )})`}</ActionButtonUI>
        ))}
        <div className="flex items-center justify-between gap-[10px]">
          <button
            type="button"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[40px] border-[2px] border-[#F54D33]"
            onClick={scrollLeft}
          >
            <img
              src="/icons/back-arrow.svg"
              alt="Previous slide"
              width={18}
              height={18}
            />
          </button>
          <button
            type="button"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[40px] border-[2px] border-[#F54D33]"
            onClick={scrollRight}
          >
            <img
              src="/icons/forward-arrow.svg"
              alt="Next slide"
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
