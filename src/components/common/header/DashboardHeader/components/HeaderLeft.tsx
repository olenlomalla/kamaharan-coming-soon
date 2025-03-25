import { FC, ReactNode } from "react";

interface IHeaderLeft {
  children: ReactNode;
}

const HeaderLeft: FC<IHeaderLeft> = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-[24px]">
      {children}
    </div>
  );
};

export default HeaderLeft;
