import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="decoration-skip-ink text-left font-heading text-[32px] font-semibold leading-8 tracking-wide text-[#363537]">
      {children}
    </h1>
  );
};

export default Title;
