import React from "react";
import Map, { NavigationControl } from "react-map-gl/maplibre";

import { useLocation } from "@/context/LocationContext";
import { CodeIcon } from "lucide-react";

const apiKey = import.meta.env.VITE_AWS_API_KEY;
const region = import.meta.env.VITE_AWS_REGION;
const defaultCenter: [number, number] = [33.6461, -117.8417];

type LocationCardProps = {
  title: string;
  renderPropCaption: () => React.ReactNode;
};

const LocationCard = ({ title, renderPropCaption }: LocationCardProps) => {
  const { userLocation } = useLocation();

  return (
    <div>
      <div className="grid w-full grid-cols-9">
        <div className="col-span-3 flex flex-col items-start gap-2">
          {title && <h3 className="font-semibold"> {title}</h3>}
          {renderPropCaption()}
        </div>
        <div className="col-span-6">
          <Map
            initialViewState={{
              latitude: userLocation ? userLocation.latitude : defaultCenter[0],
              longitude: userLocation
                ? userLocation.longitude
                : defaultCenter[1],
              zoom: 14,
            }}
            style={{ height: "263px", width: "auto", minWidth: "556px" }}
            mapStyle={`https://maps.geo.${region}.amazonaws.com/v2/styles/Standard/descriptor?key=${apiKey}&color-scheme=Light`}
          >
            <NavigationControl
              position="bottom-right"
              showZoom
              showCompass={false}
            />
          </Map>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
