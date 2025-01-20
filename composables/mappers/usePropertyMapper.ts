import type { PropertyType } from "~/types/property/property.type";
import { useGeneralDataMapper } from "./useGeneralDataMapper";
import { useLocationMapper } from "./useLocationMapper";
import { useFeaturesMapper } from "./useFeaturesMapper";

const { mapGeneralData } = useGeneralDataMapper();
const { mapLocation } = useLocationMapper();
const { mapFeatures } = useFeaturesMapper();

export const usePropertyMapper = () => {
  const mapProperty = (property: any): PropertyType => ({
    id: property.property_id,
    name: property.general_data.property_name,
    advisorPhoneNumber: property.advisor_phone_number,
    description: property.description.description,
    generalData: mapGeneralData(property.general_data),
    location: mapLocation(property.location),
    features: mapFeatures(property.features),
    images: property.images,
  });

  const mapProperties = (properties: any[]): PropertyType[] => {
    return properties.map(mapProperty);
  }
   
  return { mapProperty, mapProperties };
};
