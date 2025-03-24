import { FC, ReactNode } from "react";

interface IButton {
  onClose: () => void;
  children: ReactNode;
}

const ModalButton: FC<IButton> = ({ children, onClose }) => {
  return (
    <button
      onClick={onClose}
      className="flex h-[24px] w-[80px] items-center justify-center rounded-full border-2 border-[#385C80] bg-transparent text-sm transition-all hover:bg-[#385C80] hover:text-white"
    >
      {children}
    </button>
  );
};

export default ModalButton;
