import React from "react";

import { RegistrationStepProps, RegistrationType } from "@/types/registration";

import AccountTypeSelector from "./AccountTypeSelector";

const AccountTypeStep: React.FC<RegistrationStepProps> = (props) => {
  const { onNext, setRegistrationType } = props;

  const handleTypeChange = (type: RegistrationType) => {
    if (setRegistrationType) {
      setRegistrationType(type);
    }
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center p-6">
      <AccountTypeSelector {...props} />
    </div>
  );
};

export default AccountTypeStep;
