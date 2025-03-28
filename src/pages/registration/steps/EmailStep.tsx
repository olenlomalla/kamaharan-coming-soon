import React from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import SocialButton from "@/components/registration/SocialButton";
import { RegistrationStepProps } from "@/types/registration";

const EmailStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  registrationData,
  updateRegistrationData,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Signing up with ${provider}`);
  };

  const socialProviders = [
    { provider: "Facebook", icon: "/icons/register/facebook-icon.svg" },
    { provider: "Google", icon: "/icons/register/google-icon.svg" },
    { provider: "Twitter", icon: "/icons/register/twitter-icon.svg" },
  ];
  return (
    <div className="flex w-full flex-col justify-between lg:flex-row">
      <div className="flex flex-col gap-2 lg:mx-[78px] lg:w-1/3">
        <div className="flex flex-col items-center gap-4 md:text-left">
          <h1 className="text-center font-heading text-[32px] font-semibold leading-[34px] tracking-[1px] text-[#363537]">
            {title}
          </h1>
          {description && (
            <p className="text-body text-[18px] font-normal leading-[24px] tracking-[0.75px] text-[#363537]">
              {description}
            </p>
          )}
        </div>
        <div className="flex w-full flex-col gap-4">
          {socialProviders.map((item) => (
            <SocialButton
              key={item.provider}
              provider={item.provider}
              icon={item.icon}
              onClick={handleSocialSignup}
            />
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="text-6 bg-[#F8F7F4] px-6 text-[#666] text-gray-500">
              OR
            </span>
          </div>
        </div>
        <div
          className="text-center text-[18px] font-normal text-[#333]"
          style={{ fontFamily: "Poppins" }}
        >
          <span>Sign up with your email address</span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-[54px]"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-[16px] border bg-[#EFEFEF] p-3 px-[24px] py-[17px]"
            value={registrationData.email}
            onChange={(e) => updateRegistrationData({ email: e.target.value })}
            required
          />

          <ButtonCustom type="submit" title="Verify Email" />
        </form>
      </div>

      <div className="flex items-center pb-24 pl-[150px] lg:w-2/3">
        <img src="/images/logo/logo.png" alt="Logo" className="h-[78px]" />
      </div>
    </div>
  );
};

export default EmailStep;
