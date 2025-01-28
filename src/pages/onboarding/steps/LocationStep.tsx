// pages/onboarding/steps/LocationStep.tsx
import React, { useState } from "react";
import { OnboardingStepProps } from "@/types/onboarding";

const LocationStep: React.FC<OnboardingStepProps> = ({
  title,
  description,
  updateUserData,
  onNext,
  onBack,
}) => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleContinue = () => {
    updateUserData({ location: { city: location } });
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="text-4xl font-bold font-syne">{title}</div>
        <p className="text-lg text-gray-700">{description}</p>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter your location"
            className="px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            className="bg-primary-default text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            onClick={handleContinue}
          >
            Continue
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
  );
};

export default LocationStep;
