import { StepButtonProps } from "@/types/onboarding";

const StepButton = ({ onNext, text }: StepButtonProps) => {
  return (
    <button
      className="flex h-[64px] w-[200px] items-center justify-center rounded-[40px] bg-[#385C80] text-lg text-[#F8F7F4]"
      onClick={onNext}
    >
      {text}
    </button>
  );
};

export default StepButton;
