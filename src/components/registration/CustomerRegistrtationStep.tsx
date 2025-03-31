import { useState } from "react";

import { RegistrationStepProps } from "@/types/registration";

import ButtonCustom from "./ButtonCustom";
import CheckBoxCustom from "./CheckBoxCustom";
import SelectCustom from "./SelectCustom";

interface CustomStepProps<T> extends RegistrationStepProps {
  initialState: T;
  selectOptions?: { value: string; label: string }[];
  selectTitle?: string;
  textAreaFields?: {
    key: keyof T;
    label: string;
    placeholder?: string;
  }[];
  toggleQuestions: {
    key: keyof T;
    question: string;
  }[];
  onUpdateData: (data: T) => void;
}

const CustomRegistrationStep = <T extends Record<string, any>>({
  title,
  description,
  onNext,
  initialState,
  selectOptions,
  selectTitle,
  textAreaFields,
  toggleQuestions,
  onUpdateData,
}: CustomStepProps<T>) => {
  const [state, setState] = useState<T>(initialState);

  const handleSelectChange = (value: string) => {
    setState((prev) => ({
      ...prev,
      [Object.keys(initialState)[0]]: value,
    }));
  };

  const handleTextAreaChange = (field: keyof T, value: string) => {
    setState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleToggleChange = (field: keyof T, value: boolean) => {
    setState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    onUpdateData(state);
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-12 p-6 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-3 text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
          {title}
        </h1>
        <p className="font-body text-[16px] leading-[18px] tracking-[0.75px] text-[#424144]">
          {description}
        </p>
      </div>

      {/* Content */}
      <div className="w-full space-y-8">
        {selectOptions && selectTitle && (
          <SelectCustom
            options={selectOptions}
            selectedValue={state[Object.keys(initialState)[0]]}
            onChange={handleSelectChange}
            title={selectTitle}
          />
        )}

        {textAreaFields?.map((field) => (
          <div key={String(field.key)} className="space-y-4">
            <label className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px]">
              {field.label}
            </label>
            <textarea
              value={state[field.key] as string}
              onChange={(e) => handleTextAreaChange(field.key, e.target.value)}
              placeholder={field.placeholder}
              className="h-[139px] w-full rounded-[16px] bg-[#EFEFEF] p-5 font-body text-[16px] leading-[18px] tracking-[0.75px]"
              rows={4}
            />
          </div>
        ))}

        {toggleQuestions.map((question) => (
          <div
            key={String(question.key)}
            className="flex items-center justify-between gap-3"
          >
            <span className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px]">
              {question.question}
            </span>
            <CheckBoxCustom
              checked={state[question.key]}
              onChange={(value) =>
                handleToggleChange(question.key, value || false)
              }
            />
          </div>
        ))}
      </div>

      <ButtonCustom title="Next" onClick={handleNext} className="w-full" />
    </div>
  );
};

export default CustomRegistrationStep;
