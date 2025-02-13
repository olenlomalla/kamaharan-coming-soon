import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ActionButtonUIProps {
  paddingX?: number;
  children: ReactNode;
  path?: string;
}

const ActionButtonUI: React.FC<ActionButtonUIProps> = ({
  children,
  paddingX = 10,
  path = "/",
}) => {
  return (
    <Link to={path}>
      <button
        className="sm:block flex justify-center items-center bg-transparent hover:bg-[#385C80] border-[#385C80] border-2 rounded-full w-auto h-[24px] hover:text-white text-sm transition-all"
        style={{
          paddingInline: paddingX,
        }}
      >
        {children}
      </button>
    </Link>
  );
};

export default ActionButtonUI;
