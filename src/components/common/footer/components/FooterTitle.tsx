import { FC, ReactNode } from "react";

interface IFooterTitleProps {
  children: ReactNode;
}

const FooterTitle: FC<IFooterTitleProps> = ({ children }) => {
  return (
    <h3 className="mb-[24px] font-body text-lg text-[#F54D33]">{children}</h3>
  );
};

export default FooterTitle;
