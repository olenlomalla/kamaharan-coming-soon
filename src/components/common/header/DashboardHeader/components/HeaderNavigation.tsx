import { dashboardHeaderIcons } from "@/constants/common/DashboardHeader/data";

import HeaderLink from "./HeaderLink";

const HeaderNavigation = () => {
  return (
    <nav className="flex h-[40px] items-center justify-center gap-[24px]">
      {dashboardHeaderIcons.map((item) => (
        <HeaderLink to={item.url} key={item.id} icon={item.icon}>
          {item.label}
        </HeaderLink>
      ))}
    </nav>
  );
};

export default HeaderNavigation;
