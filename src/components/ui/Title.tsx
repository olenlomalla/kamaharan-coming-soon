import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="decoration-skip-ink font-bold font-syne text-2xl text-left leading-8 tracking-wide">
      {children}
    </h1>
  );
};

export default Title;
