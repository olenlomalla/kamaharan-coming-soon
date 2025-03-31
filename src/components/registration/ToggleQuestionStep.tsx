import React from "react";

import ButtonCustom from "./ButtonCustom";
import CheckBoxCustom from "./CheckBoxCustom";
import SelectCustom from "./SelectCustom";

interface Option {
  value: string;
  label: string;
}

interface ToggleQuestion {
  question: string;
  field: string;
  value: boolean;
}

interface SelectQuestion {
  question: string;
  field: string;
  value: string;
  options: Option[];
  position?: "left" | "right";
  order?: number;
}

type QuestionItem =
  | { type: "toggle"; data: ToggleQuestion }
  | { type: "select"; data: SelectQuestion };

interface ToggleQuestionStepProps {
  title: string;
  description?: string;
  questions: ToggleQuestion[];
  selectQuestion?: SelectQuestion;
  secondSelectQuestion?: SelectQuestion;
  onToggleChange: (field: string) => (value?: boolean) => void;
  onSelectChange?: (value: string) => void;
  onSecondSelectChange?: (value: string) => void;
  onSubmit: () => void;
}

const ToggleQuestionStep: React.FC<ToggleQuestionStepProps> = ({
  title,
  description,
  questions,
  selectQuestion,
  onToggleChange,
  onSelectChange,
  onSubmit,
  secondSelectQuestion,
  onSecondSelectChange,
}) => {
  const items: QuestionItem[] = questions.map((q) => ({
    type: "toggle",
    data: q,
  }));

  if (selectQuestion) {
    items.splice(selectQuestion.order || 0, 0, {
      type: "select",
      data: selectQuestion,
    });
  }

  if (secondSelectQuestion) {
    items.splice(secondSelectQuestion.order || 0, 0, {
      type: "select",
      data: secondSelectQuestion,
    });
  }

  return (
    <div className="mx-auto flex w-full max-w-[760px] flex-col items-center justify-center gap-12 p-6">
      <div className="flex w-full flex-col gap-4 text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
          {title}
        </h1>
        {description && (
          <p className="font-body text-[16px] leading-[18px] tracking-[0.75px] text-[#424144]">
            {description}
          </p>
        )}
      </div>

      <div className="w-full space-y-8 px-[100px]">
        {items.map((item, index) =>
          item.type === "select" ? (
            <SelectCustom
              key={`select-${index}`}
              options={item.data.options}
              selectedValue={item.data.value}
              onChange={
                item.data.field === secondSelectQuestion?.field
                  ? onSecondSelectChange || (() => {})
                  : onSelectChange || (() => {})
              }
              title={item.data.question}
              position={item.data.position}
            />
          ) : (
            <div
              key={`toggle-${index}`}
              className="flex items-center justify-between gap-6"
            >
              <span className="flex-1 font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
                {item.data.question}
              </span>
              <CheckBoxCustom
                checked={item.data.value}
                onChange={onToggleChange(item.data.field)}
              />
            </div>
          ),
        )}
      </div>

      <ButtonCustom
        title="Next"
        onClick={onSubmit}
        className="mb-[20px] w-[448px]"
      />
    </div>
  );
};

export default ToggleQuestionStep;
