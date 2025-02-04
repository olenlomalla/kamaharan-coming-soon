import { FC, ReactNode } from "react";

interface IHeaderButtons {
  children: ReactNode;
}

const HeaderButtons: FC<IHeaderButtons> = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-[24px]">
      {children}
    </div>
  );
};

export default HeaderButtons;
