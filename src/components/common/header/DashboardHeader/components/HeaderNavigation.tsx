import { dashboardHeaderIcons } from "../data";
import HeaderButton from "./HeaderButton";

const HeaderNavigation = () => {
  return (
    <nav className="flex justify-center items-center gap-[24px] h-[40px]">
      {dashboardHeaderIcons.map((item) => (
        <HeaderButton to={item.url} key={item.imageId} iconUrl={item.imageUrl}>
          {item.imageLabel}
        </HeaderButton>
      ))}
    </nav>
  );
};

export default HeaderNavigation;
