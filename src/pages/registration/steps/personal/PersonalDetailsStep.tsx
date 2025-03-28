import React from "react";

import { RegistrationStepProps } from "@/types/registration";

const PersonalDetailsStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  registrationData,
  updateRegistrationData,
  isLastStep,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center p-6">
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-2xl font-bold">{title}</h1>
        {description && <p className="text-gray-600">{description}</p>}
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full rounded-lg border p-3"
          value={registrationData.firstName || ""}
          onChange={(e) =>
            updateRegistrationData({ firstName: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          className="w-full rounded-lg border p-3"
          value={registrationData.lastName || ""}
          onChange={(e) => updateRegistrationData({ lastName: e.target.value })}
          required
        />

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-red-500 p-3 text-white"
        >
          {isLastStep ? "Complete" : "Next"}
        </button>
      </form>
    </div>
  );
};

export default PersonalDetailsStep;
