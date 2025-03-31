import { FC, ReactNode } from "react";

interface IHeaderLeft {
  children: ReactNode;
}

const HeaderLeft: FC<IHeaderLeft> = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2.5 lg:gap-6">
      {children}
    </div>
  );
};

export default HeaderLeft;
