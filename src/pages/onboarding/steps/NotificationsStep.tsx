import React from "react";
import { useEffect, useState } from "react";
import { OnboardingStepProps } from "@/types/onboarding";
import NotificationsStepLayout from "@/layouts/NotificationsStepLayout/NotificationsStepLayout";
import OnboardingHeader from "@/components/common/header/OnboardingHeader";
import OnboardingBgImage from "@/layouts/OnboardingBgImage/onBoardingBgImage";

const WelcomeStep: React.FC<OnboardingStepProps> = ({
  title,
  description,
  onNext,
  onBack,
  currentStep,
  totalSteps,
  backgroundImage,
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
        backgroundColor="#FFE4BC"
        imageHeight={500}
      />
      <OnboardingHeader onNext={onNext} />
      <NotificationsStepLayout
        onBack={onBack}
        title={title}
        description={description}
        onNext={onNext}
        currentStep={currentStep}
        totalSteps={totalSteps}
        backgroundImage={backgroundImage}
        roundedShapeColor={roundedShapeColor}
      />
    </section>
  );
};

export default WelcomeStep;
