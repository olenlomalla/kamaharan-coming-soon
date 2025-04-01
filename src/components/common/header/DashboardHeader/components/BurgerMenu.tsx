import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

import { buttonsData } from "@/constants/common/DashboardHeader/data";

import ActionButtons from "./HeaderActionButtons";
import HeaderButtonContainer from "./HeaderButtonContainer";
import HeaderFormSearch from "./HeaderFormSearch";
import HeaderNavigation from "./HeaderNavigation";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="flex size-10 items-center justify-center rounded-full text-2xl text-primary-default transition-all duration-300 hover:bg-gray-100 active:bg-gray-200"
      >
        {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"
            onClick={handleClose}
          />

          <div
            className={`absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                aria-label="Close menu"
                className="rounded-full p-2 text-2xl text-primary-default transition-colors hover:bg-gray-100"
              >
                <IoCloseOutline />
              </button>
            </div>
            <div className="mt-4 flex flex-col space-y-8 pt-4">
              <div className="border-b border-gray-line pb-6">
                <HeaderNavigation />
              </div>
              <div className="border-b border-gray-line pb-6">
                <HeaderFormSearch />
              </div>
              <div className="border-b border-gray-line pb-6">
                <HeaderButtonContainer buttons={buttonsData} />
              </div>
              <div>
                <ActionButtons />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
