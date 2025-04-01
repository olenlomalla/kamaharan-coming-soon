import React, { useState } from "react";

import ToggleQuestionStep from "../../../../components/registration/ToggleQuestionStep";
import {
  RegistrationStepProps,
  YouthPrograms,
} from "../../../../types/registration";

const YouthFamilyProgramsStep: React.FC<RegistrationStepProps> = ({
  onNext,
  registrationData,
  updateRegistrationData,
  title,
}) => {
  const [formData, setFormData] = useState<YouthPrograms>({
    hasYoungMembers: false,
    wantsUpdates: false,
    wantsTrainingUpdates: false,
    wantsScholarships: false,
  });
  const questions = [
    {
      question:
        "Do you have children or younger family members who could benefit from mentorship or youth programs?",
      field: "hasYoungMembers",
      value: formData.hasYoungMembers,
    },
    {
      question:
        "Would you like to be notified about new programs and activities?",
      field: "wantsUpdates",
      value: formData.wantsUpdates,
    },
    {
      question:
        "Would you like to receive updates on youth training, job opportunities, and workshops?",
      field: "wantsTrainingUpdates",
      value: formData.wantsTrainingUpdates,
    },
    {
      question:
        "Are you looking for scholarships or funding opportunities for your child's education?",
      field: "wantsScholarships",
      value: formData.wantsScholarships,
    },
  ];
  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value || false }));
  };
  const handleSubmit = () => {
    updateRegistrationData({
      personalPreferences: {
        preferredLanguage:
          registrationData.personalPreferences?.preferredLanguage || "", // Default to empty string
        dateOfBirth: registrationData.personalPreferences?.dateOfBirth || "", // Default to empty string
        gender: registrationData.personalPreferences?.gender || "", // Default to empty string
        ...registrationData.personalPreferences, // Spread existing preferences
        youthPrograms: formData, // Assign the new community preferences
      },
    });
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
