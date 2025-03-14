import { dashboardHeaderIcons } from "@/mocks/common/DashboardHeader/data";
import HeaderLink from "./HeaderLink";

const HeaderNavigation = () => {
  return (
    <nav className="flex justify-center items-center gap-[24px] h-[40px]">
      {dashboardHeaderIcons.map((item) => (
        <HeaderLink to={item.url} key={item.id} icon={item.icon}>
          {item.label}
        </HeaderLink>
      ))}
    </nav>
  );
};

export default HeaderNavigation;
