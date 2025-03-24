import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { stepConfigs } from "@/constants/onboarding";
import { UserData } from "@/types/onboarding";

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({});

  const steps = stepConfigs.map((config) => config.component);

  const updateUserData = (newData: Partial<UserData>) => {
    setUserData((prevData) => ({ ...prevData, ...newData }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      // Final step - complete onboarding
      navigate("/home");
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep];
  const currentStepConfig = stepConfigs[currentStep];

  return (
    <CurrentStepComponent
      title={currentStepConfig.title}
      description={currentStepConfig.description}
      backgroundImage={currentStepConfig.backgroundImage}
      mobileBackgroundImage={currentStepConfig.mobileBackgroundImage}
      roundedShapeColor={currentStepConfig.roundedShapeColor}
      onNext={nextStep}
      onBack={prevStep}
      isFirstStep={currentStep === 0}
      isLastStep={currentStep === steps.length - 1}
      currentStep={currentStep + 1}
      totalSteps={steps.length}
      userData={userData}
      updateUserData={updateUserData}
    />
  );
};

export default OnboardingPage;
