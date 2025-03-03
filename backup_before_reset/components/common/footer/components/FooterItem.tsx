import { FC } from "react";
import { Link } from "react-router-dom";

interface IFooterItemProps {
  url: string;
  name: string;
}

const FooterItem: FC<IFooterItemProps> = ({ url, name }) => {
  return (
    <li className="mb-[24px] font-body text-[#385C80] text-[14px]">
      <Link to={url}>{name}</Link>
    </li>
  );
};

export default FooterItem;
