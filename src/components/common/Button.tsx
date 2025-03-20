import { ButtonProps } from "@/types/common";

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-[#B8A888] rounded-[40px] text-[#F8F7F4] h-[64px] w-[200px] py-4 px-8 font-body text-lg">
      {children}
    </button>
  );
};

export default Button;
