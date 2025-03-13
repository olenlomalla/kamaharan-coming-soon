import { createContext, useContext, useState, ReactNode } from "react";

export type LocationData = {
  latitude: number;
  longitude: number;
} | null;

type LocationContextType = {
  userLocation: LocationData;
  setUserLocation: (location: LocationData) => void;
};

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [userLocation, setUserLocation] = useState<LocationData>(null);

  const handleSetUserLocation = (location: LocationData) => {
    setUserLocation(location);
  };

  return (
    <LocationContext.Provider
      value={{ userLocation, setUserLocation: handleSetUserLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
