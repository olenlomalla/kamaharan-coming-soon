import { useState } from "react";
import { stepConfigs } from "@/constants/onboarding";
import {
  OnboardingProps,
  OnboardingStepProps,
  UserData,
} from "@/types/onboarding";

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({});

  const updateUserData = (newData: Partial<UserData>) => {
    setUserData((prevData) => ({ ...prevData, ...newData }));
  };

  const handleNext = () => {
    if (currentStep < stepConfigs.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const CurrentStep = stepConfigs[currentStep]
    .component as React.FC<OnboardingStepProps>;

  return (
    <div className="z-50 fixed inset-0 bg-white">
      <div className="flex flex-col h-full">
        {/* Progress bar */}
        <div className="bg-gray-100 h-1">
          <div
            className="bg-primary-default h-full transition-all duration-300"
            style={{
              width: `${((currentStep + 1) / stepConfigs.length) * 100}%`,
            }}
          />
        </div>

        <CurrentStep
          title={stepConfigs[currentStep].title}
          description={stepConfigs[currentStep].description}
          onNext={handleNext}
          onBack={handleBack}
          isFirstStep={currentStep === 0}
          isLastStep={currentStep === stepConfigs.length - 1}
          currentStep={currentStep + 1}
          totalSteps={stepConfigs.length}
          userData={userData}
          updateUserData={updateUserData}
          mobileBackgroundImage={stepConfigs[currentStep].mobileBackgroundImage}
          backgroundImage={stepConfigs[currentStep].backgroundImage}
          roundedShapeColor={stepConfigs[currentStep].roundedShapeColor}
        />
      </div>
    </div>
  );
}
