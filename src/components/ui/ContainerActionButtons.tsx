import React from "react";

import ActionButtonUI from "./ActionButton";

interface ContainerActionButtonsProps {
  arrayOfTitles: string[];
}

const ContainerActionButtons: React.FC<ContainerActionButtonsProps> = ({
  arrayOfTitles,
}) => {
  return (
    <div className="text-body flex flex-wrap items-center justify-center gap-1.5 text-xs md:gap-[10px] md:text-sm">
      {arrayOfTitles.map((title, index) => (
        <ActionButtonUI key={index}>{title}</ActionButtonUI>
      ))}
    </div>
  );
};

export default ContainerActionButtons;
