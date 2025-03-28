interface ButtonNextProps {
  title: string;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

export default function ButtonNext({
  title,
  className,
  onClick,
  type,
}: ButtonNextProps) {
  return (
    <button
      type={type}
      className={`${className} h-[64px] rounded-[40px] bg-[#F54D33] text-[18px] font-normal leading-[24px] tracking-[0.75px] text-white`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
