import { useEffect, useRef, useState } from "react";

import { category } from "@/constants/pages/blog/category";
import { posts } from "@/constants/pages/blog/posts";

import ActionButtonUI from "../ui/ActionButton";
import Title from "../ui/Title";

interface CategoryCarouselProps {
  setSelectedCategory: (category: string) => void;
}

const CategoryCarousel = ({ setSelectedCategory }: CategoryCarouselProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  const getCategoryCount = (categoryName: string) => {
    return posts.filter((post) => post.category === categoryName).length;
  };

  useEffect(() => {
    const checkScrollable = () => {
      if (sliderRef.current) {
        const { scrollWidth, clientWidth } = sliderRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 640 ? -50 : -100;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 50 : 100;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto my-6 flex max-w-[1440px] flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:gap-3 md:mb-[38px] md:mt-[48px] md:px-[32px]">
      <Title>Blog</Title>
      <div className="flex w-full flex-col flex-nowrap items-start gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-[10px]">
        <div className="relative w-full sm:w-auto">
          <div
            ref={sliderRef}
            className="scrollbar-hide flex w-full flex-wrap items-center gap-2 overflow-x-auto sm:w-auto sm:gap-[10px]"
          >
            {category.map((category) => (
              <ActionButtonUI
                key={category.id}
                onClick={() => setSelectedCategory(category.text)}
              >{`${category.text} (${getCategoryCount(
                category.text,
              )})`}</ActionButtonUI>
            ))}
          </div>
          {showScrollButtons && (
            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center justify-between gap-2 sm:flex sm:gap-[10px]">
              <button
                type="button"
                className="flex size-[32px] items-center justify-center rounded-[40px] border-2 border-[#F54D33] bg-white/80 backdrop-blur-sm sm:size-[40px]"
                onClick={scrollLeft}
              >
                <img
                  src="/icons/back-arrow.svg"
                  alt="Previous slide"
                  className="size-4 sm:size-[18px]"
                />
              </button>
              <button
                type="button"
                className="flex size-[32px] items-center justify-center rounded-[40px] border-2 border-[#F54D33] bg-white/80 backdrop-blur-sm sm:size-[40px]"
                onClick={scrollRight}
              >
                <img
                  src="/icons/forward-arrow.svg"
                  alt="Next slide"
                  className="size-4 sm:size-[18px]"
                />
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            className="flex size-[32px] items-center justify-center rounded-[40px] border-2 border-[#F54D33]"
            onClick={scrollLeft}
          >
            <img
              src="/icons/back-arrow.svg"
              alt="Previous slide"
              className="size-4"
            />
          </button>
          <button
            type="button"
            className="flex size-[32px] items-center justify-center rounded-[40px] border-2 border-[#F54D33]"
            onClick={scrollRight}
          >
            <img
              src="/icons/forward-arrow.svg"
              alt="Next slide"
              className="size-4"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
