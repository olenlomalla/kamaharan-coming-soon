import { FC } from "react";

interface IModalLogo {
  onClose: () => void;
}

const ModalLogo: FC<IModalLogo> = ({ onClose }) => {
  return (
    <button
      type="button"
      onClick={onClose}
      className="mb-[0px] sm:mb-[30px] lg:mb-[48px]"
    >
      <img
        src="/logo-modal.svg"
        alt="Kamaharan logo image"
        className="max-h-[46px] max-w-[215px]"
      />
    </button>
  );
};

export default ModalLogo;
