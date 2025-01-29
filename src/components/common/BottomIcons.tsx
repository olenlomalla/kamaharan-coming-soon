import { icons } from "@/constants/bottomIcons";
import { useState } from "react";

const BottomIcons = () => {
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
          className="fixed inset-0 bg-black z-10 flex items-center justify-center"
          onClick={() => setShowInfoOverlay(false)}
        >
          <div className="text-[#D1D5DB] text-center max-w-2xl px-6">
            <p className="text-2xl">
              Your gateway to authentic local experiences. We're building a
              community that connects shoppers with London's most unique and
              trusted local businesses.
            </p>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 z-10 left-0 right-0 py-6 px-4 flex justify-between items-center">
        {icons.map((icon) => (
          <button key={icon.id} onClick={() => handleIconClick(icon.id)}>
            <img width={54} height={54} src={icon.src} alt={icon.alt} />
          </button>
        ))}
      </div>
    </>
  );
};

export default BottomIcons;
