import React from "react";

import { RegistrationStepProps } from "@/types/registration";

import AccountTypeSelector from "./AccountTypeSelector";

const AccountTypeStep: React.FC<RegistrationStepProps> = (props) => {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center p-6">
      <AccountTypeSelector {...props} />
    </div>
  );
};

export default AccountTypeStep;
