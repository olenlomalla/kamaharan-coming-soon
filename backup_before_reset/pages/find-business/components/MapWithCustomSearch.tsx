import React from "react";
import CustomSearchControl from "./CustomSearchControl";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import ReactLeafletGoogleLayer from "react-leaflet-google-layer"; (For Google Map)

const MapWithCustomSearch: React.FC = () => {
  return (
    <MapContainer
      center={[33.6461, -117.8417]} // Coordinates Irvine, California
      zoom={13}
      zoomControl={false}
      style={{ width: "100vw", height: "100vh" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors, &copy; CARTO"
        url="https://cartodb-basemaps-a.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <CustomSearchControl />
    </MapContainer>

    // Google Maps Show Directions. (Need API for use)

    // <MapContainer
    //   center={[51.505, -0.09]}
    //   zoom={13}
    //   zoomControl={false}
    //   style={{ width: "100vw", height: "100vh" }}
    // >
    //   <ReactLeafletGoogleLayer
    //     apiKey="YOUR_GOOGLE_MAPS_API_KEY"
    //     type="roadmap"
    //   />
    //   <CustomSearchControl />
    // </MapContainer>
  );
};

export default MapWithCustomSearch;
