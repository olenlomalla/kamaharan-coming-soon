import React from "react";
import DashboardFooter from "@/components/common/footer/DashboardFooter";
import DashboardHeader from "@/components/common/header/DashboardHeader/DashboardHeader";
import ImageSlider from "./ImageSlider";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <DashboardHeader />

      <ImageSlider />

      <DashboardFooter />
    </div>
  );
};

export default DashboardPage;
