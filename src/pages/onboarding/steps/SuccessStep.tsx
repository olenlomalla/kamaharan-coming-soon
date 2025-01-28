// pages/onboarding/steps/SuccessStep.tsx
import React from "react";
import { OnboardingStepProps } from "@/types/onboarding";

const SuccessStep: React.FC<OnboardingStepProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="text-4xl font-bold font-syne">All Set!</div>
        <p className="text-lg text-gray-700">
          Your profile is now complete. You're ready to explore local
          businesses.
        </p>
        <button
          className="bg-primary-default text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          onClick={onNext}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SuccessStep;
