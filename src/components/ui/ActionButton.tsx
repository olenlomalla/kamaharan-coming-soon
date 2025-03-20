import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ActionButtonUIProps {
  paddingX?: number;
  children: ReactNode;
  path?: string;
}

const ActionButtonUI: React.FC<ActionButtonUIProps> = ({
  children,
  path = "/",
}) => {
  return (
    <Link to={path}>
      <button className="sm:block font-body flex px-[10px] justify-center items-center bg-transparent border-[#F54D33] border-2 rounded-full w-auto h-[24px] text-[12px] text-[#F54D33] transition-all">
        {children}
      </button>
    </Link>
  );
};

export default ActionButtonUI;
