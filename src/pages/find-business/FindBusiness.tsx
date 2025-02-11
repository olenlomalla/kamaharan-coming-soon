import React from "react";
import DashboardHeader from "@/components/common/header/DashboardHeader/DashboardHeader";
import "leaflet/dist/leaflet.css";
import MapWithCustomSearch from "./components/MapWithCustomSearch";

const FindBusiness: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ position: "absolute", top: 0, width: "100%", zIndex: 2000 }}
      >
        <DashboardHeader bgColor="transparent" />
      </div>
      <MapWithCustomSearch />
    </div>
  );
};

export default FindBusiness;
