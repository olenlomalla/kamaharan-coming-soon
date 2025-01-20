import React from 'react';



interface WelcomeStepProps {
  onNext: () => void;
  onSkip: () => void;
}

const WelcomeStep: React.FC<WelcomeStepProps> = ({ onNext, onSkip }) => {
  return (
    <div className="relative min-h-screen">
      

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="text-4xl font-bold font-syne">Welcome to Kamaharan</div>
          <p className="text-lg text-gray-700">
            Discover London's finest local businesses, from top-rated restaurants
            to trusted handymen. We've got you covered.
          </p>
          <div className="flex flex-col gap-4">
            <button
              className="bg-primary-default text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              onClick={onNext}
            >
              Let's Get Started
            </button>
            <button
              className="text-gray-700 hover:text-gray-900 transition-colors"
              onClick={onSkip}
            >
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeStep;