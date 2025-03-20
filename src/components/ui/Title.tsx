import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="font-heading font-semibold text-[32px] text-[#363537] text-left decoration-skip-ink leading-8 tracking-wide">
      {children}
    </h1>
  );
};

export default Title;
