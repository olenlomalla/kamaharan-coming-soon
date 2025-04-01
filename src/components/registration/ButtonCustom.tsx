interface ButtonNextProps {
  title: string;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

export default function ButtonCustom({
  title,
  className,
  onClick,
  type,
  disabled,
}: ButtonNextProps) {
  return (
    <button
      type={type}
      className={`${className} h-[64px] rounded-[40px] bg-[#F54D33] text-[18px] font-normal leading-[24px] tracking-[0.75px] text-white ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
