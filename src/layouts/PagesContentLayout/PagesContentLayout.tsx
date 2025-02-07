import DashboardFooter from "@/components/common/footer/DashboardFooter";
import DashboardHeader from "@/components/common/header/DashboardHeader/DashboardHeader";
import { FC, ReactNode } from "react";

interface IPagesContentLayout {
  children: ReactNode;
}

const PagesContentLayout: FC<IPagesContentLayout> = ({ children }) => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ maxWidth: "1440px", margin: "0 auto" }}
    >
      <DashboardHeader />
      <main className="flex-grow">{children}</main>
      <DashboardFooter />
    </div>
  );
};

export default PagesContentLayout;
