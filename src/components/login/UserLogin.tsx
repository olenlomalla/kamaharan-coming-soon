import { User } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);

  const navigate = useNavigate();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      localStorage.setItem("authenticated", "true");
      setShowPasswordDialog(false);
      navigate("/onboarding");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <>
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => {
            setShowPasswordDialog(true);
            setError("");
            setPassword("");
          }}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          aria-label="Open login dialog"
        >
          <User className="text-white w-6 h-6" />
        </button>
      </div>

      {showPasswordDialog && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPasswordDialog(false);
            }
          }}
        >
          <form
            onSubmit={handlePasswordSubmit}
            className="bg-white/10 p-8 rounded-xl w-full max-w-md mx-4 border border-white/20"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              Enter Password
            </h2>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter password"
              className="w-full h-12 px-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white mb-4"
              required
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setShowPasswordDialog(false)}
                className="flex-1 h-12 rounded-lg font-medium bg-white/10 hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 h-12 rounded-lg font-medium bg-primary-default text-white hover:bg-primary-dark transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UserLogin;
