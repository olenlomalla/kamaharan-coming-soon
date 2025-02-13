import React from "react";

interface TitleDescriptionProps {
  description: { title: string };
}

const TitleDescription: React.FC<TitleDescriptionProps> = ({ description }) => {
  return <h2 className="font-heading">{description.title}</h2>;
};

export default TitleDescription;
