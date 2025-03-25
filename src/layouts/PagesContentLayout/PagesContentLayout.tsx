import { FC, ReactNode } from "react";

import DashboardFooter from "@/components/common/footer/DashboardFooter";
import DashboardHeader from "@/components/common/header/DashboardHeader/DashboardHeader";

interface PagesContentLayout {
  children: ReactNode;
  headerClassName?: string;
  className?: string;
}

const PagesContentLayout: FC<PagesContentLayout> = ({
  children,
  headerClassName,
  className,
}) => {
  return (
    <div
      className={`mx-auto flex min-h-screen max-w-[1440px] flex-col bg-white ${className}`}
    >
      <DashboardHeader className={headerClassName} />
      <main className="flex-grow">{children}</main>
      <DashboardFooter />
    </div>
  );
};

export default PagesContentLayout;
