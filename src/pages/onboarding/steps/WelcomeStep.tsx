import React from "react";
import { OnboardingStepProps } from "@/types/onboarding";

const WelcomeStep: React.FC<OnboardingStepProps> = ({
  title,
  description,
  onNext,
  onBack,
}) => {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="text-4xl font-bold font-syne">{title}</div>
          <p className="text-lg text-gray-700">{description}</p>
          <div className="flex flex-col gap-4">
            <button
              className="bg-primary-default text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              onClick={onNext}
            >
              Let's Get Started
            </button>
            <button
              className="text-gray-700 hover:text-gray-900 transition-colors"
              onClick={onBack}
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
