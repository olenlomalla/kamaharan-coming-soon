import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Step Components
import WelcomeStep from "./steps/WelcomeStep";
import SuccessStep from "./steps/SuccessStep";
import LocationStep from "./steps/LocationStep";
import NotificationsStep from "./steps/NotificationsStep";
import { UserData } from "@/types/onboarding";
import { OnboardingStepProps } from "@/types/onboarding";

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({});

  const steps: React.FC<OnboardingStepProps>[] = [
    WelcomeStep,
    LocationStep,
    NotificationsStep,
    SuccessStep,
  ];

  const updateUserData = (newData: Partial<UserData>) => {
    setUserData((prevData) => ({ ...prevData, ...newData }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      // Final step - complete onboarding
      navigate("/dashboard");
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep];

  return (
    <CurrentStepComponent
      title="Step Title"
      description="Step Description"
      image="/default.svg"
      mobileImage="/default-mobile.svg"
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
