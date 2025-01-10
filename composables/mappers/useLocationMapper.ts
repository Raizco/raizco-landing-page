import type { LocationType } from "~/types/property/location.type";

export const useLocationMapper = () => {
  const mapLocation = (location: any): LocationType => ({
    stateName: location.state_name,
    cityName: location.city_name,
    zoneName: location.zone_name,
    address: location.address,
    latitude: location.latitude,
    longitude: location.longitude,
  });

  return { mapLocation };
};
