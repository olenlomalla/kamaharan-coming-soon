import { useNavigate } from "react-router-dom";

import { User } from "lucide-react";

const UserLogin = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="absolute right-4 top-4 z-20">
        <button
          onClick={handleNavigate}
          className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
          aria-label="Open login dialog"
        >
          <User className="h-6 w-6 text-white" />
        </button>
      </div>
    </>
  );
};

export default UserLogin;
