import React from "react";

import AccountTypeButton from "@/components/registration/AccountTypeButton";
import { RegistrationStepProps, RegistrationType } from "@/types/registration";

const AccountTypeSelector: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  registrationType,
  setRegistrationType,
}) => {
  const handleTypeChange = (type: RegistrationType) => {
    if (setRegistrationType) {
      setRegistrationType(type);
    }
    onNext();
  };

  const accountTypes = [
    {
      type: "personal" as RegistrationType,
      title: "Personal Account",
      description: "For individual users",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
            stroke="#E74C3C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 20C18 17.7909 15.3137 16 12 16C8.68629 16 6 17.7909 6 20"
            stroke="#E74C3C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      type: "business" as RegistrationType,
      title: "Business Account",
      description: "For companies and organizations",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
            stroke="#E74C3C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
            stroke="#E74C3C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center p-6">
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-[32px] font-semibold text-[#363537]">
          {title || "Choose Account Type"}
        </h1>
        {description && (
          <p className="text-body text-[#363537]">
            {description || "Select how you want to use Kamaharan"}
          </p>
        )}
      </div>

      <div className="w-full space-y-4">
        {accountTypes.map((account) => (
          <AccountTypeButton
            key={account.type}
            type={account.type}
            title={account.title}
            description={account.description}
            icon={account.icon}
            isSelected={registrationType === account.type}
            onClick={handleTypeChange}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountTypeSelector;
