import StepButton from "@/components/common/onboarding/StepButton";
import StepIndicator from "@/components/common/onboarding/StepIndicator";
import { OnboardingStep } from "@/types/onboarding";

const WelcomeStepLayout = ({
  title,
  description,
  onNext,
  currentStep,
  totalSteps,
  roundedShapeColor,
}: OnboardingStep) => {
  return (
    <div className="relative bg-[#F8F7F4] z-10 flex flex-col items-center justify-center min-h-[95vh] px-4 sm:px-6 lg:px-8">
      <div
        className="absolute bottom-0 left-0 right-0 h-[65vh] -z-10"
        style={{
          background: roundedShapeColor,
          borderTopLeftRadius: "50% 25%",
          borderTopRightRadius: "50% 25%",
        }}
      />

      <div className="w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold font-syne text-[#385C80]">{title}</h1>
        <p className="text-lg text-black mx-auto max-w-[30ch]">{description}</p>
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
        <div className="flex items-center flex-col gap-4">
          <StepButton onNext={onNext} text="Let's Get Started" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeStepLayout;
