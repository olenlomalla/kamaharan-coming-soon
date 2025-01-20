// pages/onboarding/steps/SuccessStep.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessStepProps {
  onComplete: () => void;
}

const SuccessStep: React.FC<SuccessStepProps> = ({ onComplete }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <CheckCircle className="mx-auto w-16 h-16 text-green-500" />
        <div className="text-4xl font-bold font-syne">Welcome to Kamaharan!</div>
        <p className="text-lg text-gray-700">
          You're all set. Let's start exploring London's finest local businesses.
        </p>
        <button
          className="bg-primary-default text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          onClick={onComplete}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SuccessStep;