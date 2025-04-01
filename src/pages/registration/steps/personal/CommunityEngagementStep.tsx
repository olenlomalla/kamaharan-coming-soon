import React, { useState } from "react";

import ToggleQuestionStep from "../../../../components/registration/ToggleQuestionStep";
import {
  CommunityPreferences,
  RegistrationStepProps,
} from "../../../../types/registration";

const CommunityEngagementPersonalStep: React.FC<RegistrationStepProps> = ({
  onNext,
  registrationData,
  updateRegistrationData,
  title,
}) => {
  const [formData, setFormData] = useState<CommunityPreferences>({
    localEvents: false,
    networkingEvents: false,
    volunteerOpportunities: false,
    skillSharing: false,
    connectWithOthers: false,
  });
  const questions = [
    {
      question: "Are you interested in local community events?",
      field: "localEvents",
      value: formData.localEvents,
    },
    {
      question:
        "Would you like to be notified about networking or business meetups?",
      field: "networkingEvents",
      value: formData.networkingEvents,
    },
    {
      question:
        "Would you like to participate in charity or volunteering opportunities?",
      field: "volunteerOpportunities",
      value: formData.volunteerOpportunities,
    },
    {
      question:
        "Would you be interested in skill-sharing or mentorship programs?",
      field: "skillSharing",
      value: formData.skillSharing,
    },
    {
      question:
        "Do you want to connect with like-minded individuals in your area?",
      field: "connectWithOthers",
      value: formData.connectWithOthers,
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
        communityPreferences: formData, // Assign the new community preferences
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

export default CommunityEngagementPersonalStep;
