import "leaflet/dist/leaflet.css";
import { useLocation } from "@/context/LocationContext";
import Map, { NavigationControl } from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

const apiKey = import.meta.env.VITE_AWS_API_KEY;
const region = import.meta.env.VITE_AWS_REGION;

const MapWithCustomSearch: React.FC = () => {
  const { userLocation } = useLocation();

  const defaultCenter: [number, number] = [33.6461, -117.8417];

  return (
    <Map
      initialViewState={{
        latitude: userLocation ? userLocation.latitude : defaultCenter[0],
        longitude: userLocation ? userLocation.longitude : defaultCenter[1],
        zoom: 14,
      }}
      style={{ height: "100vh", width: "100vw" }}
      mapStyle={`https://maps.geo.${region}.amazonaws.com/v2/styles/Standard/descriptor?key=${apiKey}&color-scheme=Light`}
    >
      <NavigationControl position="bottom-right" showZoom showCompass={false} />
    </Map>
  );
};

export default MapWithCustomSearch;
