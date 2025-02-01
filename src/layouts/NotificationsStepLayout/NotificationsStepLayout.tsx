import StepButton from "@/components/common/onboarding/StepButton";
import StepIndicator from "@/components/common/onboarding/StepIndicator";
import { OnboardingStep } from "@/types/onboarding";

const NotificationsStepLayout = ({
  title,
  description,
  onNext,
  currentStep,
  totalSteps,
  roundedShapeColor,
}: OnboardingStep) => {
  return (
    <div className="relative z-10 flex flex-col justify-end items-center px-4 sm:px-6 lg:px-8 min-h-[100vh]">
      <div
        className="right-0 bottom-0 left-0 -z-10 absolute h-[40vh]"
        style={{
          background: roundedShapeColor,
          borderTopLeftRadius: "50% 25%",
          borderTopRightRadius: "50% 25%",
        }}
      />

      <div className="space-y-8 mb-[10px] w-full text-center">
        <h1 className="font-bold font-syne text-[#385C80] text-4xl">{title}</h1>
        <p className="mx-auto max-w-[30ch] text-black text-lg">{description}</p>
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
        <div className="flex flex-col items-center gap-4 pb-[20px]">
          <StepButton onNext={onNext} text="Let's Get Started" />
        </div>
      </div>
    </div>
  );
};

export default NotificationsStepLayout;
