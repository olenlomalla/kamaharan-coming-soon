import React, { useState } from "react";

import ToggleQuestionStep from "../../../../components/registration/ToggleQuestionStep";
import {
  RegistrationStepProps,
  YouthPrograms,
} from "../../../../types/registration";

const YouthFamilyProgramsStep: React.FC<RegistrationStepProps> = ({
  onNext,
  updateRegistrationData,
  title,
}) => {
  const [formData, setFormData] = useState<YouthPrograms>({
    hasChildren: false,
    interestedInNetworking: false,
    interestedInYouthPrograms: false,
    interestedInScholarships: false,
  });
  const questions = [
    {
      question:
        "Do you have children or younger family members who could benefit from mentorship or youth programs?",
      field: "hasChildren",
      value: formData.hasChildren,
    },
    {
      question:
        "Would you like to be notified about new programs and activities?",
      field: "interestedInNetworking",
      value: formData.interestedInNetworking,
    },
    {
      question:
        "Would you like to receive updates on youth training, job opportunities, and workshops?",
      field: "interestedInYouthPrograms",
      value: formData.interestedInYouthPrograms,
    },
    {
      question:
        "Are you looking for scholarships or funding opportunities for your child's education?",
      field: "interestedInScholarships",
      value: formData.interestedInScholarships,
    },
  ];
  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value || false }));
  };
  const handleSubmit = () => {
    updateRegistrationData({ youthPrograms: formData });
    onNext();
  };

  return (
    <ToggleQuestionStep
      title={title}
      questions={questions}
      onToggleChange={handleToggleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default YouthFamilyProgramsStep;
