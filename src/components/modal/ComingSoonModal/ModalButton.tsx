import { FC, ReactNode } from "react";

interface IButton {
  onClose: () => void;
  children: ReactNode;
}

const ModalButton: FC<IButton> = ({ children, onClose }) => {
  return (
    <button
      onClick={onClose}
      className="flex justify-center items-center border-[#385C80] border-2 bg-transparent hover:bg-[#385C80] rounded-full w-[80px] h-[24px] text-sm hover:text-white transition-all"
    >
      {children}
    </button>
  );
};

export default ModalButton;
