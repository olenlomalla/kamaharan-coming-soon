import { StepButtonProps } from "@/types/onboarding";

const StepButton = ({ onNext, text }: StepButtonProps) => {
  return (
    <button
      className="w-[200px] bg-[#385C80] rounded-[40px] text-lg text-[#F8F7F4] h-[64px] flex justify-center items-center"
      onClick={onNext}
    >
      {text}
    </button>
  );
};

export default StepButton;
