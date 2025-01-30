import { OnboardingHeaderProps } from "@/types/onboarding";

const OnboardingHeader = ({ onNext }: OnboardingHeaderProps) => {
  return (
    <div className="pt-4 min-h-[5vh]">
      <div className="flex w-full justify-between items-center px-4">
        <div className="flex-1" />
        <img src="/images/logo/logo.png" alt="logo" width={215} height={46} />
        <div className="flex-1 flex justify-end">
          <button
            className="flex text-sm items-center justify-center border-2 border-[#385C80] rounded-full w-[80px] h-[24px]"
            onClick={onNext}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingHeader;
