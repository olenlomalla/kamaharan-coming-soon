import ActionButtons from "./components/HeaderActionButtons";
import HeaderFormSearch from "./components/HeaderFormSearch";
import { HeaderLogo } from "./components/HeaderLogo";
import HeaderLeft from "./components/HeaderLeft";
import HeaderNavigation from "./components/HeaderNavigation";
import UserAccount from "./components/UserAccount";
import HeaderButtonContainer from "./components/HeaderButtonContainer";

const buttonsData = [
  { text: "K. for business", path: "/kamaharan-for-business" },
  { text: "Start a Project", path: "/start-a-project" },
];

interface IDashboardHeaderProps {
  bgColor?: string;
}

const DashboardHeader: React.FC<IDashboardHeaderProps> = ({
  bgColor = "#FFFFFF",
}) => {
  return (
    <header
      className="flex justify-center items-center px-[32px] pt-[16px] w-full h-[89px]"
      style={{
        backgroundColor: bgColor,
      }}
    >
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
