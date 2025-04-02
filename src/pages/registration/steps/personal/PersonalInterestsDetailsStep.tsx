import React, { useState } from "react";

import ToggleQuestionStep from "@/components/registration/ToggleQuestionStep";
import { PersonalInterests, RegistrationStepProps } from "@/types/registration";

const FREQUENCY_OPTIONS = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "rarely", label: "Rarely" },
];

const PLATFORM_OPTIONS = [
  { value: "instagram", label: "Instagram" },
  { value: "tiktok", label: "TikTok" },
  { value: "youtube", label: "YouTube" },
  { value: "facebook", label: "Facebook" },
];

const PersonalInterestsDetailsStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
  registrationData,
}) => {
  const [formData, setFormData] = useState({
    explorationFrequency:
      registrationData.interests?.explorationFrequency || "daily",
    followsInfluencers: registrationData.interests?.followsInfluencers || false,
    preferredPlatforms: registrationData.interests?.preferredPlatforms || "",
  });

  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value || false,
      ...(field === "followsInfluencers" && !value
        ? { preferredPlatforms: "" }
        : {}),
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      explorationFrequency: value,
    }));
  };

  const handlePlatformChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredPlatforms: value,
    }));
  };

  const handleSubmit = () => {
    const currentInterests: PersonalInterests = {
      categories: registrationData.interests?.categories || [],
      explorationFrequency: formData.explorationFrequency,
      followsInfluencers: formData.followsInfluencers,
      preferredPlatforms: formData.preferredPlatforms,
      preferredContent: registrationData.interests?.preferredContent || [],
    };

    updateRegistrationData({
      interests: currentInterests,
    });
    onNext();
  };

  const questions = [
    {
      question: "Do you follow influencers for recommendations?",
      field: "followsInfluencers",
      value: formData.followsInfluencers,
    },
  ];

  const frequencyQuestion = {
    question: "How often do you explore new businesses or services?",
    field: "explorationFrequency",
    value: formData.explorationFrequency,
    options: FREQUENCY_OPTIONS,
    position: "right" as const,
    order: 0,
  };

  const platformQuestion = formData.followsInfluencers
    ? {
        question: "Which platform do you use most?",
        field: "preferredPlatforms",
        value: formData.preferredPlatforms,
        options: PLATFORM_OPTIONS,
        position: "right" as const,
        order: 2,
      }
    : undefined;

  return (
    <ToggleQuestionStep
      title={title || "Personal Interests & Preferences"}
      description={description}
      questions={questions}
      selectQuestion={frequencyQuestion}
      onToggleChange={handleToggleChange}
      onSelectChange={handleSelectChange}
      onSubmit={handleSubmit}
      secondSelectQuestion={
        formData.followsInfluencers ? platformQuestion : undefined
      }
      onSecondSelectChange={
        formData.followsInfluencers ? handlePlatformChange : undefined
      }
    />
  );
};

export default PersonalInterestsDetailsStep;
