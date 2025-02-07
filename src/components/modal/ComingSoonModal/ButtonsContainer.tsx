import { FC } from "react";
import ModalButton from "./ModalButton";

interface IButtonsContainer {
  onClose: () => void;
}

const ButtonsContainer: FC<IButtonsContainer> = ({ onClose }) => {
  return (
    <div className="flex justify-between px-4 md:px-[45px] pt-4 md:pt-[32px] w-full">
      <ModalButton onClose={onClose}>Back</ModalButton>
      <ModalButton onClose={onClose}>Skip</ModalButton>
    </div>
  );
};

export default ButtonsContainer;
