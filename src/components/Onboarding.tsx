import { useState } from "react";
import WelcomeStep from "@/pages/onboarding/steps/WelcomeStep";
import LocationStep from "@/pages/onboarding/steps/LocationStep";
import NotificationsStep from "@/pages/onboarding/steps/NotificationsStep";
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

  const steps = [
    {
      component: WelcomeStep,
      title: "Welcome to Kamaharan",
      description: "Discover London's finest local businesses",
      image: "/onboarding-blue.svg",
      mobileImage: "/onboarding-blue-mobile.svg",
    },
    // {
    //   component: CategoryStep,
    //   title: "Choose Your Interests",
    //   description:
    //     "Select categories that interest you for personalized recommendations",
    //   image: "/onboarding-green.svg",
    //   mobileImage: "/onboarding-green-mobile.svg",
    // },
    {
      component: LocationStep,
      title: "Set Your Location",
      description: "Help us show you the best businesses in your area",
      image: "/onboarding-pink.svg",
      mobileImage: "/onboarding-pink-mobile.svg",
    },
    {
      component: NotificationsStep,
      title: "Enable Notifications",
      description: "Stay updated with the latest deals and offers",
      image: "/onboarding-yellow.svg",
      mobileImage: "/onboarding-yellow-mobile.svg",
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
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

  const CurrentStep = steps[currentStep]
    .component as React.FC<OnboardingStepProps>;

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="h-full flex flex-col">
        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-primary-default transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        <CurrentStep
          title={steps[currentStep].title}
          description={steps[currentStep].description}
          image={steps[currentStep].image}
          mobileImage={steps[currentStep].mobileImage}
          onNext={handleNext}
          onBack={handleBack}
          isFirstStep={currentStep === 0}
          isLastStep={currentStep === steps.length - 1}
          currentStep={currentStep + 1}
          totalSteps={steps.length}
          userData={userData}
          updateUserData={updateUserData}
        />
      </div>
    </div>
  );
}
