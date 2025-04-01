import { FC, ReactNode } from "react";

interface IHeaderLeft {
  children: ReactNode;
}

const HeaderLeft: FC<IHeaderLeft> = ({ children }) => {
  return (
    <div className="hidden w-full justify-between gap-1 sm:gap-1.5 md:flex md:items-center md:gap-2.5 lg:gap-6">
      {children}
    </div>
  );
};

export default HeaderLeft;
