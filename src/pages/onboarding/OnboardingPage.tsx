import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Step Components
import WelcomeStep from "./steps/WelcomeStep";
import SuccessStep from "./steps/SuccessStep";
import LocationStep from "./steps/LocationStep";
import NotificationsStep from "./steps/NotificationsStep";

// Types
interface UserData {
  userType?: "business" | "customer";
  categories?: string[];
  location?: {
    city: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  notifications?: {
    email: boolean;
    sms: boolean;
    pushNotifications: boolean;
  };
}

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({});

  const steps = [WelcomeStep, LocationStep, NotificationsStep, SuccessStep];

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
      userData={userData}
      updateUserData={updateUserData}
      onNext={nextStep}
      onPrevious={prevStep}
    />
  );
};

export default OnboardingPage;
