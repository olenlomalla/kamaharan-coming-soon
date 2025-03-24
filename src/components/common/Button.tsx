import { ButtonProps } from "@/types/common";

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="h-[64px] w-[200px] rounded-[40px] bg-[#B8A888] px-8 py-4 font-body text-lg text-[#F8F7F4]">
      {children}
    </button>
  );
};

export default Button;
