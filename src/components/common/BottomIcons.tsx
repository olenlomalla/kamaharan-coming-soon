import { useState } from "react";

import { icons } from "@/constants/bottomIcons";

interface BottomIconsProps {
  isModalOpen: boolean;
}

const BottomIcons: React.FC<BottomIconsProps> = ({ isModalOpen }) => {
  const [showInfoOverlay, setShowInfoOverlay] = useState(false);

  const handleIconClick = (iconId: number) => {
    if (iconId === 0) {
      setShowInfoOverlay((prev) => !prev);
    }
  };

  return (
    <>
      {showInfoOverlay && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black"
          onClick={() => setShowInfoOverlay(false)}
        >
          <div className="max-w-2xl animate-fadeIn px-6 text-center text-[#D1D5DB] duration-1000">
            <p className="text-2xl">
              Your gateway to authentic local experiences. We're building a
              community that connects shoppers with London's most unique and
              trusted local businesses.
            </p>
          </div>
        </div>
      )}

      <div
        className={`absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between p-8 pt-[10px] ${isModalOpen ? "hidden" : ""}`}
      >
        {icons.map((icon) => (
          <button key={icon.id} onClick={() => handleIconClick(icon.id)}>
            <img width={40} height={40} src={icon.src} alt={icon.alt} />
          </button>
        ))}
      </div>
    </>
  );
};

export default BottomIcons;
