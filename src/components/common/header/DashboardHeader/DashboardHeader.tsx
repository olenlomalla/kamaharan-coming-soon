import React from "react";

import { buttonsData } from "@/constants/common/DashboardHeader/data";
import { DashboardHeaderProps } from "@/types/dashboardHeader";

import BurgerMenu from "./components/BurgerMenu";
import ActionButtons from "./components/HeaderActionButtons";
import HeaderButtonContainer from "./components/HeaderButtonContainer";
import HeaderFormSearch from "./components/HeaderFormSearch";
import HeaderLeft from "./components/HeaderLeft";
import { HeaderLogo } from "./components/HeaderLogo";
import HeaderNavigation from "./components/HeaderNavigation";
import UserAccount from "./components/UserAccount";

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ className }) => {
  return (
    <header
      className={`m-auto flex h-[89px] w-full max-w-[1440px] items-center justify-between gap-1 bg-white px-[32px] pb-[16px] sm:gap-1.5 md:gap-2.5 lg:gap-6 ${className}`}
    >
      <HeaderLogo />
      <HeaderLeft>
        <HeaderNavigation />
        <HeaderFormSearch />
        <HeaderButtonContainer buttons={buttonsData} />
        <ActionButtons />
      </HeaderLeft>
      <div className="flex">
        <div className="md:hidden">
          <BurgerMenu />
        </div>
        <UserAccount />
      </div>
    </header>
  );
};

export default DashboardHeader;
