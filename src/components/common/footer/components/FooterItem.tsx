import { FC } from "react";
import { Link } from "react-router-dom";

interface IFooterItemProps {
  url: string;
  name: string;
}

const FooterItem: FC<IFooterItemProps> = ({ url, name }) => {
  return (
    <li className="text-md mb-[24px] font-body text-[#F54D33]">
      <Link to={url}>{name}</Link>
    </li>
  );
};

export default FooterItem;
