import React, { useState } from "react";

import ToggleQuestionStep from "../../../../components/registration/ToggleQuestionStep";
import {
  CommunityPreferences,
  RegistrationStepProps,
} from "../../../../types/registration";

const CommunityEngagementPersonalStep: React.FC<RegistrationStepProps> = ({
  onNext,
  updateRegistrationData,
  title,
}) => {
  const [formData, setFormData] = useState<CommunityPreferences>({
    interestedInLocalEvents: false,
    interestedInNetworking: false,
    interestedInVolunteering: false,
    interestedInSkillSharing: false,
    wantsToConnectWithOthers: false,
  });

  const questions = [
    {
      question: "Are you interested in local community events?",
      field: "interestedInLocalEvents",
      value: formData.interestedInLocalEvents,
    },
    {
      question:
        "Would you like to be notified about networking or business meetups?",
      field: "interestedInNetworking",
      value: formData.interestedInNetworking,
    },
    {
      question:
        "Would you like to participate in charity or volunteering opportunities?",
      field: "interestedInVolunteering",
      value: formData.interestedInVolunteering,
    },
    {
      question:
        "Would you be interested in skill-sharing or mentorship programs?",
      field: "interestedInSkillSharing",
      value: formData.interestedInSkillSharing,
    },
    {
      question:
        "Do you want to connect with like-minded individuals in your area?",
      field: "wantsToConnectWithOthers",
      value: formData.wantsToConnectWithOthers,
    },
  ];

  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value || false }));
  };

  const handleSubmit = () => {
    updateRegistrationData({
      communityPreferences: formData,
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

export default CommunityEngagementPersonalStep;
