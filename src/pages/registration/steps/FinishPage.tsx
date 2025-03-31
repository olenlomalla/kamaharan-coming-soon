import React from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import { RegistrationStepProps } from "@/types/registration";

const FinishPage: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  registrationData,
}) => {
  console.log(registrationData);
  return (
    <section className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-8">
      <h1 className="tracking-1 text-center font-heading text-[32px] font-semibold leading-[34px] text-[#363537]">
        {title}
      </h1>
      <div className="flex flex-col items-center gap-3 text-center">
        <img
          src="/icons/register/finish-icon.png"
          alt="Registration complete"
        />
        <p className="font-body text-[14px] leading-[22px] tracking-[0.25px]">
          We've gathered all the necessary information, and you're all set to
          get started!
        </p>
        <ButtonCustom title="Next" onClick={onNext} className="mt-5 w-full" />
      </div>
    </section>
  );
};
export default FinishPage;
