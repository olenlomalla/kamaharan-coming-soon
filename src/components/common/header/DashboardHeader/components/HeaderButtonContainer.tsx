import { FC } from "react";
import HeaderButton from "./HeaderButton"; // Імпортуємо HeaderButton

interface IHeaderButtonContainer {
  buttons: { text: string; path: string }[]; // Тип для масиву кнопок
}

const HeaderButtonContainer: FC<IHeaderButtonContainer> = ({ buttons }) => {
  return (
    <div className="flex justify-center items-center gap-[24px]">
      {buttons.map((button, index) => (
        <HeaderButton key={index} path={button.path}>
          {button.text}
        </HeaderButton>
      ))}
    </div>
  );
};

export default HeaderButtonContainer;
