import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IHeaderButton {
  children: ReactNode;
  icon: string;
  to: string;
}

const HeaderLink: FC<IHeaderButton> = ({ children, icon, to }) => {
  return (
    <Link to={to}>
      <button className="first:first-of-type:ml-[0]">
        <img src={icon} alt={children as string} className="m-auto" />
        <p className="font-body text-[11px] text-[#424144]">{children}</p>
      </button>
    </Link>
  );
};

export default HeaderLink;
