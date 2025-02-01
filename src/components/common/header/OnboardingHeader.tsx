import { OnboardingHeaderProps } from "@/types/onboarding";

const OnboardingHeader = ({ onNext }: OnboardingHeaderProps) => {
  return (
    <div className="relative z-20 bg-transparent w-full">
      <div className="top-0 right-0 left-0 z-20 absolute flex justify-between items-center bg-transparent px-4 w-full">
        <div className="flex-1" />
        <img src="/images/logo/logo.png" alt="logo" width={215} height={46} />
        <div className="flex flex-1 justify-end">
          <button
            className="flex justify-center items-center border-[#385C80] border-2 bg-transparent hover:bg-[#385C80] rounded-full w-[80px] h-[24px] text-sm hover:text-white transition-all"
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
