import { buttonsData } from "@/constants/common/DashboardHeader/data";
import { DashboardHeaderProps } from "@/types/dashboardHeader";

import ActionButtons from "./components/HeaderActionButtons";
import HeaderButtonContainer from "./components/HeaderButtonContainer";
import HeaderFormSearch from "./components/HeaderFormSearch";
import HeaderLeft from "./components/HeaderLeft";
import { HeaderLogo } from "./components/HeaderLogo";
import HeaderNavigation from "./components/HeaderNavigation";
import UserAccount from "./components/UserAccount";

const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
  return (
    <header className="flex h-[89px] w-full items-center justify-center bg-white px-[32px] pb-[16px]">
      <HeaderLeft>
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderFormSearch />
        <HeaderButtonContainer buttons={buttonsData} />
        <ActionButtons />
      </HeaderLeft>
      <UserAccount />
    </header>
  );
};

export default DashboardHeader;
