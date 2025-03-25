import { FC, ReactNode } from "react";

import DashboardFooter from "@/components/common/footer/DashboardFooter";
import DashboardHeader from "@/components/common/header/DashboardHeader/DashboardHeader";

interface IPagesContentLayout {
  children: ReactNode;
}

const PagesContentLayout: FC<IPagesContentLayout> = ({ children }) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col bg-[#f8f7f5]">
      <DashboardHeader />
      <main className="flex-grow">{children}</main>
      <DashboardFooter />
    </div>
  );
};

export default PagesContentLayout;
