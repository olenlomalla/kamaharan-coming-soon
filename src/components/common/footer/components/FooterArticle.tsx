import { FC } from "react";

import FooterList from "./FooterList";
import FooterTitle from "./FooterTitle";

interface IFooterArticle {
  title: string;
  items: { name: string; url: string }[];
}

const FooterArticle: FC<IFooterArticle> = ({ title, items }) => {
  return (
    <article className="w-[250px]">
      <FooterTitle>{title}</FooterTitle>
      <FooterList items={items} />
    </article>
  );
};

export default FooterArticle;
