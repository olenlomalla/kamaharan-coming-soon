import { icons } from "@/constants/bottomIcons";
import { useState } from "react";

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
          className="z-10 fixed inset-0 flex justify-center items-center bg-black"
          onClick={() => setShowInfoOverlay(false)}
        >
          <div className="px-6 max-w-2xl text-[#D1D5DB] text-center animate-fadeIn duration-1000">
            <p className="text-2xl">
              Your gateway to authentic local experiences. We're building a
              community that connects shoppers with London's most unique and
              trusted local businesses.
            </p>
          </div>
        </div>
      )}

      <div
        className={`right-0 bottom-0 left-0 z-10 absolute flex justify-between items-center p-8 pt-[10px] ${isModalOpen ? "hidden" : ""}`}
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
