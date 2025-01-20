import React, { useState } from "react";
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { DynamicBackgroundGrid } from '@/components/dynamic-background-grid';
import { Logo } from '@/components/ui/Logo'; 

const backgroundImages = [
  { image: '/images/image1.jpg', alt: 'Business category 1' },
  { image: '/images/image2.jpg', alt: 'Business category 2' },
  { image: '/images/image3.jpg', alt: 'Business category 3' },
  { image: '/images/image4.jpg', alt: 'Business category 4' },
  { image: '/images/image5.jpg', alt: 'Business category 5' }
];

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
  </div>
);

const ComingSoonPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      localStorage.setItem('authenticated', 'true');
      setShowPasswordDialog(false);
      navigate('/onboarding');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div 
      className="min-h-screen bg-black text-white relative overflow-hidden font-syne"
      style={{ 
        minHeight: '100vh', 
        backgroundColor: '#000000' 
      }}
    >
      {isLoading && <LoadingSpinner />}
      
      {/* Background with Gradients */}
      <div className="absolute inset-0 w-full h-full">
        <div className="grid grid-cols-5 h-full">
          {backgroundImages.map((column, index) => (
            <div key={index} className="relative h-full overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${column.image})` }}
                role="img"
                aria-label={column.alt}
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-4 right-4 z-20">
        <button 
          onClick={() => {
            setShowPasswordDialog(true);
            setError('');
            setPassword('');
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
                setError('');
              }}
              placeholder="Enter password"
              className="w-full h-12 px-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white mb-4"
              required
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">
                {error}
              </p>
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
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-[600px] mx-auto text-center space-y-8">
          <Logo className="mb-8 w-48 h-auto mx-auto" variant="horizontal-white" />
          <h1 className="text-4xl font-bold font-syne animate-fadeIn">
            Discover London's Finest Local Businesses
          </h1>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fadeIn">
            Your gateway to authentic local experiences. We're building a community that connects shoppers with London's most unique and trusted local businesses.
          </p>

          <div className="max-w-md mx-auto animate-fadeIn">
            <div className="flex flex-col gap-3">
              <button
                className="h-12 px-8 rounded-lg font-medium bg-primary-default text-white hover:bg-primary-dark transition-colors w-full"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;