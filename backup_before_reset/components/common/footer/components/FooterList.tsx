import { FC } from "react";
import FooterItem from "./FooterItem";

interface IFooterListProps {
  items: { name: string; url: string }[];
}

const FooterList: FC<IFooterListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <FooterItem name={item.name} url={item.url} key={index}></FooterItem>
      ))}
    </ul>
  );
};

export default FooterList;
