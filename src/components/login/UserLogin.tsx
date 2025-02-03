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
      console.log("Please enter");
      localStorage.setItem("authenticated", "true");
      setShowPasswordDialog(false);
      navigate("/onboarding");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <>
      <div className="top-4 right-4 z-20 absolute">
        <button
          onClick={() => {
            setShowPasswordDialog(true);
            setError("");
            setPassword("");
          }}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          aria-label="Open login dialog"
        >
          <User className="w-6 h-6 text-white" />
        </button>
      </div>

      {showPasswordDialog && (
        <div
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPasswordDialog(false);
            }
          }}
        >
          <form
            onSubmit={handlePasswordSubmit}
            className="border-white/20 bg-white/10 mx-4 p-8 border rounded-xl w-full max-w-md"
          >
            <h2 className="mb-4 font-bold text-2xl text-center">
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
              className="border-white/20 focus:border-white bg-white/10 mb-4 px-4 border rounded-lg w-full h-12 focus:outline-none"
              required
              autoFocus
            />
            {error && (
              <p className="mb-4 text-center text-red-500 text-sm">{error}</p>
            )}
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setShowPasswordDialog(false)}
                className="flex-1 bg-white/10 hover:bg-white/20 rounded-lg h-12 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-primary-default hover:bg-primary-dark rounded-lg h-12 font-medium text-white transition-colors"
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
