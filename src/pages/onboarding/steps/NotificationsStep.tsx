import React from "react";
import { useEffect, useState } from "react";
import { OnboardingStepProps } from "@/types/onboarding";
import OnboardingHeader from "@/components/common/header/OnboardingHeader";
import OnboardingBgImage from "@/layouts/OnboardingBgImage/onBoardingBgImage";
import CommonStepLayout from "@/layouts/CommonStepLayout/CommonStepLayout";

const WelcomeStep: React.FC<OnboardingStepProps> = ({
  title,
  description,
  onNext,
  onBack,
  currentStep,
  totalSteps,
  backgroundImage,
  mobileBackgroundImage,
  roundedShapeColor,
}) => {
  const [permission, setPermission] = useState(Notification.permission);

  useEffect(() => {
    if (permission === "default") {
      Notification.requestPermission().then((perm) => {
        setPermission(perm);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen">
      <OnboardingBgImage
        backgroundImage={backgroundImage}
        mobileBackgroundImage={mobileBackgroundImage}
        backgroundColor="#FFE4BC"
      />
      <OnboardingHeader onNext={onNext} />
      <CommonStepLayout
        title={title}
        description={description}
        onNext={onNext}
        onBack={onBack}
        currentStep={currentStep}
        totalSteps={totalSteps}
        backgroundImage={backgroundImage}
        roundedShapeColor={roundedShapeColor}
        buttonText="Enable Notifications"
      />
    </section>
  );
};

export default WelcomeStep;
