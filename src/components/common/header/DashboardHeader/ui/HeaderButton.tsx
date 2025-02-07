import { Link } from "react-router-dom";

const HeaderButton = ({ children }: { children: string }) => {
  return (
    <Link to={"/"}>
      <button className="sm:block flex justify-center items-center border-[#385C80] border-2 bg-transparent hover:bg-[#385C80] px-[10px] rounded-full w-auto h-[24px] text-sm hover:text-white transition-all">
        {children}
      </button>
    </Link>
  );
};

export default HeaderButton;
