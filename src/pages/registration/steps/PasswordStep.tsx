import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import { RegistrationStepProps } from "@/types/registration";

const PasswordStep: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  registrationData,
  updateRegistrationData,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    numberOrSymbol: false,
  });

  const passwordRequirementLabels = {
    length: "At least 12 characters",
    lowercase: "One lowercase character",
    uppercase: "One uppercase character",
    numberOrSymbol: "One number, symbol or whitespace character",
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    updateRegistrationData({ password });

    // Check password requirements
    setPasswordRequirements({
      length: password.length >= 12,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      numberOrSymbol: /[\d\W]/.test(password),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const isPasswordValid = Object.values(passwordRequirements).every(Boolean);

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-2 p-6">
      <h1 className="mb-[38px] text-center font-heading text-[32px] font-semibold leading-[34px] tracking-[1px] text-[#363537]">
        {title}
      </h1>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative flex items-center">
          <button
            type="button"
            className="absolute left-6 -translate-y-3/4 transform"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <img
                src="/icons/register/eye-icon.svg"
                alt="eyeIcon"
                className="h-6 w-6"
              />
            ) : (
              <img
                src="/icons/register/eye-no-icon.svg"
                alt="eyeNoIcon"
                className="h-6 w-6"
              />
            )}
          </button>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="mb-[34px] h-[64px] w-full rounded-lg border bg-[#EFEFEF] p-3 pl-16 pr-3"
            value={registrationData.password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div className="w-full space-y-2">
          {Object.entries(passwordRequirements).map(([key, isFulfilled]) => (
            <div
              key={key}
              className={`flex items-center gap-3 ${isFulfilled ? "text-green-500" : "text-black"}`}
            >
              <img
                src="/icons/register/password-icon.svg"
                alt="password-icon"
                className="h-4 w-4"
              />
              <span className="font-body text-[16px] font-normal leading-[18px] text-[#33475B]">
                {
                  passwordRequirementLabels[
                    key as keyof typeof passwordRequirementLabels
                  ]
                }
              </span>
            </div>
          ))}
        </div>

        <ButtonCustom type="submit" title="Next" className="mt-[54px] w-full" />
      </form>
    </div>
  );
};

export default PasswordStep;
