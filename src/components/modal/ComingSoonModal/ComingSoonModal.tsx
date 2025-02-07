import { useState, useEffect } from "react";
import ButtonsContainer from "./ButtonsContainer";
import ModalLogo from "./ModalLogo";
import ModalTitles from "./ModalTitles";
import AccountCards from "./AccountCards";

interface IComingSoonModal {
  onClose: () => void;
}

const ComingSoonModal: React.FC<IComingSoonModal> = ({ onClose }) => {
  const titles = {
    h1: "Create Your Account",
    p: "Choose how you want to use Kamaharan",
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`z-50 fixed inset-0 flex flex-col justify-between items-center bg-black bg-opacity-75 ${
        isVisible ? "animate-modalIn" : "opacity-0"
      }`}
    >
      <ButtonsContainer onClose={onClose} />

      <div className="flex flex-col flex-grow justify-center items-center">
        <ModalLogo onClose={onClose} />

        <ModalTitles headTitle={titles.h1} description={titles.p} />

        <AccountCards onClose={onClose} />
      </div>
    </div>
  );
};

export default ComingSoonModal;
