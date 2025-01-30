import React from "react";
import { StepIndicatorProps } from "@/types/onboarding";

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex gap-2 justify-center mt-4">
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
