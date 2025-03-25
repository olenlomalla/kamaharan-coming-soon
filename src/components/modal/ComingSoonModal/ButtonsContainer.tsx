import { FC } from "react";

import ModalButton from "./ModalButton";

interface IButtonsContainer {
  onClose: () => void;
}

const ButtonsContainer: FC<IButtonsContainer> = ({ onClose }) => {
  return (
    <div className="flex w-full justify-between px-4 pt-4 md:px-[45px] md:pt-[32px]">
      <ModalButton onClose={onClose}>Back</ModalButton>
      <ModalButton onClose={onClose}>Skip</ModalButton>
    </div>
  );
};

export default ButtonsContainer;
