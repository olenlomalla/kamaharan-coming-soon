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
        className={`flex w-auto min-w-[60px] items-center justify-center overflow-hidden whitespace-nowrap rounded-full border-2 border-[#F54D33] bg-transparent px-1.5 font-body text-[10px] text-[#F54D33] transition-all sm:block md:h-[24px] md:min-w-[80px] md:px-[10px] md:text-[12px] ${
          active
            ? "border-[#F54D33] bg-[#F54D33] text-white"
            : "border-[#F54D33] bg-white text-[#030712] hover:bg-[#F54D33] hover:text-white"
        }`}
      >
        <p className="flex truncate pb-0.5 text-sm font-normal leading-120 tracking-[0.25px]">
          {children}
        </p>
      </button>
    </Link>
  );
};

export default ActionButtonUI;
