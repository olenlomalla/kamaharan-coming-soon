import React from "react";

interface SocialButtonProps {
  provider: string;
  icon: string;
  onClick: (provider: string) => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  icon,
  onClick,
}) => {
  return (
    <button
      className="flex h-[64px] w-full flex-row items-center justify-center gap-4 rounded-[32px] border border-[#333] bg-[#FFF]"
      onClick={() => onClick(provider)}
    >
      <img src={icon} alt={provider} className="h-8 w-8" />
      <span className="text-6 font-normal" style={{ fontFamily: "Avenir" }}>
        Sign up with {provider}
      </span>
    </button>
  );
};

export default SocialButton;
