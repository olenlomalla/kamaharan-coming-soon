import { FC, ReactNode } from "react";

interface IHeaderLeft {
  children: ReactNode;
}

const HeaderLeft: FC<IHeaderLeft> = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-[24px]">
      {children}
    </div>
  );
};

export default HeaderLeft;
