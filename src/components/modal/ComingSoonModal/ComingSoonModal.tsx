import { useEffect, useState } from "react";

import AccountCards from "./AccountCards";
import ButtonsContainer from "./ButtonsContainer";
import ModalLogo from "./ModalLogo";
import ModalTitles from "./ModalTitles";

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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-black bg-opacity-75 ${
        isVisible ? "animate-modalIn" : "opacity-0"
      }`}
    >
      <ButtonsContainer onClose={onClose} />

      <div className="flex flex-grow flex-col items-center justify-center">
        <ModalLogo onClose={onClose} />

        <ModalTitles headTitle={titles.h1} description={titles.p} />

        <AccountCards onClose={onClose} />
      </div>
    </div>
  );
};

export default ComingSoonModal;
