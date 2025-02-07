import ActionButtons from "./components/ActionButtons";
import HeaderButtons from "./components/HeaderButtons";
import HeaderFormSearch from "./components/HeaderFormSearch";
import { HeaderLogo } from "./components/HeaderLogo";
import HeaderLeft from "./components/HeaderLeft";
import HeaderNavigation from "./components/HeaderNavigation";
import UserAccount from "./components/UserAccount";
import HeaderButton from "./ui/HeaderButton";

const DashboardHeader = () => {
  return (
    <header className="flex justify-center items-center px-[32px] pt-[16px] w-[100%] h-[89px]">
      <HeaderLeft>
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderFormSearch />
        <HeaderButtons>
          <HeaderButton>K. for business</HeaderButton>
          <HeaderButton>Start a Project</HeaderButton>
        </HeaderButtons>
        <ActionButtons />
      </HeaderLeft>
      <UserAccount />
    </header>
  );
};

export default DashboardHeader;
