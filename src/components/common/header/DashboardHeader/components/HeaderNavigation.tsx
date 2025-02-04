import { dashboardHeaderIcons } from "../data";
import HeaderButton from "./HeaderButton";

const HeaderNavigation = () => {
  return (
    <nav className="flex justify-center items-center h-[40px">
      {dashboardHeaderIcons.map((item) => (
        <HeaderButton
          key={item.imageId}
          link={item.imageLabel}
          iconUrl={item.imageUrl}
        >
          {item.imageLabel}
        </HeaderButton>
        // <img
        //   key={icon.imageId}
        //   src={icon.imageUrl}
        //   alt={icon.imageLabel}
        //   className={`w-[40px] h-[40px] ${index > 0 ? "ml-[24px]" : ""}`}
        // />
      ))}
    </nav>
  );
};

export default HeaderNavigation;
