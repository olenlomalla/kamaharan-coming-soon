import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IHeaderButton {
  children: ReactNode;
  iconUrl: string;
  to: string;
}

const HeaderLink: FC<IHeaderButton> = ({ children, iconUrl, to }) => {
  return (
    <Link to={to}>
      <button className="first:first-of-type:ml-[0]">
        <img src={iconUrl} alt={children as string} className="m-auto" />
        <p className="text-[#424144] text-[11px]"> {children}</p>
      </button>
    </Link>
  );
};

export default HeaderLink;
