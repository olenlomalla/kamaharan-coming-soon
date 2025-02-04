import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IFooterItemProps {
  children: ReactNode;
}

const FooterItem: FC<IFooterItemProps> = ({ children }) => {
  return <li className="mb-[24px] text-[#385C80] text-[16px]">
    <Link to="/">
    {children}
    </Link>
    </li>;
};

export default FooterItem;
