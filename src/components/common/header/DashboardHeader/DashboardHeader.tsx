import ActionButtons from "./components/HeaderActionButtons";
import HeaderFormSearch from "./components/HeaderFormSearch";
import { HeaderLogo } from "./components/HeaderLogo";
import HeaderLeft from "./components/HeaderLeft";
import HeaderNavigation from "./components/HeaderNavigation";
import UserAccount from "./components/UserAccount";
import ActionButtonUI from "@/components/ui/ActionButton";
import HeaderButtonContainer from "./components/HeaderButtonContainer";

const DashboardHeader = () => {
  return (
    <header className="flex justify-center items-center px-[32px] pt-[16px] w-[100%] h-[89px]">
      <HeaderLeft>
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderFormSearch />
        <HeaderButtonContainer>
          <ActionButtonUI>K. for business</ActionButtonUI>
          <ActionButtonUI>Start a Project</ActionButtonUI>
        </HeaderButtonContainer>
        <ActionButtons />
      </HeaderLeft>
      <UserAccount />
    </header>
  );
};

export default DashboardHeader;
