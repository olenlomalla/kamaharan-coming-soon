import { dashboardHeaderIcons } from "../data";
import HeaderLink from "./HeaderLink";

const HeaderNavigation = () => {
  return (
    <nav className="flex justify-center items-center gap-[24px] h-[40px]">
      {dashboardHeaderIcons.map((item) => (
        <HeaderLink to={item.url} key={item.imageId} iconUrl={item.imageUrl}>
          {item.imageLabel}
        </HeaderLink>
      ))}
    </nav>
  );
};

export default HeaderNavigation;
