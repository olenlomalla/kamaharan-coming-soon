import { category } from "@/mocks/pages/blog/category";
import ActionButtonUI from "../ui/ActionButton";
import Title from "../ui/Title";
import { useRef } from "react";
import { posts } from "@/mocks/pages/blog/posts";

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
    <div className="max-w-[1440px] mx-auto px-[32px] flex items-center justify-between mb-[38px] mt-[48px]">
      <Title>Blog</Title>
      <div className="flex items-center gap-[10px]">
        {category.map((category) => (
          <ActionButtonUI
            key={category.id}
            onClick={() => setSelectedCategory}
          >{`${category.text} (${getCategoryCount(
            category.text
          )})`}</ActionButtonUI>
        ))}
        <div className="flex justify-between items-center gap-[10px]">
          <button
            type="button"
            className="flex justify-center items-center border-[#F54D33] border-[2px] rounded-[40px] w-[40px] h-[40px]"
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
            className="flex justify-center items-center border-[#F54D33] border-[2px] rounded-[40px] w-[40px] h-[40px]"
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
