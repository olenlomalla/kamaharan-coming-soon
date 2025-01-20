import React, { useState } from 'react';
import { authenticate } from '../middleware/auth';

interface AuthModalProps {
  onClose: () => void;
  onAuthenticated: () => void;
}

export const AuthModal = ({ onClose, onAuthenticated }: AuthModalProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authenticate(password)) {
      onAuthenticated();
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-30 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-auto">
        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2"
          >
            ✕
          </button>
        </div>
        <div className="text-gray-800">
          <h2 className="text-2xl font-bold mb-4">Enter Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full h-12 bg-primary-default text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};