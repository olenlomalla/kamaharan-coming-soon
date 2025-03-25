import { RelatedArticleProps } from "@/types/blog";

const RelatedArticle = ({
  cover,
  category,
  title,
  subtitle,
}: RelatedArticleProps) => {
  return (
    <div className="rounded-t-lg">
      <img src={cover} alt="Article Image" />
      <div className="flex flex-col gap-2 rounded-b-lg bg-white p-6 font-syne">
        <h3 className="text-sm font-medium text-[#030712]">{category}</h3>
        <h2 className="text-[20px] text-[#030712]">{title}</h2>
        <p className="text-[#4B5563]">{subtitle}</p>
      </div>
    </div>
  );
};

export default RelatedArticle;
