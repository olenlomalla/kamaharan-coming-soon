import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface IHeaderButton {
  children: ReactNode;
  iconUrl: string;
  link: string;
}

const HeaderButton: FC<IHeaderButton> = ({ children, iconUrl, link }) => {
  const navigation = useNavigate();
  const handleChangePage = () => {
    navigation(link);
  };
  return (
    <button
      className="ml-[24px] first:first-of-type:ml-[0]"
      onClick={handleChangePage}
    >
      <img src={iconUrl} alt={children as string} className="m-auto" />
      <p className="text-[#424144] text-[11px]"> {children}</p>
    </button>
  );
};

export default HeaderButton;
