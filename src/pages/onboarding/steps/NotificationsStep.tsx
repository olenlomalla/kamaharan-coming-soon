import React, { useEffect, useState } from "react";

import OnboardingHeader from "@/components/common/header/OnboardingHeader";
import CommonStepLayout from "@/layouts/CommonStepLayout/CommonStepLayout";
import OnboardingBgImage from "@/layouts/OnboardingBgImage/onBoardingBgImage";
import { OnboardingStepProps } from "@/types/onboarding";

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
  const [permission, setPermission] = useState(
    typeof Notification !== "undefined" ? Notification.permission : "denied",
  );

  useEffect(() => {
    if (typeof Notification !== "undefined" && permission === "default") {
      Notification.requestPermission().then((perm) => {
        setPermission(perm);
      });
    }
  }, [permission]);

  return (
    <section className="relative min-h-[100svh]">
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
