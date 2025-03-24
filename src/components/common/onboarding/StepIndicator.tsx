import React from "react";

import { StepIndicatorProps } from "@/types/onboarding";

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="mt-4 flex justify-center gap-2">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`h-1 w-6 rounded-full ${
            index + 1 === currentStep ? "bg-[#5B5A5E]" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
