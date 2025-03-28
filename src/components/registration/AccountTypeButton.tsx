import React from "react";

import { RegistrationType } from "@/types/registration";

interface AccountTypeButtonProps {
  type: RegistrationType;
  title: string;
  description: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: (type: RegistrationType) => void;
}

const AccountTypeButton: React.FC<AccountTypeButtonProps> = ({
  type,
  title,
  description,
  icon,
  isSelected,
  onClick,
}) => {
  return (
    <button
      className={`flex w-full items-center rounded-lg border-2 p-4 ${
        isSelected
          ? "border-red-500 bg-red-50"
          : "border-gray-300 hover:border-red-300 hover:bg-red-50"
      }`}
      onClick={() => onClick(type)}
    >
      <div className="mr-4">{icon}</div>
      <div className="text-left">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </button>
  );
};

export default AccountTypeButton;
