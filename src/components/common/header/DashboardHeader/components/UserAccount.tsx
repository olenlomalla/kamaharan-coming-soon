import { useEffect, useRef, useState } from "react";

import UserAccountPopup from "./UserAccountPopup/UserAccountPopup";

const UserAccount = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="ml-[10px] flex flex-col justify-center"
        onClick={() => setIsPopupOpen(!isPopupOpen)}
      >
        <img
          src="/icons/dashboard/header/user.svg"
          alt="User Button"
          className="h-[24px] w-[24px]"
        />
        <p className="text-center font-body text-[11px] text-[#424144]">You</p>
      </button>

      <div ref={popupRef}>
        <UserAccountPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      </div>
    </div>
  );
};

export default UserAccount;
