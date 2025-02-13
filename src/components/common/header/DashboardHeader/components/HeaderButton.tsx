import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IHeaderButtonProps {
  children: ReactNode;
  path: string;
}

const HeaderButton: FC<IHeaderButtonProps> = ({ children, path }) => {
  return (
    <Link to={path}>
      <button className="sm:block flex justify-center items-center bg-transparent hover:bg-[#385C80] px-[10px] border-[#385C80] border-2 rounded-full w-auto h-[24px] hover:text-white text-sm transition-all">
        {children}
      </button>
    </Link>
  );
};

export default HeaderButton;
