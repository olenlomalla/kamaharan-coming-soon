import { FC } from "react";
import FooterItem from "./FooterItem";

interface IFooterListProps {
  items: string[];
}

const FooterList: FC<IFooterListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <FooterItem key={index}>{item}</FooterItem>
      ))}
    </ul>
  );
};

export default FooterList;
