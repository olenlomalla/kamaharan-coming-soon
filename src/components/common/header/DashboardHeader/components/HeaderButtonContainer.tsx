import { FC } from "react";
import { Link } from "react-router-dom";

interface IHeaderButtonContainer {
  buttons: { text: string; path: string }[];
}

const HeaderButtonContainer: FC<IHeaderButtonContainer> = ({ buttons }) => {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2.5 lg:gap-6">
      {buttons.map((button, index) => (
        <Link
          to={button.path}
          key={index}
          className="font-body text-sm text-[#F54D33]"
        >
          {button.text}
        </Link>
      ))}
    </div>
  );
};

export default HeaderButtonContainer;
