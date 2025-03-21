import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ActionButtonUIProps {
  paddingX?: number;
  children: ReactNode;
  path?: string;
  onClick?: () => void;
  active?: boolean;
}

const ActionButtonUI: React.FC<ActionButtonUIProps> = ({
  children,
  path = "/",
  onClick,
  active,
}) => {
  return (
    <Link to={path} onClick={onClick}>
      <button
        className={`sm:block font-body flex px-[10px] justify-center items-center bg-transparent border-[#F54D33] border-2 rounded-full w-auto h-[24px] text-[12px] text-[#F54D33] transition-all ${
          active
            ? "bg-[#F54D33] text-white border-[#F54D33]"
            : "bg-white text-[#030712] border-[#F54D33] hover:bg-[#F54D33] hover:text-white"
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default ActionButtonUI;
