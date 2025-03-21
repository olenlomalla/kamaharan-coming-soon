interface UserAccountPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserAccountPopup = ({ isOpen, onClose }: UserAccountPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-[80px] right-0 w-[280px] bg-white shadow-lg py-6 z-10">
      {/* User Info */}
      <div className="flex flex-col items-center mb-6">
        <button onClick={onClose} className="self-start px-6">
          <img src="/icons/dashboard/header/back-icon.svg" alt="" />
        </button>
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden mb-4">
          <img
            src="/icons/dashboard/header/user-avatar.svg"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-heading text-[18px] font-bold mb-2">Julia Kama</h3>
        <div className="flex items-center gap-2">
          <img
            src="/icons/dashboard/header/location.svg"
            alt="Location"
            className="w-4 h-4"
          />
          <span className="text-[14px] text-[#424144]">Baker Street</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="px-6">
        <button className="flex items-center gap-4 w-full py-3 hover:bg-gray-50 rounded-lg transition-colors">
          <img
            src="/icons/dashboard/header/user.svg"
            alt=""
            className="w-5 h-5"
          />
          <span className="font-syne text-[16px]">Profile</span>
        </button>
        <button className="flex items-center gap-4 w-full py-3 hover:bg-gray-50 rounded-lg transition-colors">
          <img
            src="/icons/dashboard/header/activity.svg"
            alt=""
            className="w-5 h-5"
          />
          <span className="font-syne text-[16px]">My Activities</span>
        </button>
        <button className="flex items-center gap-4 w-full py-3 hover:bg-gray-50 rounded-lg transition-colors">
          <img
            src="/icons/dashboard/header/settings.svg"
            alt=""
            className="w-5 h-5"
          />
          <span className="font-syne text-[16px]">Settings</span>
        </button>
      </nav>

      {/* Divider */}
      <div className="h-[1px] bg-[#E5E7EB] my-4 mx-6" />

      {/* Switch Account */}
      <div className="px-6">
        <button className="flex items-center gap-4 w-full py-3 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="w-8 h-8 rounded-full bg-[#F54D33] flex items-center justify-center text-white font-bold">
            BP
          </div>
          <span className="font-syne text-[16px]">Switch Account</span>
        </button>
      </div>
    </div>
  );
};

export default UserAccountPopup;
