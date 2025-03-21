import DashboardFooter from "@/components/common/footer/DashboardFooter";
import DashboardHeader from "@/components/common/header/DashboardHeader/DashboardHeader";
import { FC, ReactNode } from "react";

interface IPagesContentLayout {
  children: ReactNode;
}

const PagesContentLayout: FC<IPagesContentLayout> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1440px] mx-auto bg-[#f8f7f5]">
      <DashboardHeader />
      <main className="flex-grow">{children}</main>
      <DashboardFooter />
    </div>
  );
};

export default PagesContentLayout;
