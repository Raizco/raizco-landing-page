import type {
  PicklistItem,
  PropertiesPicklists,
} from "~/types/property/propertiesPicklists.type";

export const usePicklistsMapper = () => {
  const mapPicklists = (data: any): PropertiesPicklists => ({
    propertyType: mapPicklistsList(data.property_type),
    status: mapPicklistsList(data.status),
    management: mapPicklistsList(data.management),
    condition: mapPicklistsList(data.condition),
    rentType: mapPicklistsList(data.rent_type),
    areaUnits: mapPicklistsList(data.area_units),
    features: {
      internalFeatures: mapPicklistsList(data.features.internal_features),
      externalFeatures: mapPicklistsList(data.features.external_features),
    },
  });

  const mapPicklistItem = (item: any): PicklistItem => ({
    id: item.id || null,
    label: item.name || "",
    value: item.value || "",
  });

  const mapPicklistsList = (list: any[]): PicklistItem[] =>
    list.map((item) => mapPicklistItem(item));

  return { mapPicklists };
};
