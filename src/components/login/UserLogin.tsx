import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { User } from "lucide-react";

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
      <div className="absolute right-4 top-4 z-20">
        <button
          onClick={() => {
            setShowPasswordDialog(true);
            setError("");
            setPassword("");
          }}
          className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
          aria-label="Open login dialog"
        >
          <User className="h-6 w-6 text-white" />
        </button>
      </div>

      {showPasswordDialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPasswordDialog(false);
            }
          }}
        >
          <form
            onSubmit={handlePasswordSubmit}
            className="mx-4 w-full max-w-md rounded-xl border border-white/20 bg-white/10 p-8"
          >
            <h2 className="mb-4 text-center text-2xl font-bold">
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
              className="mb-4 h-12 w-full rounded-lg border border-white/20 bg-white/10 px-4 focus:border-white focus:outline-none"
              required
              autoFocus
            />
            {error && (
              <p className="mb-4 text-center text-sm text-red-500">{error}</p>
            )}
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setShowPasswordDialog(false)}
                className="h-12 flex-1 rounded-lg bg-white/10 font-medium transition-colors hover:bg-white/20"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="h-12 flex-1 rounded-lg bg-primary-default font-medium text-white transition-colors hover:bg-primary-dark"
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
