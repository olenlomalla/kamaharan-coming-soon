import { FC, ReactNode } from "react";

interface IFooterTitleProps {
  children: ReactNode;
}

const FooterTitle: FC<IFooterTitleProps> = ({ children }) => {
  return (
    <h3 className="mb-[24px] font-heading font-bold text-[#385C80] text-[18px]">
      {children}
    </h3>
  );
};

export default FooterTitle;
