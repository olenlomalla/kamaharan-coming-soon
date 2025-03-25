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
        className={`flex h-[24px] w-auto items-center justify-center rounded-full border-2 border-[#F54D33] bg-transparent px-[10px] font-body text-[12px] text-[#F54D33] transition-all sm:block ${
          active
            ? "border-[#F54D33] bg-[#F54D33] text-white"
            : "border-[#F54D33] bg-white text-[#030712] hover:bg-[#F54D33] hover:text-white"
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default ActionButtonUI;
