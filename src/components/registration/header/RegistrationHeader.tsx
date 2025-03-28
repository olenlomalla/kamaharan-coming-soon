import { OnboardingHeaderProps } from "@/types/onboarding";

const RegistrationHeader = ({ onNext, className }: OnboardingHeaderProps) => {
  return (
    <div className="relative z-20 mb-[147px] w-full bg-transparent">
      <div
        className={`left-0 z-20 flex w-full items-center justify-between bg-transparent pl-11 pr-8 pt-11 ${className}`}
      >
        <div className="" />
        <img src="/images/logo/logo.png" alt="logo" width={215} height={46} />
        <div className="flex flex-1 justify-end">
          <button
            className="flex h-[24px] w-[80px] items-center justify-center rounded-full border-2 border-[#385C80] bg-transparent text-sm transition-all hover:bg-[#385C80] hover:text-white sm:block"
            onClick={onNext}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationHeader;
