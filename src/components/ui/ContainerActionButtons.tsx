import React from "react";

import ActionButtonUI from "./ActionButton";

interface ContainerActionButtonsProps {
  arrayOfTitles: string[];
}

const ContainerActionButtons: React.FC<ContainerActionButtonsProps> = ({
  arrayOfTitles,
}) => {
  return (
    <div className="text-body flex items-center justify-center gap-[10px]">
      {arrayOfTitles.map((title, index) => (
        <ActionButtonUI key={index}>{title}</ActionButtonUI>
      ))}
    </div>
  );
};

export default ContainerActionButtons;
