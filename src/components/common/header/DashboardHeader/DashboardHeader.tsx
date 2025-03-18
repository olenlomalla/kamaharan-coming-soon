import ActionButtons from "./components/HeaderActionButtons";
import HeaderFormSearch from "./components/HeaderFormSearch";
import { HeaderLogo } from "./components/HeaderLogo";
import HeaderLeft from "./components/HeaderLeft";
import HeaderNavigation from "./components/HeaderNavigation";
import UserAccount from "./components/UserAccount";
import HeaderButtonContainer from "./components/HeaderButtonContainer";
import { buttonsData } from "@/mocks/common/DashboardHeader/data";
import { DashboardHeaderProps } from "@/types/dashboardHeader";

const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
  return (
    <header className="flex justify-center items-center bg-white px-[32px] pb-[16px] w-full h-[89px]">
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
